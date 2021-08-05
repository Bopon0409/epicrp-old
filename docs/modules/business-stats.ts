export interface IItem {
  name: string
  id: number
  amount: number
  price: number
  status: boolean
}

export interface BusinessStats {
  'business-stats.advance-change_status': [status: boolean], // открыть/закрыть бизнес
  'business-stats.stats-withdraw': [money: number], // снять деньги с бизнеса
  'business-stats.stats-deposit': [money: number], // пополнить баланс бизнеса
  'business-stats.warehouse-buy_items': [ids: number[], amount: number], // пополнить склад продукцией
  'business-stats.products-changes': [id: number, type: number, changes: IItem[]], // изменить склад продукции
  'business-stats.staff-kick': [staffId: number], // уволить сотрудника по id 
  'business-stats.advance-buy': [advanceId: number], // купить улучшение по id
  'business-stats.staff-prize': [staffId: number, money: number] // выдать премию
}