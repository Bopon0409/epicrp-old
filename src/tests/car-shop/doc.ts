import { IMoney } from '../../modules/payment/models'

export interface IData {
  money?: IMoney,
  businessName?: string,
  carList?: ICar[]
}

export interface ICar {
  id: number,
  name: string,
  price: number,
  props: ICarProps
}

export interface ICarProps {
  speed: ICarProp,
  tank: ICarProp,
  trunk: ICarProp,
  roadGrip: ICarProp
}

export interface ICarProp {
  relativelyValue: number,
  absoluteValue: number
}
