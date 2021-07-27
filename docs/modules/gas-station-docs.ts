export interface GasStationDocs {
  'gas-station.buy': {
    method: 'card' | 'cash', card: string | null, quantity: number,
    fuelId: number, canister: boolean
  }
}