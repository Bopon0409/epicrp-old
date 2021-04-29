# Тригеры **Фронт -> Клиент**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

## Инвентарь
** Триггеры инвентаря в `inventory-triggers.json`**

## Авторизация

- `mp.trigger('auth.signUp', login: string, pass: string, remember: boolean)` - Авторизация
- `mp.trigger('auth.signIn', login: string, email: string, pass: string)` - Регистрация

## Выбор персонажа

- `mp.trigger('character.selected', name: string, surname: string)` - Пользователь выбрал персонажа (при клике на кнопку играть)
- `mp.trigger('character.create-start')` - Пользователь нажал на кнопку создания персонажа

## Меню взаимодействия

- `mp.trigger('interact.click', icon: String)` - Пользователь нажал на кнопку

## Создание персонажа

- `mp.trigger('character.update', type: String, value: String or Number)` - Пользователь что-то изменил при создании персонажа
- `mp.trigger('character.created')` - Пользователь закончил создание персонажа

## Банкомат

- `mp.trigger('atm.put', money: int)` - Пользователь положил деньги на карту
- `mp.trigger('atm.take', money: int)` - Пользователь снял наличные
- `mp.trigger('atm.transfer', addressee: int, money: int)` - Пользователь сделал перевод

#### Список параметров `character.update`

1. name - String, Имя
2. surname - String, Фамилия
3. sex - String ('male', 'female'), Пол
4. age - int
4. mother - Int (id), Мать
5. father - Int (id), Отец
6. parentsSimilarity - Float (0-1), Схожесть с родителями
7. skinColor - Float (0-1), Цвет кожи

**Остальные параметры в `create-pers-data.json`**
