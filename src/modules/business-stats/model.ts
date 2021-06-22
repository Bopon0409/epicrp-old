export type blockType = 0 | 1 | 2 | 3 | 4



export interface IItemsInStock{
    name: string,
    amount: number,
    purchasePrice: number,
    priceChangesForToday: string
}
export interface IStockWorkload{
    now: number,
    max: number
}

export interface IWarehouse{
    ItemsInStock: IItemsInStock[]
    stockWorkload: IStockWorkload
}




export interface IOftenBuy{
    name: string
    price: number
}
export interface IDaily{
    reason: string,
    price: number
}

export interface IWeeklyStatistics{
    dayName: string,
    value: number
}

export interface IWeeklyStatisticsType{
    consumption: IWeeklyStatistics[],
    income: IWeeklyStatistics[],
    quantitySoldItems: IWeeklyStatistics[]
}

export interface IStats{
    businessName: string[]
    businessBalance: number
    dailyConsumption: IDaily[],
    dailyIncome: IDaily[]
    oftenBuy: IOftenBuy[]
    weeklyStatistics: IWeeklyStatisticsType
}


export interface IState {
    active: boolean
    activeBlock: number
    activeTypeGraphics: number
    stats: IStats | null
    warehouse: IWarehouse | null
}