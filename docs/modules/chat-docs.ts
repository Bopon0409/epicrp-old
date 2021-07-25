export interface ChatDocs {
  // Отправка команды
  'chat.command': [command: string]
  // Отправка сообщения
  'chat.message': [message: string]
  // Включение / выключения панели ввода (input и кнопки команд)
  'chat.active': [active: boolean]
}