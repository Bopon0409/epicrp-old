# Тригеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

## Инвентарь

- `mp.trigger('pushInventoryDataToClient', data: json string)` - Инвентарь пользователя обновился
- `mp.trigger('userdUseItem', idItem: int)` - Игрок использовал предмет
- `mp.trigger('userEquippedItem', idItem: int)` - Игрок надел предмет
- `mp.trigger('userTakeOfItem', idItem: int)` - Игрок снял предмет

## Авторизация

- `mp.trigger('userAuth', login: string, pass: string)` - Пользователь пытается залогиниться
- `mp.trigger('userRegister', login: string, email: string, pass: string)` - Пользователь пытается зарегестрироваться

## Чат

- `mp.trigger('pushMessageToClient', type: string, text: string)` - Пользователь отправил сообщение в чат

## Выбор персонажа

- `mp.trigger('userSelectedCharacter', name: string, surname: string)` - Пользователь выбрал персонажа (при клике на кнопку играть)

## Создание персонажа

- `mp.trigger('createCharChangeValue', type: String, value: String or Number)` - Пользователь что-то изменил при создании персонажа

#### Список параметров `createCharChangeValue`

1. name - String, Имя
2. surname - String, Фамилия
3. sex - String ('male', 'female'), Пол
4. mother - Int (id), Мать
5. father - Int (id), Отец
6. parents_similarity - Float (0-1), Схожесть с родителями

**Остальные параметры в `create-pers-data.json`**

## Меню взаимодействия

- `mp.trigger('clickInteractionMenuItem', icon: String)` - Пользователь нажал на кнопку