export interface IData {
  title: string,
  list: string[]
}

export interface IListItem {
  text: string,
  value: number
}

export interface IState {
  active: boolean,
  title: string,
  list: IListItem[]
}