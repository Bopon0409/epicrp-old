import { IMoney } from '../payment/models';

export interface IActives {
    section: number,
    item: number,
    color: number,
    hand: number
}

export interface IItemList {
    name: string,
    price: number,
    colors: string[]
}

export interface IData {
    businessType: number,
    businessId: number,
    itemsList: IItemList[][]
}

export interface IState {
    show: boolean
    actives: IActives
    money: IMoney
    data: IData
}