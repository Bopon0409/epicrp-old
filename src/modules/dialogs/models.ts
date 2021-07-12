export interface IText{
 text: string
 answers: string[]
}

export interface IData{
 name: string
 job: string
 texts: IText[]
}

export interface IState {
 show: boolean
 activeTextId: number
 data: IData
}