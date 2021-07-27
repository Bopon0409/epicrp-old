export interface HouseDocs {

  //============================   House Functions   ===========================

  // Открытие / закрытие дома
  'house.lock.house': [houseNumber: number, open: boolean]
  // Открытие / закрытие шкафа
  'house.lock.cupboard': [houseNumber: number, open: boolean]
  // Продажа дома
  'house.sell': [houseNumber: number]
  // Покупка дома
  'house.buy': [houseNumber: number]
  // Вход в дом
  'house.enter.house': [houseNumber: number]
  // Вход в гараж
  'house.enter.garage': [houseNumber: number]

  //===========================   Roommates Manager   ==========================

  // Изменение настройки сожителя
  'house.roommate.access': [
    houseNumber: number, roommateId: number,
    settingName: string, settingValue: boolean
  ]
  // Удаление сожителя
  'house.roommate.move_out': [houseNumber: number, roommateId: number]

  //================================   Garage   ================================

  // Передвижение машины в гараже
  'garage.move': [slotFrom: number, slotTo: number]
  // Добавление машины в гараж
  'garage.add': [carId: number, slotTo: number]
  // Удаление машины из гаража
  'garage.remove': [slotFrom: number]
  // Установка машины сожителя в слот гаража
  'garage.roommate.set': [roommateId: number, carId: number, slotTo: number]
}