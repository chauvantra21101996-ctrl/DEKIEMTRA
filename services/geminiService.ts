
import { GoogleGenAI, Type } from "@google/genai";
import { ExamConfig, GeneratedExamData } from "../types";

// Sử dụng model có khả năng suy luận tốt để tính toán số liệu bảng
const EXAM_GENERATION_MODEL_NAME = 'gemini-3-flash-preview'; 
const ASSISTANT_MODEL_NAME = 'gemini-3-flash-preview';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(ai: GoogleGenAI, params: any, retries = 3, baseDelay = 4000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await ai.models.generateContent(params);
    } catch (error: any) {
      const isRateLimit = error.code === 429 || 
                          error.status === 429 || 
                          error.status === 'RESOURCE_EXHAUSTED';
      const isServerOverload = error.code === 503 || error.status === 503;

      if (i < retries - 1 && (isRateLimit || isServerOverload)) {
         const delay = baseDelay * Math.pow(2, i);
         console.warn(`Gemini API busy/quota exceeded (Attempt ${i+1}/${retries}). Retrying in ${delay}ms...`);
         await sleep(delay);
         continue;
      }
      throw error;
    }
  }
}

export const getAIAssistantResponse = async (question: string, context: ExamConfig): Promise<string> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = `
        Bạn là một trợ lý AI chuyên gia về giáo dục và khảo thí tại Việt Nam, đặc biệt am hiểu về Công văn 7991. 
        Nhiệm vụ của bạn là hỗ trợ giáo viên trong quá trình tạo đề kiểm tra. 
        Hãy sử dụng "Ngữ cảnh đề bài hiện tại" được cung cấp để đưa ra câu trả lời ngắn gọn, chính xác và phù hợp nhất.
        Luôn trả lời bằng tiếng Việt.
    `;

    const userPrompt = `
      --- NGỮ CẢNH ĐỀ BÀI HIỆN TẠI ---
      ${JSON.stringify(context, null, 2)}
      ---------------------------------

      Câu hỏi của giáo viên: "${question}"
    `;

    try {
        const response = await ai.models.generateContent({
            model: ASSISTANT_MODEL_NAME,
            contents: userPrompt,
            config: {
              systemInstruction,
              temperature: 0.5,
            }
        });

        if (!response.text) {
            return "Xin lỗi, tôi chưa thể đưa ra câu trả lời lúc này. Vui lòng thử lại sau.";
        }
        return response.text;
    } catch (error) {
        console.error("AI Assistant Error:", error);
        throw new Error("Không thể kết nối tới trợ lý AI.");
    }
};

