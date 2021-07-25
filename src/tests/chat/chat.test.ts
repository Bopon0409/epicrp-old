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

const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    sendMsg()
    if (counter === 20) clearInterval(interval)
    counter += 1
  }, 50)
}

window.test.chat = { setChatActive, setChatShow, clearChat, testChatPushMsg }
