import { TCardId, TMethod } from '../../src/modules/payment/models';

export interface ShopsAndParlors {
  'clothes-shop.set.section': [sectiondId: number], // выбранная секция
  'clothes-shop.set.item': [itemId: number], // выбранный предмет
  'clothes-shop.set.hand': [handId: number], // выбранная рука
  'clothes-shop.set.color': [color: number], // выбранный цвет,
  'clothes-shop.buy': [cardId: TCardId, method: TMethod] // покупка предмета
}