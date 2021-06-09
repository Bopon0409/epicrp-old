export interface IData {
  title: string,
  list: IListItem[]
}

export interface IListItem {
  text: string,
  value: string
}

export interface IState {
  active: boolean,
  title: string,
  list: IListItem[]
}