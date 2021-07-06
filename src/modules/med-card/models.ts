export interface IState {
    active: boolean,
    medCard: IMedCard,
    page: number,
    medicalHistoryLeft: IHistory[],
    medicalHistoryRight: IHistory[]
}

export interface IMedCard {
    firstName: string,
    secondName: string,
    age: number,
    nationality: string,
    photo: string,
    medicalHistory: IHistory[]
}

export interface IHistory {
    patientComment: string,
    doctorComment: string,
    doctor: string,
    date: string
}