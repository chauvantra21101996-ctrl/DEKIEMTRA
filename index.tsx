
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  const errorDiv = document.createElement('div');
  errorDiv.style.padding = '20px';
  errorDiv.style.color = 'red';
  errorDiv.innerHTML = '<h1>Lỗi: Không tìm thấy phần tử root</h1>';
  document.body.appendChild(errorDiv);
  throw new Error("Could not find root element to mount to");
}

window.onerror = (message, source, lineno, colno, error) => {
  console.error("Global error caught:", { message, source, lineno, colno, error });
  return false;
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
