export interface IState {
  active: boolean
  timer: NodeJS.Timeout | null
  seconds: number
}