import { makeAutoObservable }             from 'mobx'
import { ICard, IMoney, IState, TMethod } from './models'

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

  selectToggle = (money: IMoney) => {
    const { selectActive } = this.state
    if (money.cards?.length)
      this.state.selectActive = !selectActive
  }

  cashHandler = () => this.setMethod('cash')

  cardHandler = (card: ICard) => this.setMethod('card', card.accountId)

  selectItemHandler = (card: ICard, money: IMoney) => {
    store.cardHandler(card)
    store.selectToggle(money)
  }
}

const store = new PaymentStore()

export { store }