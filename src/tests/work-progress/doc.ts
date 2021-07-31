// интерфейс работы прогресса
export interface IProgress {
  name: string,
  about: string
  min: number
  max: number
  time: number
}