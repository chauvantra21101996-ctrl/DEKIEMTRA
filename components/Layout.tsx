
import React from 'react';
import { IconBook } from './Icons';

export const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex items-center justify-center sm:justify-between">
      <div className="flex items-center space-x-3 text-2xl font-bold text-blue-700">
        <IconBook className="w-8 h-8"/>
        <h1>Trình tạo Đề thi THCS - CV 7791</h1>
      </div>
      <p className="hidden sm:block text-sm text-gray-500">Phát triển bởi AI</p>
    </div>
  </header>
);

export const Footer: React.FC = () => (
  <footer className="bg-white mt-8 py-4 border-t">
    <div className="container mx-auto px-4 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Công cụ Xây dựng Đề thi. Mọi quyền được bảo lưu.
    </div>
  </footer>
);
