import chatMsgData from './chatMsgData.json'

const setChatActive = active => window.chatAPI.activate(active)
const setChatShow = show => window.chatAPI.show(show)
const clearChat = () => window.chatAPI.clear()
const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.chatAPI.push(JSON.stringify(chatMsgData[counter++]))
    if (counter === chatMsgData.length) clearInterval(interval)
  }, 50)
}

window.test.chat = { setChatActive, setChatShow, clearChat, testChatPushMsg }
