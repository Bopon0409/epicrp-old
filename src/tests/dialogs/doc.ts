// интерфейс данных
export interface IText{
  text: string // текст диалога
  answers: string[] // варианты ответов
 }
// 
 export interface IData{
  name: string // имя бота
  job: string // работа бота
  texts: IText[] // страницы диалога
 }