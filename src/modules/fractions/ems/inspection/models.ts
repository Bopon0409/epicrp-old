export interface IState {
    active: boolean,
    data: IData
}

export interface IData {
    name: string
}

export interface SendData {
    name: string
    playerComment: string
    doctorComment: string
}