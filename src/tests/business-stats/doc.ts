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
export interface IPurchaseItems{
    name: string
    price: number
    priceChanges: number
}

export interface IFuelEquivalent{
    name: string
    equivalent: string
}

export interface IWarehouse{
    itemsInStock: IItemsInStock[]
    stockWorkload: IStockWorkload
    purchaseItems: IPurchaseItems[]
    fuelEquivalent: IFuelEquivalent[]
}

// =================================== STATS ===================================
// интерфейс частых покупок
export interface IOftenBuy{
    name: string
    price: number
}
// интерфейс ежедневных затрат/прибыли
export interface IDaily{
    reason: string,
    price: number
}
// интерфейс недельной статитики по дням
export interface IWeeklyStatistics{
    dayName: string, // название дня
    value: number // значение
}
// интерфейс недельной статистики
export interface IWeeklyStatisticsType{
    consumption: IWeeklyStatistics[], // убытки
    income: IWeeklyStatistics[], // приыбль
    quantitySoldItems: IWeeklyStatistics[] // кол-во проданых итемов
}

export interface IStats{
    businessName: string[] // название бизнеса
    businessStatus: boolean // статус бизнеса (открыт/закрыт)
    businessBalance: number // баланс бизнеса
    playerMoney: number // деньги игрока
    dailyConsumption: IDaily[], // ежедневные затраты
    dailyIncome: IDaily[] // ежедневный доход
    oftenBuy: IOftenBuy[] // часто покупают 
    weeklyStatistics: IWeeklyStatisticsType // недельная статистика
}
// =================================== sssss ===================================

export interface IItem{
    name: string
    id: number
    amount: number
    price: number
    status: boolean
}
export interface IProducts{
    items: IItem[]
    irlItems: IItem[]
    activeBlock: number
    type: number
}

// =================================== ADVANCE =================================
// интерфейс улучшния бизнеса
export interface IAdvanceItem{
    name: string // название улучшения
    id: number // его id
    price: number // цена
    status: boolean // статус (есть/нет)
}


// =================================== STAFF ===================================
// информация о сотруднике
export interface IStaffList{
    name: string // имя
    repairsAmount: number // кол-во ремонтов
    evacuationsAmount: number // кол-во эвакуаций
    profit: number // прибыль
}
// интерфейс сотрудников
export interface IStaff{
    staffList: [IStaffList[], IStaffList[]] // сотрудники, и прибыль за 1 д./нед.
    earnedTypes: [number[], number[]] // прибыль от ремонтов/эвакуаций
}