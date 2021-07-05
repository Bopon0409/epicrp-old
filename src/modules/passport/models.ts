export interface IPassport {
  active: boolean,
  passportInfo: IInfo
}

export interface IInfo {
  name: string,
  nationality: string,
  gender: boolean,
  married: 0 | 1 | 2,
  date: string,
  id: number,
  uuid: number,
  photo: string,
  sealPhoto: string
}