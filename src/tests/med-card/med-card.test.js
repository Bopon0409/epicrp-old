import MedCard from './med-card.json';

const MedCardJSON = JSON.stringify(MedCard);
const setActive = (active) => window.trigger('med-card.active', active);
const setData = () => window.trigger('med-card.data', MedCardJSON);

window.test.medCard = {
  setActive, setData
}