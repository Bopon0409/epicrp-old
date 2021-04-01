# Тригеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

## Инвентарь

- `mp.trigger('inventory.use', idItem: int)` - Игрок использовал предмет
- `mp.trigger('inventory.equip', idItem: int)` - Игрок надел предмет
- `mp.trigger('inventory.take', idItem: int)` - Игрок снял предмет
- inventory.split(storeIdFrom: number, slotFromeId: number, slotToId: number, count: number) - Игрок разделил предмет
- inventory.move(slotFromId: number, storeFromId: number, slotToId: number, storeToId: number) - Игрок снял предмет
- inventory.merge(slotId1: number, slotId2: number) - Игрок стакнул предметы
- inventory.drop(storeId: number, slotId: number) - Игрок выкинул предмет

## Авторизация

- `mp.trigger('auth.signUp', login: string, pass: string)` - Авторизация
- `mp.trigger('auth.signIn', login: string, email: string, pass: string)` - Регистрация

## Выбор персонажа

- `mp.trigger('character.selected', name: string, surname: string)` - Пользователь выбрал персонажа (при клике на кнопку играть)
- `mp.trigger('character.create-start')` - Пользователь нажал на кнопку создания персонажа

## Меню взаимодействия

- `mp.trigger('interact.click', icon: String)` - Пользователь нажал на кнопку

## Создание персонажа

- `mp.trigger('character.update', type: String, value: String or Number)` - Пользователь что-то изменил при создании персонажа
- `mp.trigger('character.created')` - Пользователь закончил создание персонажа

#### Список параметров `character.update`

1. name - String, Имя
2. surname - String, Фамилия
3. sex - String ('male', 'female'), Пол
4. mother - Int (id), Мать
5. father - Int (id), Отец
6. parentsSimilarity - Float (0-1), Схожесть с родителями
7. skinColor - Float (0-1), Цвет кожи

**Остальные параметры в `create-pers-data.json`**
