
import React from 'react';
import type { MatrixRow, ExamDetails } from '../types';
import { COGNITIVE_LEVELS, MCQ_POINTS, ESSAY_POINTS_DEFAULT } from '../constants';
import { CognitiveLevel } from '../types';
import Spinner from './Spinner';
import { IconPlus, IconTrash, IconInfo } from './Icons';

interface Props {
  matrix: MatrixRow[];
  setMatrix: React.Dispatch<React.SetStateAction<MatrixRow[]>>;
  onGenerate: () => void;
  isLoading: boolean;
  onBack: () => void;
  examDetails: ExamDetails;
}

const Step2ExamMatrix: React.FC<Props> = ({ matrix, setMatrix, onGenerate, isLoading, onBack, examDetails }) => {
  const handleMatrixChange = (rowIndex: number, level: CognitiveLevel, type: 'mcq' | 'essay', value: number) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex][level][type] = Math.max(0, value);
    setMatrix(newMatrix);
  };

  const handleTopicChange = (rowIndex: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex].topic = value;
    setMatrix(newMatrix);
  }

  const addRow = () => {
    setMatrix([
      ...matrix,
      {
        id: matrix.length > 0 ? Math.max(...matrix.map(r => r.id)) + 1 : 1,
        topic: `Chủ đề ${matrix.length + 1}: [Tên chủ đề]`,
        [CognitiveLevel.NHAN_BIET]: { mcq: 0, essay: 0 },
        [CognitiveLevel.THONG_HIEU]: { mcq: 0, essay: 0 },
        [CognitiveLevel.VAN_DUNG]: { mcq: 0, essay: 0 },
        [CognitiveLevel.VAN_DUNG_CAO]: { mcq: 0, essay: 0 },
      },
    ]);
  };

  const removeRow = (id: number) => {
    setMatrix(matrix.filter(row => row.id !== id));
  };
  
  const totals = matrix.reduce(
    (acc, row) => {
      let rowMcq = 0;
      let rowEssay = 0;
      COGNITIVE_LEVELS.forEach(level => {
        rowMcq += row[level].mcq;
        rowEssay += row[level].essay;
      });
      acc.mcq += rowMcq;
      acc.essay += rowEssay;
      return acc;
    },
    { mcq: 0, essay: 0 }
  );
  
  const totalPoints = totals.mcq * MCQ_POINTS + totals.essay * ESSAY_POINTS_DEFAULT;


  return (
    <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">MA TRẬN ĐỀ KIỂM TRA</h2>
        <p className="text-gray-600">{examDetails.examType} - MÔN: {examDetails.subject.toUpperCase()}</p>
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-6 flex items-start space-x-3">
        <IconInfo className="w-6 h-6 flex-shrink-0 mt-1"/>
        <div>
          <p className="font-semibold">Hướng dẫn:</p>
          <p className="text-sm">Nhập số lượng câu hỏi Trắc nghiệm (TN) và Tự luận (TL) cho từng chủ đề và mức độ nhận thức. Hệ thống sẽ tự động tính điểm và tỉ lệ.</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" rowSpan={2} className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider border-r">Chủ đề</th>
              {COGNITIVE_LEVELS.map(level => (
                <th key={level} scope="col" colSpan={2} className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider border-r">{level}</th>
              ))}
              <th scope="col" colSpan={2} className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider border-r">Tổng cộng</th>
               <th scope="col" rowSpan={2} className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider"></th>
            </tr>
            <tr>
              {COGNITIVE_LEVELS.concat(['total']).map((level, i) => (
                <React.Fragment key={i}>
                  <th scope="col" className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-t">TN</th>
                  <th scope="col" className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-t">TL</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {matrix.map((row, rowIndex) => {
              const rowTotals = {
                mcq: COGNITIVE_LEVELS.reduce((sum, level) => sum + row[level].mcq, 0),
                essay: COGNITIVE_LEVELS.reduce((sum, level) => sum + row[level].essay, 0),
              };
              return (
                <tr key={row.id}>
                  <td className="px-2 py-2 border-r">
                    <input type="text" value={row.topic} onChange={(e) => handleTopicChange(rowIndex, e.target.value)} className="w-full p-1 border rounded text-sm"/>
                  </td>
                  {COGNITIVE_LEVELS.map(level => (
                    <React.Fragment key={level}>
                      <td className="px-1 py-2 border-r">
                        <input type="number" min="0" value={row[level].mcq} onChange={e => handleMatrixChange(rowIndex, level, 'mcq', parseInt(e.target.value, 10))} className="w-12 text-center p-1 border rounded" />
                      </td>
                      <td className="px-1 py-2 border-r">
                        <input type="number" min="0" value={row[level].essay} onChange={e => handleMatrixChange(rowIndex, level, 'essay', parseInt(e.target.value, 10))} className="w-12 text-center p-1 border rounded" />
                      </td>
                    </React.Fragment>
                  ))}
                  <td className="px-1 py-2 border-r text-center font-semibold">{rowTotals.mcq}</td>
                  <td className="px-1 py-2 border-r text-center font-semibold">{rowTotals.essay}</td>
                  <td className="px-2 py-2 text-center">
                    <button onClick={() => removeRow(row.id)} className="text-red-500 hover:text-red-700">
                      <IconTrash className="w-5 h-5"/>
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-gray-50 font-bold">
              <td className="px-3 py-2 text-right border-r">Tổng số câu</td>
              {COGNITIVE_LEVELS.map(level => {
                 const levelMcqTotal = matrix.reduce((sum, row) => sum + row[level].mcq, 0);
                 const levelEssayTotal = matrix.reduce((sum, row) => sum + row[level].essay, 0);
                 return (
                   <React.Fragment key={level}>
                     <td className="px-1 py-2 text-center border-r">{levelMcqTotal}</td>
                     <td className="px-1 py-2 text-center border-r">{levelEssayTotal}</td>
                   </React.Fragment>
                 );
              })}
              <td className="px-1 py-2 text-center border-r bg-blue-100 text-blue-800">{totals.mcq}</td>
              <td className="px-1 py-2 text-center border-r bg-blue-100 text-blue-800">{totals.essay}</td>
              <td></td>
            </tr>
            <tr className="bg-gray-50 font-bold">
              <td className="px-3 py-2 text-right border-r">Tổng điểm</td>
              {COGNITIVE_LEVELS.map(level => {
                 const levelMcqPoints = matrix.reduce((sum, row) => sum + row[level].mcq, 0) * MCQ_POINTS;
                 const levelEssayPoints = matrix.reduce((sum, row) => sum + row[level].essay, 0) * ESSAY_POINTS_DEFAULT;
                 return (
                   <td key={level} colSpan={2} className="px-1 py-2 text-center border-r">{(levelMcqPoints + levelEssayPoints).toFixed(2)}</td>
                 );
              })}
              <td colSpan={2} className="px-1 py-2 text-center border-r bg-blue-100 text-blue-800">{totalPoints.toFixed(2)}</td>
              <td></td>
            </tr>
             <tr className="bg-gray-50 font-bold">
              <td className="px-3 py-2 text-right border-r">Tỉ lệ %</td>
              {COGNITIVE_LEVELS.map(level => {
                 const levelMcqPoints = matrix.reduce((sum, row) => sum + row[level].mcq, 0) * MCQ_POINTS;
                 const levelEssayPoints = matrix.reduce((sum, row) => sum + row[level].essay, 0) * ESSAY_POINTS_DEFAULT;
                 const percentage = totalPoints > 0 ? ((levelMcqPoints + levelEssayPoints) / totalPoints) * 100 : 0;
                 return (
                   <td key={level} colSpan={2} className="px-1 py-2 text-center border-r">{percentage.toFixed(0)}%</td>
                 );
              })}
              <td colSpan={2} className="px-1 py-2 text-center border-r bg-blue-100 text-blue-800">{totalPoints > 0 ? '100%' : '0%'}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <button onClick={onBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
          &larr; Quay lại
        </button>
        <button onClick={addRow} className="flex items-center space-x-2 bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
          <IconPlus className="w-5 h-5"/>
          <span>Thêm chủ đề</span>
        </button>
        <button
          onClick={onGenerate}
          disabled={isLoading || totalPoints === 0}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center min-w-[200px]"
        >
          {isLoading ? <Spinner /> : 'Tạo Đề thi bằng AI'}
        </button>
      </div>
    </div>
  );
};

export default Step2ExamMatrix;
