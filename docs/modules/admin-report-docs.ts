export interface AdminReportDocs {
  // Админ отправил сообщение
  'admin-report.msg': [reportId: number | null, msg: string]
  // ТП к игроку
  'admin-report.tp-to': [name: string]
  // ТП к себе
  'admin-report.tp-here': [name: string]
  // Войти в рекон
  'admin-report.tp-recon': [name: string]
  // Администратор вошел в чат
  'admin-report.join': [reportId: number]
  // Администратор закрыл обращение
  'admin-report.close': [reportId: number]
  // Администратор вышел из чата
  'admin-report.exit': [reportId: number]
  // Администратор поставил оценку обращения
  'admin-report.rating': [reportId: number, rating: number]
}