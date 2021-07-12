export interface IState{
    active: boolean
    data: IData
}

export interface IData{
    doctorResult: string,
    type: number
    name: string
    doctor: string
    date: string
}