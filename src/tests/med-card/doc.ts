// интерфейс мед карты
export interface IMedCard {
  firstName: string, // имя
  secondName: string, // фамилия
  age: number, // сколько лет
  nationality: string, // национальность
  photo: string, // фото игрока
  medicalHistory: IHistory[] // историй болезней
}
// интерфейс болезни
export interface IHistory {
  patientComment: string, // жалоба игрока
  doctorComment: string, // коммент доктора 
  doctor: string, // имя доктора
  date: string // дата
}