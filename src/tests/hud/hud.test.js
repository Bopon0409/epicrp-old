import hudData    from './hud-data.json'

// Включить/Выключить hud
const setActive = (active = true) => window.trigger('hud.toggle', active)

// Скрыть hud (кроме логотипа)
const setHidden = hide => window.trigger('hud.hide', hide)

// Загрузка данных худа
const setAllData = () => window.trigger('hud.data', JSON.stringify(hudData))

window.test.hud = { setAllData, setActive, setHidden }
