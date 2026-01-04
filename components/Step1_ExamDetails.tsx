
import React, { useState } from 'react';
import type { ExamDetails } from '../types';

interface Props {
  onSubmit: (details: ExamDetails) => void;
}

const Step1ExamDetails: React.FC<Props> = ({ onSubmit }) => {
  const [details, setDetails] = useState<ExamDetails>({
    school: 'TRƯỜNG THCS ABC',
    subject: 'Ngữ văn',
    grade: '9',
    duration: 90,
    examType: 'KIỂM TRA GIỮA HỌC KỲ I',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: name === 'duration' ? parseInt(value, 10) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">Thông tin Đề kiểm tra</h2>
      <p className="text-center text-gray-500 mb-6">Nhập các thông tin cơ bản để bắt đầu.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">Tên trường</label>
            <input type="text" id="school" name="school" value={details.school} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="examType" className="block text-sm font-medium text-gray-700 mb-1">Loại bài kiểm tra</label>
            <input type="text" id="examType" name="examType" value={details.examType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Môn học</label>
            <input type="text" id="subject" name="subject" value={details.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Khối lớp</label>
            <select id="grade" name="grade" value={details.grade} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option value="6">Lớp 6</option>
              <option value="7">Lớp 7</option>
              <option value="8">Lớp 8</option>
              <option value="9">Lớp 9</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Thời gian làm bài (phút)</label>
            <input type="number" id="duration" name="duration" value={details.duration} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
        </div>
        <div className="pt-4 text-center">
          <button type="submit" className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Tiếp tục &rarr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1ExamDetails;
