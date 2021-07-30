// @ts-ignore
const msg = '<span style="color: red">Администратор</span>'

// Включение / выключения панели ввода (input и кнопки команд)
const setChatActive = (active: boolean) =>
  window.trigger('chat.activate', active)

// Включение / выключение чата
const setChatShow = (show: boolean) =>
  window.trigger('chat.show', show)

// Очистка чата
const clearChat = () => window.trigger('chat.clear')

// Отправка сообщения в чат
const sendMsg = () => window.strTrigger('chat.push', msg)

// Высота чата 200px - 600px
// Высота строк в чате 14px - 30px
// Размер шрифта 11px - 18px
const setChatParams = (height = 300, lineHeight = 18, fontSize = 14) =>
  window.trigger('chat.params',
    JSON.stringify({ height, lineHeight, fontSize })
  )

const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    sendMsg()
    if (counter === 20) clearInterval(interval)
    counter += 1
  }, 50)
}

window.test.chat = {
  setChatActive, setChatShow, clearChat, testChatPushMsg, setChatParams
}
