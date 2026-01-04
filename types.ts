

export enum ExamType {
  REGULAR = 'Thường xuyên',
  MID_TERM = 'Giữa kỳ',
  FINAL = 'Cuối kỳ',
  TOPICAL = 'Theo chủ đề',
}

export enum QuestionFormat {
  MCQ = 'Trắc nghiệm',
  ESSAY = 'Tự luận',
  COMBINED = 'Kết hợp (Trắc nghiệm + Tự luận)',
}

export type InputMode = 'manual' | 'upload';

export interface QuestionCounts {
  part1: number; // Nhiều lựa chọn
  part2: number; // Đúng/Sai
  part3: number; // Trả lời ngắn
  part4: number; // Tự luận
}

export interface LevelDistribution {
  awareness: number; // Nhận biết
  understanding: number; // Thông hiểu
  application: number; // Vận dụng
}

export interface ScopeItem {
  id: string;
  chapter: string; // Tên chương/chủ đề
  name: string; // Tên bài học/nội dung chi tiết
  periods: number; // Số tiết
}

export interface ExamConfig {
  subject: string;
  grade: string;
  textbook: string[];
  scopeType: 'chapter' | 'lesson';
  examType: ExamType;
  duration: number;
  scopeItems: ScopeItem[];
  format: QuestionFormat;
  
  // New fields for upload feature
  inputMode: InputMode;
  uploadedContent?: string; // HTML content parsed from docx

  questionCounts: QuestionCounts;
  levelDistribution: LevelDistribution;
}

export interface GeneratedExamData {
  matrix: string;
  specification: string;
  examPaper: string;
  answers: string;
}

export interface GenerationState {
  isLoading: boolean;
  error: string | null;
  data: GeneratedExamData | null;
}

export interface SavedExam {
  id: string;
  title: string;
  savedAt: string;
  config: ExamConfig;
  data: GeneratedExamData;
}

// FIX: Add CurriculumLesson and CurriculumChapter interfaces to be used across the application.
export interface CurriculumLesson {
  name: string;
  defaultPeriods?: number;
}

export interface CurriculumChapter {
  chapter: string;
  lessons?: CurriculumLesson[];
}

// Add type for AI Assistant messages
export interface ChatMessage {
  role: 'user' | 'model' | 'systemError';
  content: string;
}

// FIX: Add missing type definitions to resolve compilation errors in older components.
export enum CognitiveLevel {
    NHAN_BIET = 'Nhận biết',
    THONG_HIEU = 'Thông hiểu',
    VAN_DUNG = 'Vận dụng',
    VAN_DUNG_CAO = 'Vận dụng cao',
}

export interface MatrixRow {
    id: number;
    topic: string;
    [CognitiveLevel.NHAN_BIET]: { mcq: number; essay: number };
    [CognitiveLevel.THONG_HIEU]: { mcq: number; essay: number };
    [CognitiveLevel.VAN_DUNG]: { mcq: number; essay: number };
    [CognitiveLevel.VAN_DUNG_CAO]: { mcq: number; essay: number };
}

export interface ExamDetails {
    school: string;
    subject: string;
    grade: string;
    duration: number;
    examType: string;
}

export interface Question {
  questionText: string;
  questionType: 'multiple_choice' | 'essay';
  options?: string[];
  correctAnswer?: string;
  solution?: string;
}
