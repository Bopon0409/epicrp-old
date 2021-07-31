import MedCard from './med-card.json';

const MedCardJSON = JSON.stringify(MedCard);

// включить/отключить показ интерфейса
const setActive = (active) => window.trigger('med-card.active', active);
// загрузить данные 'мед карта'
const setData = () => window.trigger('med-card.data', MedCardJSON);

window.test.medCard = {
  setActive, setData
}