export const generateExamContent = async (config: ExamConfig): Promise<GeneratedExamData> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const scopeDetails = config.scopeItems.map((item, index) => {
    return `- Chương/Chủ đề: "${item.chapter}" | Bài học/Nội dung: "${item.name}" | Số tiết: ${item.periods}`;
  }).join('\n');

  // Định nghĩa cấu trúc Header chuẩn cho Ma trận (Phụ lục 1 - 19 cột)
  const matrixHeaderHTML = `
  <thead>
    <tr>
      <th rowspan='4'>TT</th>
      <th rowspan='4'>Chương/<br/>Chủ đề</th>
      <th rowspan='4'>Nội dung/<br/>Đơn vị kiến thức</th>
      <th colspan='12'>Mức độ đánh giá</th>
      <th colspan='3'>Tổng</th>
      <th rowspan='4'>Tỉ lệ %<br/>điểm</th>
    </tr>
    <tr>
      <th colspan='9'>Trắc nghiệm (TNKQ)</th>
      <th colspan='3'>Tự luận (TL)</th>
      <th rowspan='3'>Biết</th>
      <th rowspan='3'>Hiểu</th>
      <th rowspan='3'>Vận dụng</th>
    </tr>
    <tr>
      <th colspan='3'>Nhiều lựa chọn</th>
      <th colspan='3'>Đúng/Sai</th>
      <th colspan='3'>Trả lời ngắn</th>
      <th rowspan='2'>Biết</th>
      <th rowspan='2'>Hiểu</th>
      <th rowspan='2'>Vận dụng</th>
    </tr>
    <tr>
      <th>Biết</th><th>Hiểu</th><th>VD</th>
      <th>Biết</th><th>Hiểu</th><th>VD</th>
      <th>Biết</th><th>Hiểu</th><th>VD</th>
    </tr>
  </thead>`;

  // Định nghĩa cấu trúc Header chuẩn cho Đặc tả (Phụ lục 2)
  const specHeaderHTML = `
  <thead>
    <tr>
      <th rowspan='4'>TT</th>
      <th rowspan='4'>Chương/<br/>Chủ đề</th>
      <th rowspan='4'>Nội dung/<br/>Đơn vị kiến thức</th>
      <th rowspan='4' style='width:25%'>Mức độ đánh giá<br/>(Yêu cầu cần đạt)</th>
      <th colspan='12'>Số câu hỏi theo mức độ đánh giá</th>
    </tr>
    <tr>
      <th colspan='9'>Trắc nghiệm (TNKQ)</th>
      <th colspan='3'>Tự luận (TL)</th>
    </tr>
    <tr>
      <th colspan='3'>Nhiều lựa chọn</th>
      <th colspan='3'>Đúng/Sai</th>
      <th colspan='3'>Trả lời ngắn</th>
      <th rowspan='2'>Biết</th>
      <th rowspan='2'>Hiểu</th>
      <th rowspan='2'>Vận dụng</th>
    </tr>
    <tr>
      <th>Biết</th><th>Hiểu</th><th>VD</th>
      <th>Biết</th><th>Hiểu</th><th>VD</th>
      <th>Biết</th><th>Hiểu</th><th>VD</th>
    </tr>
  </thead>`;

  let systemInstruction = `
    Bạn là Chuyên gia Khảo thí của Bộ GD&ĐT Việt Nam. Nhiệm vụ: Xây dựng hồ sơ kiểm tra định kì theo đúng mẫu Công văn 7991/BGDĐT-GDTrH.

    DỮ LIỆU ĐẦU VÀO:
    - Môn: ${config.subject}, Khối ${config.grade}, Bộ sách: ${Array.isArray(config.textbook) ? config.textbook.join(', ') : config.textbook}.
    - Thời gian: ${config.duration} phút.
    - Cấu trúc số lượng câu: Phần 1 (Trắc nghiệm nhiều lựa chọn - ${config.questionCounts.part1} câu), Phần 2 (Trắc nghiệm Đúng/Sai - ${config.questionCounts.part2} câu), Phần 3 (Trắc nghiệm Trả lời ngắn - ${config.questionCounts.part3} câu), Phần 4 (Tự luận - ${config.questionCounts.part4} câu).
    - Tỉ lệ mức độ: Nhận biết ${config.levelDistribution.awareness}% - Thông hiểu ${config.levelDistribution.understanding}% - Vận dụng ${config.levelDistribution.application}%.

    YÊU CẦU 1: MA TRẬN (Phụ lục 1 - 19 CỘT)
    - Trả về mã HTML <table> hoàn chỉnh.
    - BẮT BUỘC sử dụng cấu trúc <thead> 19 cột sau đây: ${matrixHeaderHTML}
    - Phần <tbody>: Điền các dòng tương ứng với các "Nội dung/Đơn vị kiến thức".
    - Phân bổ số câu hỏi (n) vào các ô mức độ.
    - Các cột "Tổng" (Biết, Hiểu, Vận dụng) ở cuối bảng: Đối với mỗi dòng, tính tổng số câu hỏi theo từng mức độ nhận thức (cộng tất cả các loại hình TNKQ và TL).
    - **TÍNH TOÁN CỘT "Tỉ lệ % điểm" (QUAN TRỌNG):**
        + Tổng điểm toàn bài thi là 10. Phân bổ tổng điểm này theo "Tỉ lệ mức độ" đã cho ở DỮ LIỆU ĐẦU VÀO (Nhận biết ${config.levelDistribution.awareness}%, Thông hiểu ${config.levelDistribution.understanding}%, Vận dụng ${config.levelDistribution.application}%).
        + **QUY TẮC ĐIỂM PHẦN 2 (ĐÚNG/SAI): Mỗi câu hỏi Đúng/Sai có giá trị chính xác là 1,0 điểm.**
        + Dựa vào phân bổ điểm theo mức độ và quy tắc trên, hãy tính điểm cho các câu hỏi còn lại một cách hợp lý.
        + Đối với mỗi dòng "Nội dung/đơn vị kiến thức", hãy tính tổng điểm của các câu hỏi thuộc dòng đó.
        + Cột "Tỉ lệ % điểm" = (Tổng điểm của dòng / 10) * 100. Ghi kết quả dưới dạng "X%".
    - Dòng cuối cùng là "Tổng cộng". Cột "Tỉ lệ % điểm" ở dòng tổng cộng phải là "100%".

    YÊU CẦU 2: BẢN ĐẶC TẢ (Phụ lục 2)
    - Trả về mã HTML <table> hoàn chỉnh.
    - BẮT BUỘC sử dụng cấu trúc <thead> sau đây (không được thay đổi): ${specHeaderHTML}
    - **Cột "Mức độ đánh giá (Yêu cầu cần đạt)" (QUAN TRỌNG NHẤT):**
        + BẠN BẮT BUỘC phải phân tích và trích xuất "Yêu cầu cần đạt" (learning objectives) trực tiếp từ **Chương trình giáo dục phổ thông 2018** của Bộ GD&ĐT cho môn ${config.subject}, lớp ${config.grade}, tương ứng với từng "Nội dung/Đơn vị kiến thức".
        + Nội dung phải được trình bày rõ ràng theo các mức độ nhận thức (nếu có đủ thông tin), mỗi mức độ xuống dòng và bắt đầu bằng bullet point. Ví dụ:
          "- <b>Nhận biết:</b> Kể tên được các hành tinh trong hệ mặt trời.<br/>"
          "- <b>Thông hiểu:</b> Giải thích được tại sao có hiện tượng ngày và đêm.<br/>"
          "- <b>Vận dụng:</b> Vận dụng kiến thức để tính toán chu kì quay của một hành tinh."
        + **Nội dung phải chính xác và bám sát 100%** vào văn bản chương trình GDPT 2018. TUYỆT ĐỐI KHÔNG được tự ý bịa đặt hay diễn giải sai lệch. Cột này KHÔNG được để trống.
    - Các ô trong lưới mức độ đánh giá (Biết, Hiểu, VD của từng loại hình): Ghi trực tiếp số thứ tự của câu hỏi tương ứng (ví dụ: C1, C5, C8). Tuyệt đối không ghi số lượng câu hỏi (n).
    - **HÀNG TỔNG CỘNG (QUAN TRỌNG):** Cuối bảng, BẮT BUỘC phải có 2 dòng tổng cộng:
        1. Dòng "Tổng số câu": Tính tổng số câu hỏi trong mỗi cột mức độ nhận thức.
        2. Dòng "Tổng số điểm": Tính tổng điểm cho mỗi cột, dựa trên tổng điểm 10. **Lưu ý: Mỗi câu hỏi Đúng/Sai (Phần 2) có giá trị 1,0 điểm.** Phân bổ điểm hợp lý cho các câu còn lại. Đảm bảo tổng điểm của tất cả các cột cộng lại bằng 10.0. Dùng dấu phẩy (,) cho số thập phân.

    YÊU CẦU 3: ĐỀ THI
    - Tạo đề thi mẫu định dạng Markdown.
    - **Chất lượng:** Nội dung câu hỏi phải độc nhất, chính xác, rõ ràng, không lặp lại, và phù hợp với mức độ nhận thức.
    - Đề thi chia rõ 4 phần: Phần I (Trắc nghiệm nhiều lựa chọn), Phần II (Trắc nghiệm Đúng/Sai), Phần III (Trắc nghiệm Trả lời ngắn), Phần IV (Tự luận).
    - **QUY TẮC ĐỊNH DẠNG MARKDOWN (BẮT BUỘC TUÂN THỦ):**
      + Tiêu đề phần (PHẦN I, PHẦN II...) phải là heading cấp 2 (dùng \`##\`), IN HOA, và ghi rõ tổng điểm. Ví dụ: \`## PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm)\`. Tổng điểm phần II phải bằng số câu của phần II.
      + Mỗi câu hỏi là một đoạn văn (paragraph) riêng.
      + Bắt đầu mỗi câu hỏi bằng \`**Câu X:**\` (in đậm, X là số thứ tự). Ví dụ: \`**Câu 1:** Cho tập hợp...\`
      + **QUAN TRỌNG (LATEX):** Mọi công thức toán học, ký hiệu khoa học (tập hợp, số mũ, phân số, v.v.) BẮT BUỘC phải được bao quanh bởi dấu \`$\` để hiển thị đúng định dạng LaTeX. Ví dụ: $x \\in \\mathbb{N}$, $A = \\{1, 2, 3\\}$, $2^3$, $a^2 + b^2 = c^2$. TUYỆT ĐỐI KHÔNG dùng ký tự unicode hoặc văn bản thường cho ký hiệu toán học.
      + **PHẦN I (Nhiều lựa chọn):** Trình bày 4 phương án A, B, C, D. **MỖI PHƯƠNG ÁN BẮT BUỘC PHẢI XUỐNG DÒNG.** Sử dụng thẻ \`<br/>\` để ngắt dòng. Ví dụ:<br/>**A.** $P=\\{x \\in \\mathbb{N} | x<9\\}$<br/>**B.** $P=\\{x \\in \\mathbb{N} | x \\le 9\\}$<br/>**C.** $P=\\{x \\in \\mathbb{N} | x>9\\}$<br/>**D.** $P=\\{x \\in \\mathbb{N} | x \\ge 9\\}\`
      + **PHẦN II (Đúng/Sai):** BẮT BUỘC mỗi câu phải có một câu dẫn và **chính xác 4 phát biểu a, b, c, d.** **MỖI PHÁT BIỂU PHẢI XUỐNG DÒNG.** Ví dụ:<br/>**Câu 11:** Cho các số tự nhiên $A=2,024$, $B=2,042$, $C=1,999$ và tập hợp $S=\\{x \\in \\mathbb{N} | C < x < A\\}$.<br/>a) Số lớn nhất trong ba số A, B, C là 2,024.<br/>b) Số liền trước của số C là 2,000.<br/>c) Tập hợp S có chứa số 2,000.<br/>d) Viết số A dưới dạng La Mã là MMXXIV.

    YÊU CẦU 4: ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM
    - **TÍNH CHÍNH XÁC TUYỆT ĐỐI:** Đáp án phải được kiểm tra kỹ lưỡng để đảm bảo chính xác 100%. Đây là yêu cầu quan trọng nhất.
    - Trả về dưới dạng một chuỗi Markdown duy nhất, chia rõ các phần tương ứng với đề thi.
    - **Phần trắc nghiệm (I, II, III):** Cung cấp đáp án dưới dạng BẢNG (table) Markdown. Mỗi bảng gồm 2 cột: "Câu" và "Đáp án".
    - **ĐÁP ÁN PHẦN II (ĐÚNG/SAI):** Đối với mỗi câu, cột "Đáp án" phải liệt kê rõ đáp án (Đúng/Sai) cho cả 4 phát biểu a, b, c, d. Ví dụ: \`a-Sai, b-Đúng, c-Đúng, d-Sai\`.
    - **Phần tự luận (IV):** Cung cấp "HƯỚNG DẪN CHẤM CHI TIẾT" chứ không chỉ đưa ra kết quả. Phải phân bổ thang điểm chi tiết cho từng bước giải, từng ý. Tổng điểm của các ý phải bằng tổng điểm của câu đó. Ghi chú các cách giải khác (nếu có) và nguyên tắc làm tròn điểm.
    - **HƯỚNG DẪN CHẤM PHẦN II (Đúng/Sai):** Sau bảng đáp án của phần II, cần có một mục riêng "Hướng dẫn chấm chi tiết Phần II". Trong đó, nêu rõ: "Mỗi câu Đúng/Sai trả lời đúng cả 4 ý được 1,0 điểm. Mỗi ý đúng được 0,25 điểm."

    OUTPUT JSON FORMAT:
    {
      "matrix": "<table>...</table>",
      "specification": "<table>...</table>",
      "examPaper": "Markdown string...",
      "answers": "Markdown string..."
    }
  `;

  let userPrompt = `
    Hãy xây dựng hồ sơ dựa trên phạm vi kiến thức sau đây (Người dùng nhập thủ công):
    ${scopeDetails}
    
    Lưu ý quan trọng:
    1. Tính toán số liệu trong Ma trận phải logic, tổng số câu phải khớp với ${config.questionCounts.part1 + config.questionCounts.part2 + config.questionCounts.part3 + config.questionCounts.part4} câu.
    2. Nội dung Đặc tả phải bám sát Yêu cầu cần đạt của chương trình GDPT 2018 môn ${config.subject}.
  `;

  try {
    const response = await generateWithRetry(ai, {
      model: EXAM_GENERATION_MODEL_NAME,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 4096 }, 
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            matrix: { type: Type.STRING },
            specification: { type: Type.STRING },
            examPaper: { type: Type.STRING },
            answers: { type: Type.STRING },
          },
          required: ["matrix", "specification", "examPaper", "answers"],
        },
      },
    });

    if (!response.text) {
        throw new Error("Không nhận được dữ liệu từ AI.");
    }

    return JSON.parse(response.text.trim()) as GeneratedExamData;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
