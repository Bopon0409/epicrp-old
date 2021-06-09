import { makeAutoObservable }     from 'mobx'
import { ICard, IState, TMethod } from './models'

class PaymentStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    selectActive: false,
    method: 'cash',
    currentCard: null
  }

  setMethod = (method: TMethod, cardId?: string) => {
    if (method === 'card' && cardId) this.state.currentCard = cardId
    this.state.method = method
  }

  selectToggle = () => this.state.selectActive = !this.state.selectActive

  cashHandler = () => this.setMethod('cash')

  cardHandler = (card: ICard) => this.setMethod('card', card.accountId)

  selectItemHandler = (card: ICard) => {
    store.cardHandler(card)
    store.selectToggle()
  }
}

const store = new PaymentStore()

export { store }