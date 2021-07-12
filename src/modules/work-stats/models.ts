export interface IState{
    active: boolean,
    workStats: IWorkStats,
    show: boolean
}

export interface IWorkStats{
    work: string,
    lvl: number,
    need: number,
    now: number,
    priceForOne: number,
    salary: number
}