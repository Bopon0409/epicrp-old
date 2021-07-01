import passportData    from './passport.json'

const jsonPassportData = JSON.stringify(passportData)

const setActive = (active) => window.trigger('passport.active', active)
const setData = () => window.trigger('passport.data', jsonPassportData)

window.test.passport = {
  setActive, setData
}