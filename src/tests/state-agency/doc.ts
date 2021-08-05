export type HouseType = string | null;

// интерфейс входных данных для 'агенство недвижимости'
export interface IData {
  name: string, // имя персонажа
  houses: IHouseInformation[], // дома
  houseClasses: IHouseClasses[] // возможные классы
}

//интерфейс класса дома
export interface IHouseClasses{
  name: string, // название класса дома
  url: string, // url на картинку дома
  hint: string // подсказка для категории дома
}

export interface IHouseInformation {
  number: string // номер дома
  rooms: number // кол-во комнат
  garageSpaces: number // кол-во каражных мест
  seats: number // кол-во возможных подселенцев
  position: string // расположение
  tax: number // налог
  price: number // цена
  houseType: HouseType // категория дома
}