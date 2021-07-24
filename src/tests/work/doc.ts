export interface IData {
  type?: 1 | 2 | 3 | 4,
  workStatus?: boolean,
  lvl?: number,
  nextLvl?: number,
  workShift: boolean,
  progress?: number,
  rentStatus?: true,
  car?: string,
  dayEarned?: number,
  weekEarned?: number,
  taxiRate?: [number, number, number]
}