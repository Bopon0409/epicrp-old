import { IMoney } from '../../modules/payment/models'

export interface IGunProps {
  damage: { relativelyValue: number, absoluteValue: number }
  rateOfFire: { relativelyValue: number, absoluteValue: number }
  accuracy: { relativelyValue: number, absoluteValue: number }
  rangeOfDefeat: { relativelyValue: number, absoluteValue: number }
}

export interface IGunModification {
  id: number
  name: string
  price: number
}

export interface IGun {
  id: number
  name: string
  price: number
  props: IGunProps
  modifications: IGunModification[]
}

export interface ICategory {
  id: number
  guns: IGun[]
}

export interface IData {
  businessNum?: number
  money?: IMoney
  categories?: ICategory[]
}