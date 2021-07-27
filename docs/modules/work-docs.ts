export interface WorkDocs {
  // Устроиться / уволиться
  'work.work-status': [workId: 1 | 2 | 3 | 4, workStatus: boolean]
  // Закончить работу
  'work.work-shift-cancel': []
  // Начать работать
  'work.transport': [num: 1 | 2 | 3]
}