export interface ISettingItem {
  settingName: string
  value: boolean
}

export type TMenu = 'info' | 'members' | 'activity' | 'groups'
  | 'cars' | 'storage' | 'ads'

export interface FractionDocs {
  // Смена страницы
  'fraction.change-menu.${TMenu}': []

  //================================   Ranks   =================================
  // Создание ранга
  'fraction.rank.create': [
    rankNum: number, rankName: string, color: string, settings: ISettingItem[]
  ]
  // Изменение ранга
  'fraction.rank.edit': [
    rankNumOld: number, rankNumNew: number,
    rankName: string, color: string, settings: ISettingItem[]
  ]
  // Удаление ранга
  'fraction.rank.remove': [rankNum: number]

  //=================================   Cars   =================================

  // Спавн машины
  'fraction.cars.spawn': [id: number]
  // Спавн всех машин
  'fraction.cars.spawn-all': []
  // Добавление ранга в список доступа
  'fraction.cars.permission.rank.add': [carId: number, rankNum: number]
  // Удаление ранга в список доступа
  'fraction.cars.permission.rank.delete': [carId: number, rankNum: number]
  // Добавление отдела в список доступа
  'fraction.cars.permission.group.add': [carId: number, groupId: number]
  // Удаление отдела в список доступа
  'fraction.cars.permission.group.delete': [carId: number, groupId: number]

  //=================================   Ads   ==================================

  // Добавление объявления фракции
  'fraction.ads.add': [title: string, author: string, text: string]
  // Изменение объявления фракции
  'fraction.ads.edit': [id: number, title: string, text: string]
  // Удаление объявления фракции
  'fraction.ads.remove': [id: number]

  //================================   Groups   ================================

  // Удаление отдела
  'fraction.group.remove': [id: number]
  // Создание отдела
  'fraction.group.create': { name: string, chiefId: number, ranksList: number[] }
  // Изменение начальника отдела
  'fraction.group.boss_edit': [groupId: number, bossId: number]
  // Изменение настройки отдела
  'fraction.group.edit': {
    groupId: number, rankNum: number, settingsName: string, value: boolean
  }

  //============================   Members List   ==============================

  // Изменение отдела члена фракции
  'fraction.members.group': [memberId: number, groupId: number]
  // Изменение ранга члена фракции
  'fraction.members.rank': [memberId: number, rankNum: number]
  // Выдача выговора
  'fraction.members.reprimand': [memberId: number, text: string]
  // Снятие выговора
  'fraction.members.reprimand.drop': [memberId: number]
  // Выдача премии
  'fraction.members.award': [memberId: number, text: string, sum: number]
  // Увольнение
  'fraction.members.dismiss': [memberId: number, text: string]
  // Запрос активности члена фракции
  'fraction.activity.request': [activityName: string, memberId: number]
  // Открытие / закрытие склада
  'fraction.storage.toggle': [open: boolean]
}