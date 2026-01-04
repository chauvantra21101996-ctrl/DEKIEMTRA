
import type { MatrixRow } from './types';
import { CognitiveLevel } from './types';

export const COGNITIVE_LEVELS: CognitiveLevel[] = [
  CognitiveLevel.NHAN_BIET,
  CognitiveLevel.THONG_HIEU,
  CognitiveLevel.VAN_DUNG,
  CognitiveLevel.VAN_DUNG_CAO,
];

export const initialMatrix: MatrixRow[] = [
  {
    id: 1,
    topic: 'Chủ đề 1: [Tên chủ đề]',
    [CognitiveLevel.NHAN_BIET]: { mcq: 2, essay: 0 },
    [CognitiveLevel.THONG_HIEU]: { mcq: 1, essay: 0 },
    [CognitiveLevel.VAN_DUNG]: { mcq: 0, essay: 1 },
    [CognitiveLevel.VAN_DUNG_CAO]: { mcq: 0, essay: 0 },
  },
  {
    id: 2,
    topic: 'Chủ đề 2: [Tên chủ đề]',
    [CognitiveLevel.NHAN_BIET]: { mcq: 1, essay: 0 },
    [CognitiveLevel.THONG_HIEU]: { mcq: 2, essay: 0 },
    [CognitiveLevel.VAN_DUNG]: { mcq: 1, essay: 0 },
    [CognitiveLevel.VAN_DUNG_CAO]: { mcq: 0, essay: 1 },
  },
];

export const MCQ_POINTS = 0.25;
export const ESSAY_POINTS_DEFAULT = 1.0;
