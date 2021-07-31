// интерфейс информации для паспорта 
export interface IInfo {
  name: string, // ФИ
  nationality: string, // национальность
  gender: boolean, // пол (true - male, false - female)
  married: 0 | 1 | 2, // женат ли игрок
  date: string, // дата получения 
  id: number, // номер
  uuid: number, // уникальный номер
  photo: string, // фото игрока
  sealPhoto: string // подпись
}