export type TPage = 'index' | 'patrol' | 'patrol-active'
export type TCoordinate = [number, number]

export interface IPatrolRoute {
  id: number
  title: string
  text: string
  coordinates: TCoordinate
}

export interface ICall {
  id: string
  channel: string
  comment: string
  place: [string, number]
}

export interface TPatrolActive {
  car: string
  leader: string
  members: string[]
  calls: ICall[]
}

export interface IState {
  active: boolean
  page: TPage
  time: string

  aside: { notebookMsg: string, leaderMsg: string }

  // Patrol
  patrolStatus: boolean
  patrolReport: boolean
  patrolRouteId: number | null
  patrolPartnersInput: string
  patrolPartners: number[]
  patrolActive: TPatrolActive | null
}