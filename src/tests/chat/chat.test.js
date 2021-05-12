import chatMsgData from './chatMsgData.json'

const setChatActive = active => window.chatAPI['chat:activate'](active)
const setChatShow = show => window.chatAPI['chat:show'](show)
const clearChat = () => window.chatAPI['chat:clear']()
const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.chatAPI['chat:push'](JSON.stringify(chatMsgData[counter++]))
    if (counter === chatMsgData.length) clearInterval(interval)
  }, 50)
}

window.test.chat = { setChatActive, setChatShow, clearChat, testChatPushMsg }
