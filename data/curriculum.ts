
// FIX: Removed local type definitions and imported from central types file.
import type { CurriculumChapter } from '../types.ts';

// Dữ liệu mở rộng GDPT 2018 (Tiếp tục bổ sung)
export const CURRICULUM_DATA: Record<string, Record<string, Record<string, CurriculumChapter[]>>> = {
  "Toán học": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Tập hợp các số tự nhiên", lessons: [{name: "Bài 1: Tập hợp"}, {name: "Bài 2: Cách ghi số tự nhiên"}, {name: "Bài 3: Thứ tự thực hiện các phép tính"}, {name: "Bài 4: Phép tính lũy thừa với số mũ tự nhiên"}, {name: "Bài 5: Phép chia hết. Kiểm tra việc thực hiện phép tính (Thực hành)"}] },
        { chapter: "Chương II: Tính chia hết trong tập hợp các số tự nhiên", lessons: [{name: "Bài 6: Chia hết và chia có dư. Tính chất chia hết của một tổng"}, {name: "Bài 7: Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9"}, {name: "Bài 8: Tam giác đều. Hình vuông. Lục giác đều (Tích hợp hình học)"}, {name: "Bài 9: Ước và bội"}, {name: "Bài 10: Số nguyên tố. Hợp số. Phân tích một số ra thừa số nguyên tố"}, {name: "Bài 11: Ước chung. Ước chung lớn nhất"}, {name: "Bài 12: Bội chung. Bội chung nhỏ nhất"}] },
        { chapter: "Chương III: Số nguyên", lessons: [{name: "Bài 13: Tập hợp các số nguyên"}, {name: "Bài 14: Phép cộng và phép trừ số nguyên"}, {name: "Bài 15: Quy tắc dấu ngoặc"}, {name: "Bài 16: Phép nhân số nguyên"}, {name: "Bài 17: Phép chia hết trong tập hợp số nguyên. Ước và bội của một số nguyên"}] },
        { chapter: "Chương IV: Một số hình phẳng trong thực tiễn", lessons: [{name: "Bài 18: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân"}, {name: "Bài 19: Chu vi và diện tích của một số hình phẳng trong thực tiễn"}] },
        { chapter: "Chương V: Tính đối xứng của hình phẳng trong thế giới tự nhiên", lessons: [{name: "Bài 21: Hình có trục đối xứng"}, {name: "Bài 22: Hình có tâm đối xứng"}] },
        { chapter: "Chương VI: Phân số", lessons: [{name: "Bài 23: Mở rộng phân số. Phân số bằng nhau"}, {name: "Bài 24: So sánh phân số. Hỗn số dương"}, {name: "Bài 25: Phép cộng và phép trừ phân số"}, {name: "Bài 26: Phép nhân và phép chia phân số"}, {name: "Bài 27: Hai bài toán về phân số"}] },
        { chapter: "Chương VII: Số thập phân", lessons: [{name: "Bài 28: Số thập phân"}, {name: "Bài 29: Tính toán với số thập phân"}, {name: "Bài 30: Làm tròn và ước lượng"}, {name: "Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm"}] },
        { chapter: "Chương VIII: Những hình hình học cơ bản", lessons: [{name: "Bài 32: Điểm. Đường thẳng"}, {name: "Bài 33: Tia"}, {name: "Bài 34: Đoạn thẳng. Độ dài đoạn thẳng"}, {name: "Bài 35: Trung điểm của đoạn thẳng"}, {name: "Bài 36: Góc"}, {name: "Bài 37: Số đo góc"}] },
        { chapter: "Chương IX: Dữ liệu và Xác suất thực nghiệm", lessons: [{name: "Bài 38: Dữ liệu và thu thập dữ liệu"}, {name: "Bài 39: Bảng thống kê và biểu đồ tranh"}, {name: "Bài 40: Biểu đồ cột"}, {name: "Bài 41: Biểu đồ cột kép"}, {name: "Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm"}, {name: "Bài 43: Xác suất thực nghiệm"}] }
      ],
      "Cánh Diều": [
        { chapter: "Chương I: Số tự nhiên", lessons: [{name: "Bài 1: Tập hợp", defaultPeriods: 2}, {name: "Bài 2: Tập hợp các số tự nhiên", defaultPeriods: 2}, {name: "Bài 3: Phép cộng, phép trừ các số tự nhiên", defaultPeriods: 2}] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Số hữu tỉ", lessons: [{name: "Bài 1: Tập hợp các số hữu tỉ"}, {name: "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ"}, {name: "Bài 3: Phép tính lũy thừa với số mũ tự nhiên của một số hữu tỉ"}, {name: "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc dấu ngoặc"}, {name: "Bài 5: Biểu diễn số hữu tỉ trên trục số"}] },
        { chapter: "Chương II: Số thực", lessons: [{name: "Bài 6: Số thập phân hữu hạn và số thập phân vô hạn tuần hoàn"}, {name: "Bài 7: Tập hợp các số thực"}, {name: "Bài 8: Căn bậc hai số học"}, {name: "Bài 9: Giá trị tuyệt đối của một số thực"}, {name: "Bài 10: Làm tròn số và ước lượng kết quả"}] },
        { chapter: "Chương III: Góc và đường thẳng song song", lessons: [{name: "Bài 11: Góc ở vị trí đặc biệt. Tia phân giác của một góc"}, {name: "Bài 12: Hai đường thẳng song song và dấu hiệu nhận biết"}, {name: "Bài 13: Tiên đề Euclid. Tính chất của hai đường thẳng song song"}, {name: "Bài 14: Định lí và chứng minh một định lí"}] },
        { chapter: "Chương IV: Tam giác bằng nhau", lessons: [{name: "Bài 15: Tổng các góc trong một tam giác"}, {name: "Bài 16: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác: cạnh - cạnh - cạnh"}, {name: "Bài 17: Trường hợp bằng nhau thứ hai của tam giác: cạnh - góc – cạnh"}, {name: "Bài 18: Trường hợp bằng nhau thứ ba của tam giác: góc - cạnh - góc"}, {name: "Bài 19: Các trường hợp bằng nhau của tam giác vuông"}, {name: "Bài 20: Tam giác cân. Đường trung trực của đoạn thẳng"}] },
        { chapter: "Chương V: Thu thập và biểu diễn dữ liệu", lessons: [{name: "Bài 21: Thu thập và phân loại dữ liệu"}, {name: "Bài 22: Biểu đồ hình quạt tròn"}, {name: "Bài 23: Biểu đồ đoạn thẳng"}] },
        { chapter: "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ", lessons: [{name: "Bài 24: Tỉ lệ thức"}, {name: "Bài 25: Tính chất của dãy tỉ số bằng nhau"}, {name: "Bài 26: Đại lượng tỉ lệ thuận"}, {name: "Bài 27: Đại lượng tỉ lệ nghịch"}] },
        { chapter: "Chương VII: Biểu thức đại số và đa thức một biến", lessons: [{name: "Bài 28: Biểu thức đại số"}, {name: "Bài 29: Đa thức một biến"}, {name: "Bài 30: Cộng và trừ đa thức một biến"}, {name: "Bài 31: Nhân đa thức một biến"}, {name: "Bài 32: Chia đa thức một biến"}] },
        { chapter: "Chương VIII: Làm quen với biến cố và xác suất của biến cố", lessons: [{name: "Bài 33: Làm quen với biến cố"}, {name: "Bài 34: Làm quen với xác suất của biến cố"}] },
        { chapter: "Chương IX: Quan hệ giữa các yếu tố trong một tam giác", lessons: [{name: "Bài 35: Quan hệ giữa góc và cạnh đối diện trong một tam giác"}, {name: "Bài 36: Quan hệ giữa đường vuông góc và đường xiên"}, {name: "Bài 37: Bất đẳng thức tam giác"}, {name: "Bài 38: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác"}, {name: "Bài 39: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác"}] },
        { chapter: "Chương X: Các hình khối trong thực tiễn", lessons: [{name: "Bài 40: Hình lăng trụ đứng tam giác. Hình lăng trụ đứng tứ giác"}] }
      ]
    },
    "8": {
        "Kết nối tri thức với cuộc sống": [
            { chapter: "Chương I: Đa thức", lessons: [{name: "Bài 1: Đơn thức"}, {name: "Bài 2: Đa thức"}, {name: "Bài 3: Phép cộng và phép trừ đa thức"}, {name: "Bài 4: Phép nhân đa thức"}, {name: "Bài 5: Phép chia đa thức cho đơn thức"}] },
            { chapter: "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng", lessons: [{name: "Bài 6: Hiệu hai bình phương. Bình phương của một tổng hoặc một hiệu"}, {name: "Bài 7: Lập phương của một tổng hoặc một hiệu"}, {name: "Bài 8: Tổng và hiệu hai lập phương"}, {name: "Bài 9: Phân tích đa thức thành nhân tử"}] },
            { chapter: "Chương III: Tứ giác", lessons: [{name: "Bài 10: Tứ giác"}, {name: "Bài 11: Hình thang cân"}, {name: "Bài 12: Hình bình hành"}, {name: "Bài 13: Hình chữ nhật"}, {name: "Bài 14: Hình thoi và hình vuông"}] },
            { chapter: "Chương IV: Định lí Thalès", lessons: [{name: "Bài 15: Định lí Thalès trong tam giác"}, {name: "Bài 16: Đường trung bình của tam giác"}, {name: "Bài 17: Tính chất đường phân giác của tam giác"}] },
            { chapter: "Chương V: Dữ liệu và biểu đồ", lessons: [{name: "Bài 18: Thu thập và phân loại dữ liệu"}, {name: "Bài 19: Biểu đồ đoạn thẳng"}, {name: "Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ"}] },
            { chapter: "Chương VI: Phân thức đại số", lessons: [{name: "Bài 21: Khái niệm phân thức đại số"}, {name: "Bài 22: Tính chất cơ bản của phân thức đại số"}, {name: "Bài 23: Phép cộng và phép trừ phân thức đại số"}, {name: "Bài 24: Phép nhân và phép chia phân thức đại số"}] },
            { chapter: "Chương VII: Phương trình bậc nhất và hàm số bậc nhất", lessons: [{name: "Bài 25: Phương trình bậc nhất một ẩn"}, {name: "Bài 26: Giải bài toán bằng cách lập phương trình bậc nhất"}, {name: "Bài 27: Khái niệm hàm số và đồ thị của hàm số"}, {name: "Bài 28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất"}, {name: "Bài 29: Hệ số góc của đường thẳng"}] },
            { chapter: "Chương VIII: Mở đầu về tính đồng dạng của hình học", lessons: [{name: "Bài 30: Hai tam giác đồng dạng"}, {name: "Bài 31: Cách thiết lập hai tam giác đồng dạng"}, {name: "Bài 32: Trường hợp đồng dạng đặc biệt của hai tam giác"}] },
            { chapter: "Chương IX: Làm quen với xác suất của biến cố ngẫu nhiên", lessons: [{name: "Bài 33: Biến cố ngẫu nhiên và xác suất của biến cố ngẫu nhiên"}, {name: "Bài 34: Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản"}] }
        ]
    },
    "9": {
        "Kết nối tri thức với cuộc sống": [
            { chapter: "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn", lessons: [{name: "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn"}, {name: "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế"}, {name: "Bài 3: Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp cộng đại số"}, {name: "Bài 4: Giải bài toán bằng cách lập hệ phương trình bậc nhất hai ẩn"}] },
            { chapter: "Chương II: Phương trình bậc nhất một ẩn và bất phương trình bậc nhất một ẩn", lessons: [{name: "Bài 5: Bất đẳng thức và tính chất"}, {name: "Bài 6: Bất phương trình bậc nhất một ẩn"}] },
            { chapter: "Chương III: Căn bậc hai và căn bậc ba", lessons: [{name: "Bài 7: Căn bậc hai và căn thức bậc hai"}, {name: "Bài 8: Khai căn bậc hai và hằng đẳng thức $\\sqrt{A^2} = |A|$"}, {name: "Bài 9: Các biến đổi đơn giản biểu thức chứa căn thức bậc hai"}, {name: "Bài 10: Căn bậc ba và căn thức bậc ba"}] },
            { chapter: "Chương IV: Hệ thức lượng trong tam giác vuông", lessons: [{name: "Bài 11: Tỉ số lượng giác của góc nhọn"}, {name: "Bài 12: Một số hệ thức giữa cạnh và góc trong tam giác vuông"}, {name: "Bài 13: Ứng dụng thực tế của tỉ số lượng giác"}] },
            { chapter: "Chương V: Đường tròn", lessons: [{name: "Bài 14: Khái niệm đường tròn và tính chất đối xứng của đường tròn"}, {name: "Bài 15: Vị trí tương đối của đường thẳng và đường tròn"}, {name: "Bài 16: Vị trí tương đối của hai đường tròn"}, {name: "Bài 17: Tiếp tuyến của đường tròn"}] },
            { chapter: "Chương VI: Hàm số $y = ax^2$ ($a \\neq 0$). Phương trình bậc hai một ẩn", lessons: [{name: "Bài 18: Hàm số $y = ax^2$ ($a \\neq 0$) và đồ thị"}, {name: "Bài 19: Phương trình bậc hai một ẩn"}, {name: "Bài 20: Công thức nghiệm của phương trình bậc hai"}, {name: "Bài 21: Giải bài toán bằng cách lập phương trình bậc hai"}] },
            { chapter: "Chương VII: Định lí Viète và ứng dụng", lessons: [{name: "Bài 22: Định lí Viète và ứng dụng"}] },
            { chapter: "Chương VIII: Đường tròn ngoại tiếp và đường tròn nội tiếp", lessons: [{name: "Bài 23: Đường tròn ngoại tiếp tam giác. Đường tròn nội tiếp tam giác"}, {name: "Bài 24: Đa giác đều. Đường tròn ngoại tiếp và đường tròn nội tiếp đa giác đều"}] },
            { chapter: "Chương IX: Hình trụ. Hình nón. Hình cầu", lessons: [{name: "Bài 25: Hình trụ"}, {name: "Bài 26: Hình nón"}, {name: "Bài 27: Hình cầu"}] }
        ]
    }
  },
  "Ngữ văn": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Tôi và các bạn (Truyện đồng thoại)", lessons: [] },
        { chapter: "Bài 2: Gõ cửa trái tim (Thơ)", lessons: [] },
        { chapter: "Bài 3: Yêu thương và chia sẻ (Truyện ngắn)", lessons: [] },
        { chapter: "Bài 4: Quê hương yêu dấu (Thơ lục bát)", lessons: [] },
        { chapter: "Bài 5: Những nẻo đường xứ sở (Du kí)", lessons: [] },
        { chapter: "Bài 6: Chuyện kể về những anh hùng (Truyền thuyết)", lessons: [] },
        { chapter: "Bài 7: Thế giới cổ tích (Truyện cổ tích)", lessons: [] },
        { chapter: "Bài 8: Khác biệt và gần gũi (Nghị luận xã hội)", lessons: [] },
        { chapter: "Bài 9: Trái Đất – ngôi nhà chung (Văn bản thông tin)", lessons: [] },
        { chapter: "Bài 10: Cuốn sách tôi yêu (Ôn tập)", lessons: [] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Bầu trời tuổi thơ (Truyện ngắn)", lessons: [] },
        { chapter: "Bài 2: Khúc nhạc tâm hồn (Thơ 4 chữ, 5 chữ)", lessons: [] },
        { chapter: "Bài 3: Cội nguồn yêu thương (Truyện)", lessons: [] },
        { chapter: "Bài 4: Giai điệu đất nước (Thơ)", lessons: [] },
        { chapter: "Bài 5: Màu sắc của trí tuệ (Truyện ngụ ngôn)", lessons: [] },
        { chapter: "Bài 6: Bài học từ thiên nhiên (Nghị luận xã hội)", lessons: [] },
        { chapter: "Bài 7: Thế giới viễn tưởng (Truyện khoa học viễn tưởng)", lessons: [] },
        { chapter: "Bài 8: Trải nghiệm trong đời (Nghị luận văn học)", lessons: [] },
        { chapter: "Bài 9: Hòa điệu với tự nhiên (Văn bản thông tin)", lessons: [] },
        { chapter: "Bài 10: Trang sách và cuộc sống (Ôn tập)", lessons: [] }
      ]
    },
    "8": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Câu chuyện của lịch sử (Truyện lịch sử)", lessons: [] },
        { chapter: "Bài 2: Vẻ đẹp của bài thơ (Thơ tự do)", lessons: [] },
        { chapter: "Bài 3: Lời sông núi (Văn bản nghị luận)", lessons: [] },
        { chapter: "Bài 4: Tiếng cười của hy vọng (Truyện cười, Hài kịch)", lessons: [] },
        { chapter: "Bài 5: Những câu chuyện hài hước (Truyện trào phúng)", lessons: [] },
        { chapter: "Bài 6: Chân dung cuộc sống (Truyện hiện đại)", lessons: [] },
        { chapter: "Bài 7: Tin yêu và ước vọng (Thơ)", lessons: [] },
        { chapter: "Bài 8: Nhà văn và tác phẩm (Nghị luận văn học)", lessons: [] },
        { chapter: "Bài 9: Những hình ảnh thế giới (Văn bản thông tin)", lessons: [] },
        { chapter: "Bài 10: Sách – người bạn đồng hành (Ôn tập)", lessons: [] }
      ]
    },
    "9": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Thế giới kì ảo (Truyện truyền kì)", lessons: [] },
        { chapter: "Bài 2: Những hồn thơ đẹp (Thơ tám chữ)", lessons: [] },
        { chapter: "Bài 3: Những góc nhìn văn chương (Nghị luận văn học)", lessons: [] },
        { chapter: "Bài 4: Tiếng cười trên sân khấu (Kịch bản chèo hoặc Tuồng)", lessons: [] },
        { chapter: "Bài 5: Khám phá thế giới (Văn bản thông tin)", lessons: [] },
        { chapter: "Bài 6: Những câu chuyện về phẩm giá (Truyện hiện đại)", lessons: [] },
        { chapter: "Bài 7: Hồn quê đất nước (Thơ song thất lục bát)", lessons: [] },
        { chapter: "Bài 8: Tiếng nói của công lí (Nghị luận xã hội)", lessons: [] },
        { chapter: "Bài 9: Di sản và tương lai (Văn bản thông tin tổng hợp)", lessons: [] },
        { chapter: "Bài 10: Hành trang cuộc sống (Ôn tập)", lessons: [] }
      ]
    }
  },
  "Ngoại ngữ 1 (Tiếng Anh)": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Unit 1: My New School (Trường học mới của tôi)", lessons: [] },
        { chapter: "Unit 2: My House (Ngôi nhà của tôi)", lessons: [] },
        { chapter: "Unit 3: My Friends (Bạn bè của tôi)", lessons: [] },
        { chapter: "Review 1 (Units 1-2-3)", lessons: [] },
        { chapter: "Unit 4: My Neighbourhood (Khu phố của tôi)", lessons: [] },
        { chapter: "Unit 5: Natural Wonders of the Viet Nam (Kì quan thiên nhiên Việt Nam)", lessons: [] },
        { chapter: "Unit 6: Our Tet Holiday (Ngày Tết của chúng tôi)", lessons: [] },
        { chapter: "Review 2 (Units 4-5-6)", lessons: [] },
        { chapter: "Unit 7: Television (Truyền hình)", lessons: [] },
        { chapter: "Unit 8: Sports and Games (Thể thao và trò chơi)", lessons: [] },
        { chapter: "Unit 9: Cities of the World (Các thành phố trên thế giới)", lessons: [] },
        { chapter: "Review 3 (Units 7-8-9)", lessons: [] },
        { chapter: "Unit 10: Our Houses in the Future (Ngôi nhà của chúng ta trong tương lai)", lessons: [] },
        { chapter: "Unit 11: Our Greener World (Thế giới xanh hơn của chúng ta)", lessons: [] },
        { chapter: "Unit 12: Robots (Người máy)", lessons: [] },
        { chapter: "Review 4 (Units 10-11-12)", lessons: [] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Unit 1: Hobbies (Sở thích)", lessons: [] },
        { chapter: "Unit 2: Healthy Living (Sống khỏe mạnh)", lessons: [] },
        { chapter: "Unit 3: Community Service (Dịch vụ cộng đồng)", lessons: [] },
        { chapter: "Review 1", lessons: [] },
        { chapter: "Unit 4: Music and Arts (Âm nhạc và nghệ thuật)", lessons: [] },
        { chapter: "Unit 5: Food and Drink (Đồ ăn và thức uống)", lessons: [] },
        { chapter: "Unit 6: A Visit to a School (Thăm một ngôi trường)", lessons: [] },
        { chapter: "Review 2", lessons: [] },
        { chapter: "Unit 7: Traffic (Giao thông)", lessons: [] },
        { chapter: "Unit 8: Films (Phim ảnh)", lessons: [] },
        { chapter: "Unit 9: Festivals around the World (Lễ hội trên thế giới)", lessons: [] },
        { chapter: "Review 3", lessons: [] },
        { chapter: "Unit 10: Energy Sources (Các nguồn năng lượng)", lessons: [] },
        { chapter: "Unit 11: Travelling in the Future (Đi lại trong tương lai)", lessons: [] },
        { chapter: "Unit 12: English-speaking Countries (Các nước nói tiếng Anh)", lessons: [] },
        { chapter: "Review 4", lessons: [] }
      ]
    },
    "8": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Unit 1: Leisure Time (Thời gian rảnh rỗi)", lessons: [] },
        { chapter: "Unit 2: Life in the Countryside (Cuộc sống ở nông thôn)", lessons: [] },
        { chapter: "Unit 3: Teenagers (Thanh thiếu niên)", lessons: [] },
        { chapter: "Review 1", lessons: [] },
        { chapter: "Unit 4: Ethnic Groups of Viet Nam (Các dân tộc Việt Nam)", lessons: [] },
        { chapter: "Unit 5: Our Customs and Traditions (Phong tục và truyền thống của chúng ta)", lessons: [] },
        { chapter: "Unit 6: Lifestyles (Lối sống)", lessons: [] },
        { chapter: "Review 2", lessons: [] },
        { chapter: "Unit 7: Environmental Protection (Bảo vệ môi trường)", lessons: [] },
        { chapter: "Unit 8: Shopping (Mua sắm)", lessons: [] },
        { chapter: "Unit 9: Natural Disasters (Thiên tai)", lessons: [] },
        { chapter: "Review 3", lessons: [] },
        { chapter: "Unit 10: Communication in the Future (Giao tiếp trong tương lai)", lessons: [] },
        { chapter: "Unit 11: Science and Technology (Khoa học và công nghệ)", lessons: [] },
        { chapter: "Unit 12: Life on Other Planets (Sự sống trên các hành tinh khác)", lessons: [] },
        { chapter: "Review 4", lessons: [] }
      ]
    },
    "9": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Unit 1: Local Community (Cộng đồng địa phương)", lessons: [] },
        { chapter: "Unit 2: City Life (Cuộc sống thành thị)", lessons: [] },
        { chapter: "Unit 3: Teen Stress and Pressure (Áp lực tuổi thiếu niên)", lessons: [] },
        { chapter: "Review 1", lessons: [] },
        { chapter: "Unit 4: Remembering the Past (Nhớ về quá khứ)", lessons: [] },
        { chapter: "Unit 5: Our Experiences (Trải nghiệm của chúng ta)", lessons: [] },
        { chapter: "Unit 6: Viet Nam: Then and Now (Việt Nam: Xưa và Nay)", lessons: [] },
        { chapter: "Review 2", lessons: [] },
        { chapter: "Unit 7: Natural Wonders of the World (Kì quan thiên nhiên thế giới)", lessons: [] },
        { chapter: "Unit 8: Tourism (Du lịch)", lessons: [] },
        { chapter: "Unit 9: World Englishes (Tiếng Anh trên thế giới)", lessons: [] },
        { chapter: "Review 3", lessons: [] },
        { chapter: "Unit 10: Planet Earth (Hành tinh Trái Đất)", lessons: [] },
        { chapter: "Unit 11: Electronic Devices (Thiết bị điện tử)", lessons: [] },
        { chapter: "Unit 12: Career Choices (Lựa chọn nghề nghiệp)", lessons: [] },
        { chapter: "Review 4", lessons: [] }
      ]
    }
  },
  "Khoa học tự nhiên": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Mở đầu về Khoa học tự nhiên", lessons: [{name: "Bài 1: Giới thiệu về Khoa học tự nhiên"}, {name: "Bài 2: An toàn trong phòng thực hành"}, {name: "Bài 3: Sử dụng kính lúp"}, {name: "Bài 4: Sử dụng kính hiển vi quang học"}, {name: "Bài 5: Đo chiều dài"}, {name: "Bài 6: Đo khối lượng"}, {name: "Bài 7: Đo thời gian"}, {name: "Bài 8: Đo nhiệt độ"}] },
        { chapter: "Chương II: Chất quanh ta", lessons: [{name: "Bài 9: Sự đa dạng của chất"}, {name: "Bài 10: Các thể của chất và sự chuyển thể"}, {name: "Bài 11: Oxygen. Không khí"}] },
        { chapter: "Chương III: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực, thực phẩm thông dụng", lessons: [{name: "Bài 12: Một số vật liệu"}, {name: "Bài 13: Một số nhiên liệu"}, {name: "Bài 14: Một số nguyên liệu"}, {name: "Bài 15: Một số lương thực, thực phẩm"}] },
        { chapter: "Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp", lessons: [{name: "Bài 16: Hỗn hợp các chất"}, {name: "Bài 17: Tách chất ra khỏi hỗn hợp"}] },
        { chapter: "Chương V: Tế bào", lessons: [{name: "Bài 18: Tế bào - Đơn vị cơ sở của sự sống"}, {name: "Bài 19: Cấu tạo và chức năng của các thành phần trong tế bào"}, {name: "Bài 20: Sự lớn lên và sinh sản của tế bào"}, {name: "Bài 21: Thực hành: Quan sát tế bào"}] },
        { chapter: "Chương VI: Từ tế bào đến cơ thể", lessons: [{name: "Bài 22: Cơ thể sinh vật"}, {name: "Bài 23: Tổ chức cơ thể đa bào"}] },
        { chapter: "Chương VII: Đa dạng thế giới sống", lessons: [{name: "Bài 25: Hệ thống phân loại sinh vật"}, {name: "Bài 26: Khóa lưỡng phân"}, {name: "Bài 27: Vi khuẩn"}, {name: "Bài 29: Virus"}, {name: "Bài 30: Nguyên sinh vật"}, {name: "Bài 32: Nấm"}, {name: "Bài 34: Thực vật"}, {name: "Bài 36: Động vật"}, {name: "Bài 38: Đa dạng sinh học"}] },
        { chapter: "Chương VIII: Lực trong đời sống", lessons: [{name: "Bài 40: Lực là gì?"}, {name: "Bài 41: Biểu diễn lực"}, {name: "Bài 42: Biến dạng của lò xo"}, {name: "Bài 43: Trọng lượng, lực hấp dẫn"}, {name: "Bài 44: Lực ma sát"}, {name: "Bài 45: Lực cản của nước"}] },
        { chapter: "Chương IX: Năng lượng", lessons: [{name: "Bài 46: Năng lượng và sự truyền năng lượng"}, {name: "Bài 47: Một số dạng năng lượng"}, {name: "Bài 48: Sự chuyển hóa năng lượng"}, {name: "Bài 49: Năng lượng hao phí"}, {name: "Bài 50: Năng lượng tái tạo"}, {name: "Bài 51: Tiết kiệm năng lượng"}] },
        { chapter: "Chương X: Trái Đất và bầu trời", lessons: [{name: "Bài 52: Chuyển động nhìn thấy của Mặt Trời"}, {name: "Bài 53: Mặt Trăng"}, {name: "Bài 54: Hệ Mặt Trời"}, {name: "Bài 55: Ngân Hà"}] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Nguyên tử. Sơ lược về bảng tuần hoàn", lessons: [{name: "Bài 1: Phương pháp và kĩ năng học tập KHTN"}, {name: "Bài 2: Nguyên tử"}, {name: "Bài 3: Nguyên tố hóa học"}, {name: "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hóa học"}] },
        { chapter: "Chương II: Phân tử. Liên kết hóa học", lessons: [{name: "Bài 5: Phân tử - Đơn chất - Hợp chất"}, {name: "Bài 6: Giới thiệu về liên kết hóa học"}, {name: "Bài 7: Hóa trị và công thức hóa học"}] },
        { chapter: "Chương III: Tốc độ", lessons: [{name: "Bài 8: Tốc độ chuyển động"}, {name: "Bài 9: Đo tốc độ"}, {name: "Bài 10: Đồ thị quãng đường - thời gian"}] },
        { chapter: "Chương IV: Âm thanh", lessons: [{name: "Bài 12: Sóng âm"}, {name: "Bài 13: Độ cao và độ to của âm"}, {name: "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn"}] },
        { chapter: "Chương V: Ánh sáng", lessons: [{name: "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối"}, {name: "Bài 16: Sự phản xạ ánh sáng"}, {name: "Bài 17: Ảnh của vật qua gương phẳng"}] },
        { chapter: "Chương VI: Từ", lessons: [{name: "Bài 18: Nam châm"}, {name: "Bài 19: Từ trường"}, {name: "Bài 20: Chế tạo nam châm điện đơn giản"}] },
        { chapter: "Chương VII: Trao đổi chất và chuyển hóa năng lượng ở sinh vật", lessons: [{name: "Bài 21 - 32: Quang hợp, Hô hấp tế bào, Trao đổi khí, Trao đổi nước và chất dinh dưỡng"}] },
        { chapter: "Chương VIII: Cảm ứng ở sinh vật", lessons: [{name: "Bài 33 - 34"}] },
        { chapter: "Chương IX: Sinh trưởng và phát triển ở sinh vật", lessons: [{name: "Bài 35 - 37"}] },
        { chapter: "Chương X: Sinh sản ở sinh vật", lessons: [{name: "Bài 38 - 39"}] },
        { chapter: "Chương XI: Cơ thể sinh vật là một thể thống nhất", lessons: [{name: "Bài 40"}] }
      ]
    },
    "8": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Phản ứng hóa học", lessons: [{name: "Bài 2: Phản ứng hóa học"}, {name: "Bài 3: Mol và tỉ khối chất khí"}, {name: "Bài 4: Định luật bảo toàn khối lượng và phương trình hóa học"}, {name: "Bài 5: Tính theo phương trình hóa học"}, {name: "Bài 6: Nồng độ dung dịch"}, {name: "Bài 7: Tốc độ phản ứng và chất xúc tác"}] },
        { chapter: "Chương II: Một số hợp chất thông dụng", lessons: [{name: "Bài 8 - 12: Acid, Base, pH, Oxide, Muối, Phân bón"}] },
        { chapter: "Chương III: Khối lượng riêng và áp suất", lessons: [{name: "Bài 13: Khối lượng riêng"}, {name: "Bài 15: Áp suất trên một bề mặt"}, {name: "Bài 16: Áp suất chất lỏng. Áp suất khí quyển"}, {name: "Bài 17: Lực đẩy Archimedes"}] },
        { chapter: "Chương IV: Tác dụng làm quay của lực", lessons: [{name: "Bài 18 - 19: Moment lực, Đòn bẩy"}] },
        { chapter: "Chương V: Điện", lessons: [{name: "Bài 20 - 25: Nhiễm điện, Dòng điện, Mạch điện, Tác dụng dòng điện, Cường độ và Hiệu điện thế"}] },
        { chapter: "Chương VI: Nhiệt", lessons: [{name: "Bài 26 - 29: Năng lượng nhiệt, Nội năng, Truyền nhiệt, Nở vì nhiệt"}] },
        { chapter: "Chương VII: Sinh học cơ thể người", lessons: [{name: "Bài 30 - 40: Hệ vận động, Tiêu hóa, Tuần hoàn, Hô hấp, Bài tiết, Thần kinh, Nội tiết, Sinh sản"}] },
        { chapter: "Chương VIII: Sinh vật và môi trường", lessons: [{name: "Bài 41 - 47: Hệ sinh thái, Sinh quyển, Cân bằng tự nhiên"}] }
      ]
    },
    "9": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Năng lượng cơ học", lessons: [{name: "Bài 2 - 4: Động năng, Thế năng, Cơ năng, Công và Công suất"}] },
        { chapter: "Chương II: Ánh sáng", lessons: [{name: "Bài 5 - 11: Khúc xạ, Phản xạ toàn phần, Lăng kính, Thấu kính, Kính lúp, Màu sắc ánh sáng"}] },
        { chapter: "Chương III: Điện", lessons: [{name: "Bài 12 - 14: Định luật Ohm, Mạch nối tiếp/song song, Công suất điện"}] },
        { chapter: "Chương IV: Điện từ", lessons: [{name: "Bài 15 - 17: Cảm ứng điện từ, Dòng điện xoay chiều, Máy biến áp"}] },
        { chapter: "Chương V: Năng lượng với cuộc sống", lessons: [{name: "Bài 18 - 19"}] },
        { chapter: "Chương VI: Kim loại. Sự khác nhau giữa kim loại và phi kim", lessons: [{name: "Bài 20 - 23"}] },
        { chapter: "Chương VII: Hydrocarbon và nguồn nhiên liệu", lessons: [{name: "Bài 24 - 28: Alkane, Ethylene, Acetylene"}] },
        { chapter: "Chương VIII: Alcohol và Acetic Acid", lessons: [{name: "Bài 29 - 30"}] },
        { chapter: "Chương IX: Lipid. Carbohydrate. Protein. Polymer", lessons: [{name: "Bài 31 - 35"}] },
        { chapter: "Chương X: Khai thác tài nguyên từ vỏ Trái Đất", lessons: [{name: "Bài 36 - 37"}] },
        { chapter: "Chương XI: Di truyền Mendel. Cơ sở phân tử của hiện tượng di truyền", lessons: [{name: "Bài 38 - 41"}] },
        { chapter: "Chương XII: Di truyền nhiễm sắc thể", lessons: [{name: "Bài 42 - 45: Nguyên phân, Giảm phân"}] },
        { chapter: "Chương XIII: Di truyền học người", lessons: [{name: "Bài 46 - 47"}] },
        { chapter: "Chương XIV: Tiến hóa", lessons: [{name: "Bài 48 - 50"}] }
      ]
    }
  },
  "Lịch sử và Địa lí": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Lịch sử - Chương 1: Vì sao cần học Lịch sử?", lessons: [{name: "Bài 1: Lịch sử và cuộc sống"}, {name: "Bài 2: Thời gian trong lịch sử"}] },
        { chapter: "Lịch sử - Chương 2: Thời nguyên thủy", lessons: [{name: "Bài 3: Nguồn gốc loài người"}, {name: "Bài 4: Xã hội nguyên thủy"}, {name: "Bài 5: Sự chuyển biến từ xã hội nguyên thủy sang xã hội có giai cấp"}] },
        { chapter: "Lịch sử - Chương 3: Xã hội cổ đại", lessons: [{name: "Bài 6: Ai Cập cổ đại"}, {name: "Bài 7: Lưỡng Hà cổ đại"}, {name: "Bài 8: Ấn Độ cổ đại"}, {name: "Bài 9: Trung Quốc từ thời cổ đại đến thế kỉ VII"}, {name: "Bài 10: Hy Lạp và La Mã cổ đại"}] },
        { chapter: "Lịch sử - Chương 4: Đông Nam Á từ những thế kỉ tiếp giáp đầu công nguyên đến thế kỉ X", lessons: [{name: "Bài 11: Các quốc gia sơ kì ở Đông Nam Á"}, {name: "Bài 12: Sự hình thành và bước đầu phát triển của các vương quốc phong kiến ở Đông Nam Á"}] },
        { chapter: "Lịch sử - Chương 5: Việt Nam từ khoảng thế kỉ VII TCN đến đầu thế kỉ X", lessons: [{name: "Bài 13: Giao lưu thương mại và văn hóa ở Đông Nam Á"}, {name: "Bài 14: Nhà nước Văn Lang - Âu Lạc"}, {name: "Bài 15: Chính sách cai trị của các triều đại phong kiến phương Bắc và chuyển biến kinh tế, xã hội, văn hóa của Việt Nam thời Bắc thuộc"}, {name: "Bài 16: Các cuộc khởi nghĩa tiêu biểu giành độc lập dân tộc (Từ đầu Công nguyên đến thế kỉ X)"}, {name: "Bài 17: Cuộc đấu tranh bảo tồn và phát triển văn hóa dân tộc của người Việt"}, {name: "Bài 18: Bước ngoặt lịch sử đầu thế kỉ X"}, {name: "Bài 19: Vương quốc Chăm-pa"}, {name: "Bài 20: Vương quốc Phù Nam"}] },
        { chapter: "Địa lí - Chương 1: Bản đồ - Phương tiện thể hiện bề mặt Trái Đất", lessons: [{name: "Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí"}, {name: "Bài 2: Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ"}, {name: "Bài 3: Tỉ lệ bản đồ. Tính khoảng cách thực tế dựa vào tỉ lệ bản đồ"}, {name: "Bài 4: Kí hiệu bằng bản đồ. Chú giải bản đồ"}, {name: "Bài 5: Lược đồ trí nhớ"}] },
        { chapter: "Địa lí - Chương 2: Trái Đất - Hành tinh của Hệ Mặt Trời", lessons: [{name: "Bài 6: Trái Đất trong hệ Mặt Trời"}, {name: "Bài 7: Chuyển động tự quay quanh trục của Trái Đất và hệ quả"}, {name: "Bài 8: Chuyển động quanh Mặt Trời của Trái Đất và hệ quả"}, {name: "Bài 9: Xác định phương hướng ngoài thực địa"}] },
        { chapter: "Địa lí - Chương 3: Cấu tạo của Trái Đất. Vỏ Trái Đất", lessons: [{name: "Bài 10: Cấu tạo của Trái Đất. Các mảng kiến tạo"}, {name: "Bài 11: Quá trình nội sinh và quá trình ngoại sinh. Hiện tượng tạo núi"}, {name: "Bài 12: Núi lửa và động đất"}, {name: "Bài 13: Các dạng địa hình chính trên Trái Đất. Khoáng sản"}] },
        { chapter: "Địa lí - Chương 4: Khí hậu và biến đổi khí hậu", lessons: [{name: "Bài 14: Lớp vỏ khí. Khối khí. Khí áp và gió trên Trái Đất"}, {name: "Bài 15: Nhiệt độ không khí. Độ ẩm không khí. Mưa"}, {name: "Bài 16: Nhiệt độ và lượng mưa trên Trái Đất"}, {name: "Bài 17: Thời tiết và khí hậu. Biến đổi khí hậu"}] },
        { chapter: "Địa lí - Chương 5: Nước trên Trái Đất", lessons: [{name: "Bài 18: Vòng tuần hoàn của nước. Nước ngầm. Băng hà"}, {name: "Bài 19: Sông và hồ"}, {name: "Bài 20: Biển và đại dương. Chuyển động của nước biển"}] },
        { chapter: "Địa lí - Chương 6: Đất và sinh vật trên Trái Đất", lessons: [{name: "Bài 21: Lớp đất trên Trái Đất"}, {name: "Bài 22: Sự đa dạng của thế giới sinh vật. Các đới thiên nhiên trên Trái Đất. Rừng nhiệt đới"}] },
        { chapter: "Địa lí - Chương 7: Con người và thiên nhiên", lessons: [{name: "Bài 23: Con người và thiên nhiên"}, {name: "Bài 24: Dân số thế giới. Sự phân bố dân cư thế giới. Các thành phố lớn trên thế giới"}] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Lịch sử - Chương 1: Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI", lessons: [{name: "Bài 1: Quá trình hình thành và phát triển của chế độ phong kiến ở Tây Âu"}, {name: "Bài 2: Các cuộc phát kiến địa lí và sự hình thành quan hệ sản xuất tư bản chủ nghĩa ở Tây Âu"}, {name: "Bài 3: Phong trào Văn hóa Phục hưng và Cải cách tôn giáo"}, {name: "Bài 4: Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX"}] },
        { chapter: "Lịch sử - Chương 2: Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX", lessons: [{name: "Bài 5: Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX"}] },
        { chapter: "Lịch sử - Chương 3: Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI", lessons: [{name: "Bài 6: Các vương quốc phong kiến Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI"}, {name: "Bài 7: Vương quốc Lào"}, {name: "Bài 8: Vương quốc Cam-pu-chia"}] },
        { chapter: "Lịch sử - Chương 4: Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI", lessons: [{name: "Bài 9: Đất nước buổi đầu độc lập (939 - 967)"}, {name: "Bài 10: Đại Cồ Việt thời Đinh và Tiền Lê (968 - 1009)"}, {name: "Bài 11: Nhà Lý xây dựng và bảo vệ đất nước (1009 - 1225)"}, {name: "Bài 12: Nhà Trần xây dựng đất nước và kháng chiến chống quân xâm lược Mông - Nguyên"}, {name: "Bài 13: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên (Thế kỉ XIII)"}, {name: "Bài 14: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên (Tiếp theo)"}, {name: "Bài 15: Nhà Hồ và cuộc kháng chiến chống quân Minh xâm lược (1400 - 1407)"}, {name: "Bài 16: Khởi nghĩa Lam Sơn (1418 - 1427)"}, {name: "Bài 17: Đại Việt thời Lê sơ (1428 - 1527)"}, {name: "Bài 18: Vương quốc Chăm-pa và vùng đất Nam Bộ từ đầu thế kỉ X đến đầu thế kỉ XVI"}] },
        { chapter: "Địa lí - Chương 1: Châu Âu", lessons: [{name: "Bài 1: Vị trí địa lí, đặc điểm tự nhiên châu Âu"}, {name: "Bài 2: Đặc điểm dân cư, xã hội châu Âu"}, {name: "Bài 3: Khai thác, sử dụng và bảo vệ thiên nhiên ở châu Âu"}, {name: "Bài 4: Liên minh châu Âu"}] },
        { chapter: "Địa lí - Chương 2: Châu Á", lessons: [{name: "Bài 5: Vị trí địa lí, đặc điểm tự nhiên châu Á"}, {name: "Bài 6: Đặc điểm dân cư, xã hội châu Á"}, {name: "Bài 7: Bản đồ chính trị châu Á. Các khu vực của châu Á"}, {name: "Bài 8: Thực hành: Tìm hiểu về các nền kinh tế lớn và kinh tế mới nổi ở châu Á"}] },
        { chapter: "Địa lí - Chương 3: Châu Phi", lessons: [{name: "Bài 9: Vị trí địa lí, đặc điểm tự nhiên châu Phi"}, {name: "Bài 10: Đặc điểm dân cư, xã hội châu Phi"}, {name: "Bài 11: Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên ở châu Phi"}, {name: "Bài 12: Thực hành: Tìm hiểu về vấn đề xung đột tộc người, ô nhiễm môi trường và hạn hán ở châu Phi"}] },
        { chapter: "Địa lí - Chương 4: Châu Mỹ", lessons: [{name: "Bài 13: Vị trí địa lí, phạm vi châu Mỹ. Phát kiến ra châu Mỹ"}, {name: "Bài 14: Đặc điểm tự nhiên Bắc Mỹ"}, {name: "Bài 15: Đặc điểm dân cư, xã hội, phương thức khai thác tự nhiên bền vững ở Bắc Mỹ"}, {name: "Bài 16: Đặc điểm tự nhiên Trung và Nam Mỹ"}, {name: "Bài 17: Đặc điểm dân cư, xã hội Trung và Nam Mỹ, khai thác, sử dụng và bảo vệ rừng A-ma-dôn"}] },
        { chapter: "Địa lí - Chương 5: Châu Đại Dương và châu Nam Cực", lessons: [{name: "Bài 18: Đặc điểm tự nhiên châu Đại Dương"}, {name: "Bài 19: Đặc điểm dân cư, xã hội châu Đại Dương"}, {name: "Bài 20: Đặc điểm tự nhiên châu Nam Cực"}] }
      ]
    },
    "8": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ từ cuối thế kỉ XVIII đến đầu thế kỉ XX", lessons: [{name: "Bài 1: Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ"}, {name: "Bài 2: Cách mạng tư sản Pháp cuối thế kỉ XVIII"}, {name: "Bài 3: Cách mạng công nghiệp"}, {name: "Bài 4: Đông Nam Á từ nửa sau thế kỉ XVI đến đầu thế kỉ XX"}, {name: "Bài 5: Cuộc kháng chiến chống xâm lược của nhân dân các nước Đông Nam Á"}] },
        { chapter: "Lịch sử - Chương 2: Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII", lessons: [{name: "Bài 6: Sự truyền bá Công giáo và chữ Quốc ngữ"}, {name: "Bài 7: Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII"}, {name: "Bài 8: Phong trào Tây Sơn"}, {name: "Bài 9: Các cuộc khởi nghĩa nông dân tiêu biểu ở Đàng Ngoài thế kỉ XVIII"}, {name: "Bài 10: Sự hình thành và phát triển của vùng đất Nam Bộ"}] },
        { chapter: "Lịch sử - Chương 3: Việt Nam nửa đầu thế kỉ XIX", lessons: [{name: "Bài 11: Tình hình chính trị, kinh tế, văn hóa thời Nguyễn"}, {name: "Bài 12: Các cuộc khởi nghĩa tiêu biểu của nhân dân Việt Nam trước khi Pháp xâm lược"}] },
        { chapter: "Lịch sử - Chương 4: Việt Nam từ năm 1858 đến đầu thế kỉ XX", lessons: [{name: "Bài 13: Kháng chiến chống thực dân Pháp xâm lược (1858 - 1884)"}, {name: "Bài 14: Phong trào kháng chiến chống Pháp trong những năm cuối thế kỉ XIX"}, {name: "Bài 15: Cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp và những chuyển biến về kinh tế, xã hội ở Việt Nam đầu thế kỉ XX"}, {name: "Bài 16: Hoạt động yêu nước của Phan Bội Châu, Phan Châu Trinh và Nguyễn Tất Thành đầu thế kỉ XX"}] },
        { chapter: "Địa lí - Chương 1: Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam", lessons: [{name: "Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam"}, {name: "Bài 2: Địa hình Việt Nam"}, {name: "Bài 3: Khoáng sản Việt Nam"}, {name: "Bài 4: Đặc điểm chung của địa hình Việt Nam"}] },
        { chapter: "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam", lessons: [{name: "Bài 5: Đặc điểm khí hậu Việt Nam"}, {name: "Bài 6: Đặc điểm thủy văn Việt Nam"}, {name: "Bài 7: Vai trò của khí hậu và thủy văn đối với sự phát triển kinh tế - xã hội"}] },
        { chapter: "Địa lí - Chương 3: Thổ nhưỡng và sinh vật Việt Nam", lessons: [{name: "Bài 8: Đặc điểm thổ nhưỡng Việt Nam"}, {name: "Bài 9: Đặc điểm sinh vật Việt Nam"}, {name: "Bài 10: Sử dụng hợp lí tài nguyên đất và sinh vật Việt Nam"}] },
        { chapter: "Địa lí - Chương 4: Biển đảo Việt Nam", lessons: [{name: "Bài 11: Phạm vi các vùng biển Việt Nam. Đặc điểm tự nhiên vùng biển đảo Việt Nam"}, {name: "Bài 12: Môi trường và tài nguyên biển đảo Việt Nam"}] }
      ]
    },
    "9": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Lịch sử - Chương 1: Thế giới từ năm 1918 đến năm 1945", lessons: [{name: "Bài 1: Nước Nga và Liên xô từ năm 1918 đến năm 1945"}, {name: "Bài 2: Châu Âu và nước Mỹ từ năm 1918 đến năm 1945"}, {name: "Bài 3: Châu Á từ năm 1918 đến năm 1945"}, {name: "Bài 4: Chiến tranh thế giới thứ hai (1939 - 1945)"}] },
        { chapter: "Lịch sử - Chương 2: Thế giới từ năm 1945 đến nay", lessons: [{name: "Bài 5: Liên hợp quốc. Trật tự thế giới sau Chiến tranh thế giới thứ hai"}, {name: "Bài 6: Nước Mỹ và các nước Tây Âu từ năm 1945 đến nay"}, {name: "Bài 7: Liên xô và các nước Đông Âu từ năm 1945 đến nay"}, {name: "Bài 8: Các nước châu Á, châu Phi và khu vực Mỹ La-tinh từ năm 1945 đến nay"}] },
        { chapter: "Lịch sử - Chương 3: Việt Nam từ năm 1918 đến năm 1945", lessons: [{name: "Bài 9: Cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp và những chuyển biến về kinh tế, xã hội ở Việt Nam (1919 - 1929)"}, {name: "Bài 10: Phong trào cách mạng Việt Nam từ năm 1919 đến năm 1930"}, {name: "Bài 11: Sự ra đời của Đảng Cộng sản Việt Nam"}, {name: "Bài 12: Phong trào cách mạng Việt Nam từ năm 1930 đến năm 1945"}, {name: "Bài 13: Cách mạng tháng Tám năm 1945 và sự ra đời của nước Việt Nam Dân chủ Cộng hòa"}] },
        { chapter: "Lịch sử - Chương 4: Việt Nam từ năm 1945 đến năm 1954", lessons: [{name: "Bài 14: Cuộc kháng chiến chống thực dân Pháp xâm lược (1945 - 1954)"}, {name: "Bài 15: Chiến dịch Điện Biên Phủ và Hiệp định Giơ-ne-vơ"}] },
        { chapter: "Lịch sử - Chương 5: Việt Nam từ năm 1954 đến năm 1975", lessons: [{name: "Bài 16: Việt Nam từ năm 1954 đến năm 1975"}, {name: "Bài 17: Cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975) và thắng lợi của cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975"}] },
        { chapter: "Lịch sử - Chương 6: Việt Nam từ năm 1975 đến nay", lessons: [{name: "Bài 18: Việt Nam từ năm 1975 đến nay"}] },
        { chapter: "Địa lí - Chương 1: Địa lí dân cư Việt Nam", lessons: [{name: "Bài 1: Dân tộc và phân bố dân cư"}, {name: "Bài 2: Gia tăng dân số và cơ cấu dân số"}] },
        { chapter: "Địa lí - Chương 2: Địa lí các ngành kinh tế", lessons: [{name: "Bài 3: Nông nghiệp, lâm nghiệp và thủy sản"}, {name: "Bài 4: Công nghiệp"}, {name: "Bài 5: Các ngành dịch vụ"}] },
        { chapter: "Địa lí - Chương 3: Sự phân hóa lãnh thổ", lessons: [{name: "Bài 6: Vùng Trung du và miền núi Bắc Bộ"}, {name: "Bài 7: Vùng Đồng bằng sông Hồng"}, {name: "Bài 8: Vùng Bắc Trung Bộ và Duyên hải miền Trung"}, {name: "Bài 9: Vùng Tây Nguyên"}, {name: "Bài 10: Vùng Đông Nam Bộ"}, {name: "Bài 11: Vùng Đồng bằng sông Cửu Long"}] },
        { chapter: "Địa lí - Chương 4: Biển đảo Việt Nam và phát triển kinh tế biển", lessons: [{name: "Bài 12: Phát triển kinh tế biển và bảo vệ môi trường biển đảo"}] }
      ]
    }
  },
  "Giáo dục công dân": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Tự hào về truyền thống gia đình, dòng họ", lessons: [] },
        { chapter: "Bài 2: Yêu thương con người", lessons: [] },
        { chapter: "Bài 3: Siêng năng, kiên trì", lessons: [] },
        { chapter: "Bài 4: Tôn trọng sự thật", lessons: [] },
        { chapter: "Bài 5: Tự lập", lessons: [] },
        { chapter: "Bài 6: Tự nhận thức bản thân", lessons: [] },
        { chapter: "Bài 7: Ứng phó với tình huống nguy hiểm", lessons: [] },
        { chapter: "Bài 8: Tiết kiệm", lessons: [] },
        { chapter: "Bài 9: Công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam", lessons: [] },
        { chapter: "Bài 10: Quyền và nghĩa vụ cơ bản của công dân", lessons: [] },
        { chapter: "Bài 11: Quyền cơ bản của trẻ em", lessons: [] },
        { chapter: "Bài 12: Thực hiện quyền trẻ em", lessons: [] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Tự hào về truyền thống quê hương", lessons: [] },
        { chapter: "Bài 2: Quan tâm, cảm thông và chia sẻ", lessons: [] },
        { chapter: "Bài 3: Học tập tự giác, tích cực", lessons: [] },
        { chapter: "Bài 4: Giữ chữ tín", lessons: [] },
        { chapter: "Bài 5: Bảo tồn di sản văn hóa", lessons: [] },
        { chapter: "Bài 6: Ứng phó với tâm lí căng thẳng", lessons: [] },
        { chapter: "Bài 7: Phòng chống bạo lực học đường", lessons: [] },
        { chapter: "Bài 8: Quản lí tiền", lessons: [] },
        { chapter: "Bài 9: Phòng, chống tệ nạn xã hội", lessons: [] },
        { chapter: "Bài 10: Quyền và nghĩa vụ của công dân trong gia đình", lessons: [] }
      ]
    },
    "8": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Tự hào về truyền thống dân tộc Việt Nam", lessons: [] },
        { chapter: "Bài 2: Tôn trọng sự đa dạng của các dân tộc", lessons: [] },
        { chapter: "Bài 3: Lao động cần cù, sáng tạo", lessons: [] },
        { chapter: "Bài 4: Bảo vệ lẽ phải", lessons: [] },
        { chapter: "Bài 5: Bảo vệ môi trường và tài nguyên thiên nhiên", lessons: [] },
        { chapter: "Bài 6: Xác định mục tiêu cá nhân", lessons: [] },
        { chapter: "Bài 7: Phòng, chống bạo lực gia đình", lessons: [] },
        { chapter: "Bài 8: Lập kế hoạch chi tiêu", lessons: [] },
        { chapter: "Bài 9: Phòng, chống tai nạn vũ khí, cháy, nổ và các chất độc hại", lessons: [] },
        { chapter: "Bài 10: Quyền và nghĩa vụ cơ bản của công dân về khiếu nại, tố cáo", lessons: [] }
      ]
    },
    "9": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Bài 1: Sống có lí tưởng", lessons: [] },
        { chapter: "Bài 2: Khoan dung", lessons: [] },
        { chapter: "Bài 3: Tích cực tham gia các hoạt động cộng đồng", lessons: [] },
        { chapter: "Bài 4: Khách quan và công bằng", lessons: [] },
        { chapter: "Bài 5: Bảo vệ hòa bình", lessons: [] },
        { chapter: "Bài 6: Quản lí thời gian hiệu quả", lessons: [] },
        { chapter: "Bài 7: Thích ứng với thay đổi", lessons: [] },
        { chapter: "Bài 8: Tiêu dùng thông minh", lessons: [] },
        { chapter: "Bài 9: Vi phạm pháp luật và trách nhiệm pháp lí", lessons: [] },
        { chapter: "Bài 10: Quyền và nghĩa vụ của công dân về tự do ngôn luận, báo chí và tiếp cận thông tin", lessons: [] }
      ]
    }
  },
  "Công nghệ": {
    "6": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Nhà ở", lessons: [{name: "Bài 1: Khái quát về nhà ở"}, {name: "Bài 2: Xây dựng nhà ở"}, {name: "Bài 3: Ngôi nhà thông minh"}] },
        { chapter: "Chương II: Bảo quản và chế biến thực phẩm", lessons: [{name: "Bài 4: Thực phẩm và dinh dưỡng"}, {name: "Bài 5: Phương pháp bảo quản và chế biến thực phẩm"}, {name: "Bài 6: Dự án: Bữa ăn kết nối yêu thương"}] },
        { chapter: "Chương III: Trang phục và thời trang", lessons: [{name: "Bài 7: Trang phục trong đời sống"}, {name: "Bài 8: Sử dụng và bảo quản trang phục"}, {name: "Bài 9: Thời trang"}] },
        { chapter: "Chương IV: Đồ dùng điện trong gia đình", lessons: [{name: "Bài 10: Khái quát về đồ dùng điện trong gia đình"}, {name: "Bài 11: Đèn điện"}, {name: "Bài 12: Nồi cơm điện"}, {name: "Bài 13: Bếp hồng ngoại"}, {name: "Bài 14: Dự án: An toàn và tiết kiệm điện trong gia đình"}] }
      ]
    },
    "7": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Trồng trọt", lessons: [{name: "Bài 1: Giới thiệu về trồng trọt"}, {name: "Bài 2: Làm đất trồng cây"}, {name: "Bài 3: Gieo trồng, chăm sóc và phòng trừ sâu, bệnh cho cây trồng"}, {name: "Bài 4: Thu hoạch sản phẩm trồng trọt"}, {name: "Bài 5: Nhân giống vô tính cây trồng"}, {name: "Bài 6: Dự án: Trồng rau trong thùng xốp"}] },
        { chapter: "Chương II: Lâm nghiệp", lessons: [{name: "Bài 7: Giới thiệu về rừng"}, {name: "Bài 8: Trồng, chăm sóc và bảo vệ rừng"}] },
        { chapter: "Chương III: Chăn nuôi", lessons: [{name: "Bài 9: Giới thiệu về chăn nuôi"}, {name: "Bài 10: Nuôi dưỡng và chăm sóc vật nuôi"}, {name: "Bài 11: Phòng và trị bệnh cho vật nuôi"}, {name: "Bài 12: Chăn nuôi gà thịt trong gia đình"}] },
        { chapter: "Chương IV: Thủy sản", lessons: [{name: "Bài 13: Giới thiệu về thủy sản"}, {name: "Bài 14: Việc nuôi cá trong ao"}, {name: "Bài 15: Khai thác và bảo vệ nguồn lợi thủy sản"}] }
      ]
    },
    "8": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Chương I: Vẽ kĩ thuật", lessons: [{name: "Bài 1: Khái quát về vẽ kĩ thuật"}, {name: "Bài 2: Hình chiếu vuông góc"}, {name: "Bài 3: Bản vẽ chi tiết"}, {name: "Bài 4: Bản vẽ lắp"}, {name: "Bài 5: Bản vẽ nhà"}] },
        { chapter: "Chương II: Cơ khí", lessons: [{name: "Bài 6: Vật liệu cơ khí"}, {name: "Bài 7: Truyền và biến đổi chuyển động"}, {name: "Bài 8: Gia công cơ khí bằng tay"}, {name: "Bài 9: Ngành nghề trong lĩnh vực cơ khí"}] },
        { chapter: "Chương III: Kĩ thuật điện", lessons: [{name: "Bài 11: Tai nạn điện"}, {name: "Bài 12: Biện pháp an toàn điện"}, {name: "Bài 13: Sơ đồ điện trong gia đình"}, {name: "Bài 14: Ngành nghề trong lĩnh vực kĩ thuật điện"}] },
        { chapter: "Chương IV: Thiết kế kĩ thuật", lessons: [{name: "Bài 15: Khái quát về thiết kế kĩ thuật"}, {name: "Bài 16: Quy trình thiết kế kĩ thuật"}] }
      ]
    },
    "9": {
      "Kết nối tri thức với cuộc sống": [
        { chapter: "Phần 1: Định hướng nghề nghiệp", lessons: [{name: "Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật, công nghệ"}, {name: "Bài 2: Hệ thống giáo dục nghề nghiệp tại Việt Nam"}, {name: "Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam"}, {name: "Bài 4: Lựa chọn nghề nghiệp trong lĩnh vực kĩ thuật, công nghệ"}] },
        { chapter: "Phần 2 - Mô-đun: Lắp đặt mạng điện trong nhà", lessons: [{name: "Bài 1: Thiết bị điện trong mạng điện trong nhà"}, {name: "Bài 2: Sơ đồ mạng điện trong nhà"}, {name: "Bài 3: Lắp đặt mạch điện bảng điện"}, {name: "Bài 4: Lắp đặt mạch điện đèn ống huỳnh quang/đèn LED"}] },
        { chapter: "Phần 2 - Mô-đun: Trồng cây ăn quả", lessons: [{name: "Bài 1: Giới thiệu chung về cây ăn quả"}, {name: "Bài 2: Các phương pháp nhân giống cây ăn quả"}, {name: "Bài 3: Kĩ thuật trồng và chăm sóc cây ăn quả (Xoài, nhãn, vải, cam...)"}, {name: "Bài 4: Thu hoạch, bảo quản và chế biến"}] }
      ]
    }
  }
};
