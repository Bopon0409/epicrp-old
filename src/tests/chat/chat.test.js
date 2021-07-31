// Включение выключение input в чате
const setChatActive = active => window.chatAPI['chat:activate'](active)

// Включение выключение чата
const setChatShow = show => window.chatAPI['chat:show'](show)

const clearChat = () => window.chatAPI['chat:clear']()

const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    // Отправка сообщения в чат
    window.chatAPI['chat:push']('<span style="color: red">Администратор</span>')
    if (counter === 20) clearInterval(interval)
    counter += 1
  }, 50)
}

window.test.chat = { setChatActive, setChatShow, clearChat, testChatPushMsg }
