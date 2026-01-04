
import React from 'react';
import type { Question, ExamDetails } from '../types';
import { IconPrinter, IconRestart } from './Icons';

interface Props {
  questions: Question[];
  examDetails: ExamDetails;
  onRestart: () => void;
}

const Step3GeneratedExam: React.FC<Props> = ({ questions, examDetails, onRestart }) => {
  const mcqQuestions = questions.filter(q => q.questionType === 'multiple_choice');
  const essayQuestions = questions.filter(q => q.questionType === 'essay');

  const printExam = () => {
    window.print();
  };
  
  const romanize = (num: number): string => {
    if (isNaN(num)) return NaN.toString();
    const digits = String(+num).split("");
    const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                 "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                 "","I","II","III","IV","V","VI","VII","VIII","IX"];
    let roman = "", i = 3;
    while (i--)
        roman = (key[+digits.pop()! + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg" id="print-area">
        <header className="text-center mb-6 font-semibold">
            <div className="grid grid-cols-2 text-sm">
                <div className="text-left">
                    <p>{examDetails.school.toUpperCase()}</p>
                    <p>TỔ: ....................</p>
                </div>
                <div className="text-center">
                    <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                    <p className="font-bold">Độc lập - Tự do - Hạnh phúc</p>
                    <p>-----------------</p>
                </div>
            </div>
            <h1 className="text-lg font-bold mt-4">ĐỀ {examDetails.examType.toUpperCase()}</h1>
            <h2 className="text-lg font-bold">NĂM HỌC 20... – 20...</h2>
            <p className="font-bold">MÔN: {examDetails.subject.toUpperCase()} - LỚP {examDetails.grade}</p>
            <p className="text-sm">Thời gian làm bài: {examDetails.duration} phút (không kể thời gian phát đề)</p>
        </header>

        <main className="text-justify">
          {mcqQuestions.length > 0 && (
            <section>
              <h3 className="font-bold text-lg mb-2">{romanize(1)}. TRẮC NGHIỆM</h3>
              {mcqQuestions.map((q, index) => (
                <div key={index} className="mb-4">
                  <p><span className="font-bold">Câu {index + 1}:</span> {q.questionText}</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 pl-4">
                    {q.options?.map((opt, i) => (
                      <p key={i}><span className="font-bold">{String.fromCharCode(65 + i)}.</span> {opt}</p>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {essayQuestions.length > 0 && (
            <section className="mt-6">
              <h3 className="font-bold text-lg mb-2">{romanize(mcqQuestions.length > 0 ? 2 : 1)}. TỰ LUẬN</h3>
              {essayQuestions.map((q, index) => (
                <div key={index} className="mb-4">
                  <p><span className="font-bold">Câu {mcqQuestions.length + index + 1}:</span> {q.questionText}</p>
                </div>
              ))}
            </section>
          )}
          
          <div className="text-center font-bold mt-8">----- HẾT -----</div>
        </main>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg mt-8" id="solution-area">
         <h2 className="text-xl font-bold text-center text-blue-700 mb-6">ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM</h2>
         {mcqQuestions.length > 0 && (
            <section>
              <h3 className="font-bold text-lg mb-2">{romanize(1)}. TRẮC NGHIỆM</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                 {mcqQuestions.map((q, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                        <span className="font-bold">{index + 1}.</span>
                        <span>{q.correctAnswer}</span>
                    </div>
                 ))}
              </div>
            </section>
          )}

          {essayQuestions.length > 0 && (
            <section className="mt-6">
              <h3 className="font-bold text-lg mb-2">{romanize(mcqQuestions.length > 0 ? 2 : 1)}. TỰ LUẬN</h3>
              {essayQuestions.map((q, index) => (
                <div key={index} className="mb-4 p-3 bg-gray-50 rounded-md border">
                  <p className="font-bold">Câu {mcqQuestions.length + index + 1}:</p>
                  <div className="prose prose-sm max-w-none mt-1">{q.solution}</div>
                </div>
              ))}
            </section>
          )}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 no-print">
        <button onClick={onRestart} className="flex items-center justify-center w-full sm:w-auto space-x-2 bg-gray-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
          <IconRestart className="w-5 h-5"/>
          <span>Tạo lại từ đầu</span>
        </button>
        <button onClick={printExam} className="flex items-center justify-center w-full sm:w-auto space-x-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          <IconPrinter className="w-5 h-5"/>
          <span>In Đề thi & Đáp án</span>
        </button>
      </div>
    </div>
  );
};

export default Step3GeneratedExam;
