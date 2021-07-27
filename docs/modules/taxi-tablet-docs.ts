export interface TaxiTabletDocs {
  // Взятие заказа
  'taxi.order.take': [id: number]
  // Выход на линию / с линии
  'taxi.status': [workStatus: boolean]
  // Отмена заказа
  'taxi.order.reject': [reason: string]
}