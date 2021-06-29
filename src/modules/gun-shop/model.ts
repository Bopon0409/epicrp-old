import { IMoney } from '../payment/models'

export interface IGunProps {
  damage: { relativelyValue: number, absoluteValue: number }
  rateOfFire: { relativelyValue: number, absoluteValue: number }
  accuracy: { relativelyValue: number, absoluteValue: number }
  rangeOfDefeat: { relativelyValue: number, absoluteValue: number }
}

export interface IGunModifications {
  id: number
  name: string
  price: number
  isBought: boolean
}

export interface IGun {
  id: number
  name: string
  price: number
  props: IGunProps
  modifications: IGunModifications[]
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

export interface IState {
  active: boolean
  businessNum: number
  money: IMoney
  categories: ICategory[]
  menuItem: number | null
  currentGunId: number
  currentModId: number
}