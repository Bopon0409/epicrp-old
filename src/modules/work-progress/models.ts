export interface IState{
    active: boolean,
    progressInfo: IProgress
}

export interface IProgress{
    name: string,
    about: string
    min: number
    max: number
    time: number
}