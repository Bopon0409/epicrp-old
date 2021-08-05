export type PageName = 'main' | 'house';
export type HouseType = string | null;

export interface IState {
  show: boolean
  page: PageName
  activeHouse: number
  marginTop: number
  houses: IHouseInformation[]
  houseType: HouseType
  data: IData
}

export interface IData {
  name: string,
  houses: IHouseInformation[],
  houseClasses: IHouseClasses[]
}

export interface IHouseClasses {
  name: string,
  url: string,
  hint: string
}

export interface IHouseInformation {
  number: string
  rooms: number
  garageSpaces: number
  seats: number
  position: string
  tax: number
  price: number
  houseType: HouseType
}