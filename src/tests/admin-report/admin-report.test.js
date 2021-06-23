const reportData = id => JSON.stringify({
  id, name: 'Alex Pidorasov', rating: 5, msgList: [
    {
      type: 'player_msg',
      name: 'Alex Pidorasov',
      msg: 'Здравствуйте! У меня проблема с подключением к JoyCazino. Что мне делать? Помогите!',
      time: '23:11'
    },
    {
      type: 'player_msg',
      name: 'Alex Pidorasov',
      msg: 'Здравствуйте! У меня проблема с подключением к JoyCazino. Что мне делать? Помогите!',
      time: '23:11'
    },
    {
      type: 'player_msg',
      name: 'Alex Pidorasov',
      msg: 'Здравствуйте! У меня проблема с подключением к JoyCazino. Что мне делать? Помогите!',
      time: '23:11'
    }
  ]
})

const setActive = (active) =>
  window.trigger('admin-report.active', active)
const addReport = (id) =>
  window.trigger('admin-report.report.add', reportData(id))
const editReport = (id) =>
  window.trigger('admin-report.report.edit', reportData(id))
const removeReport = (id) =>
  window.trigger('admin-report.report.remove', id)
const setName = (name) =>
  window.strTrigger('admin-report.name', name)

const playerSendMsg = (id) => window.strTrigger('admin-report.msg',
  id, '123'
)

const loadReports = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => addReport(num))

window.test.adminReport = {
  setActive, setName, addReport, editReport,
  removeReport, playerSendMsg, loadReports
}