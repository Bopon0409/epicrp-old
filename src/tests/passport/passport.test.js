import passportData    from './passport.json'

const jsonPassportData = JSON.stringify(passportData)

// включить/отключить показ интерфейса
const setActive = (active) => window.trigger('passport.active', active);
// загрузить данные 'паспорта'
const setData = () => window.trigger('passport.data', jsonPassportData);

window.test.passport = {
  setActive, setData
}