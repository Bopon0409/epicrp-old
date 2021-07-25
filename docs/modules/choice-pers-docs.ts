export interface ChoicePersDocs {
  // Покупка слота
  'character.buy-start': []
  // Создание нового персонажа
  'character.create-start': []
  // Вход в игру за персонажа
  'character.play': [name: string, surname: string]
  // Удаление персонажа (characterId: 0-2, индекс в массиве)
  'character.delete': [characterId: number]
  // Выбор персонажа (currentPers: 0-2, индекс в массиве)
  'character.select': [characterId: number]
}