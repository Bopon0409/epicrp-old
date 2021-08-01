export type blockType = 0 | 1 | 2 | 3 | 4



export interface IItemsInStock {
    name: string,
    amount: number,
    purchasePrice: number,
    priceChangesForToday: string
}
export interface IStockWorkload {
    now: number,
    max: number
}
export interface IPurchaseItems {
    name: string
    price: number
    priceChanges: number
}

export interface IFuelEquivalent {
    name: string
    equivalent: string
}

export interface IWarehouse {
    itemsInStock: IItemsInStock[]
    stockWorkload: IStockWorkload
    purchaseItems: IPurchaseItems[]
    fuelEquivalent: IFuelEquivalent[]
}


export interface IOftenBuy {
    name: string
    price: number
}
export interface IDaily {
    reason: string,
    price: number
}

export interface IWeeklyStatistics {
    dayName: string,
    value: number
}

export interface IWeeklyStatisticsType {
    consumption: IWeeklyStatistics[],
    income: IWeeklyStatistics[],
    quantitySoldItems: IWeeklyStatistics[]
}

export interface IStats {
    businessName: string[]
    businessStatus: boolean
    businessBalance: number
    playerMoney: number
    dailyConsumption: IDaily[],
    dailyIncome: IDaily[]
    oftenBuy: IOftenBuy[]
    weeklyStatistics: IWeeklyStatisticsType
}

export interface IItem {
    name: string
    id: number
    amount: number
    price: number
    status: boolean
}

export interface IProducts {
    items: IItem[]
    irlItems: IItem[]
    activeBlock: number
    type: number
}

export interface IAdvanceItem {
    name: string
    id: number
    price: number
    status: boolean
}

export interface IAdvance {
    items: IAdvanceItem[]
    activeBlock: number
}
export interface IStaffList {
    name: string
    repairsAmount: number
    evacuationsAmount: number
    profit: number
}

export interface IStaff {
    staffList: [IStaffList[], IStaffList[]]
    earnedTypes: [number[], number[]]
}

export interface IState {
    active: boolean
    activeBlock: number
    activeTypeGraphics: number
    stats: IStats | null
    statsOperationType: number
    warehouse: IWarehouse
    orderAmount: number
    oredersId: number[]
    resultPrice: number
    products: IProducts
    advance: IAdvance
    staff: IStaff
    staffStatsDate: number
    staffEmployeesDate: number
    staffModalWindow: boolean
    staffPrizeId: number
    staffPrizeAmount: number
}

