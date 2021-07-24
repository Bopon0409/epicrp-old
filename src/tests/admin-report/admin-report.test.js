import msgList from './msg-list-data.json'

const reportData = id => JSON.stringify({
  id, name: 'Alex Pidorasov', rating: 5, msgList
})

const setActive = (active) =>
  window.trigger('admin-report.active', active)

// Добавление репорта
const addReport = (id) =>
  window.trigger('admin-report.report.add', reportData(id))

// Изменение репорта
const editReport = (id) =>
  window.trigger('admin-report.report.edit', reportData(id))

// Удаление репорта
const removeReport = (id) =>
  window.trigger('admin-report.report.remove', id)

// Установка имени администратора
const setName = (name) =>
  window.strTrigger('admin-report.name', name)

// Игрок отправил сообщение (id репорта, сообщение)
const playerSendMsg = () => window.strTrigger('admin-report.msg', 1, '123')

const loadReports = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => addReport(num))

window.test.adminReport = {
  setActive, setName, addReport, editReport,
  removeReport, playerSendMsg, loadReports
}