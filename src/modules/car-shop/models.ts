import { IMoney } from '../payment/models'

export interface ICarProp {
  relativelyValue: number,
  absoluteValue: number
}

export interface ICarProps {
  speed: ICarProp,
  tank: ICarProp,
  trunk: ICarProp,
  roadGrip: ICarProp
}

export interface ICar {
  id: number,
  name: string,
  price: number,
  props: ICarProps
}

export interface IData {
  money?: IMoney,
  businessName?: string,
  carList?: ICar[]
}

export interface IState {
  active: boolean,
  currentCar: number | null,
  businessName: string,
  money: IMoney,
  carList: ICar[],
  colorMain: string | null,
  colorAdditional: string | null
}