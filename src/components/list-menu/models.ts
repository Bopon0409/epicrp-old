export interface IListItem {
  text: string,
  value: string
}

export interface IState {
  active: boolean,
  title: string,
  data: IListItem[]
}