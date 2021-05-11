# Тригеры **Фронт -> Клиент**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

## Инвентарь

** Триггеры инвентаря в `json/inventory-triggers.json`**

## Авторизация

- `mp.trigger('auth.signUp', login: string, pass: string, remember: boolean)` - Авторизация
- `mp.trigger('auth.signIn', login: string, email: string, pass: string)` - Регистрация

## Выбор персонажа

- `mp.trigger('character.selected', name: string, surname: string)` - Пользователь выбрал персонажа (при клике на кнопку играть)
- `mp.trigger('character.create-start')` - Пользователь нажал на кнопку создания персонажа

## Меню взаимодействия

- `mp.trigger('interact.click', icon: String)` - Пользователь нажал на кнопку
- `mp.trigger('interact.close')` - Пользователь закрыл меню

## Создание персонажа

- `mp.trigger('character.update', type: String, value: String or Number)` - Пользователь что-то изменил при создании персонажа
- `mp.trigger('character.menu.change', menu: number)` - Пользователь выбрал параметр бокового меню
- `mp.trigger('character.created')` - Пользователь закончил создание персонажа

#### Список параметров `character.update`

1. name - String, Имя
2. surname - String, Фамилия
3. sex - String ('male', 'female'), Пол
4. age - int
5. mother - Int (id), Мать
6. father - Int (id), Отец
7. parentsSimilarity - Float (0-1), Схожесть с родителями
8. skinColor - Float (0-1), Цвет кожи

**Остальные параметры в `create-pers-data.json`**

## Банкомат

- `mp.trigger('atm.put', money: int)` - Пользователь положил деньги на карту
- `mp.trigger('atm.take', money: int)` - Пользователь снял наличные
- `mp.trigger('atm.transfer', addressee: int, money: int)` - Пользователь сделал перевод

## Планшет фракции

- `mp.trigger('fraction.ads.add', data: json string)` - Добавление объявления
- `mp.trigger('fraction.ads.remove', id: number)` - Удаление объявления
- `mp.trigger('fraction.ads.edit', data: json string)` - Изменение объявления

- `mp.trigger('fraction.members.award', data: json string)` - Выдача премии
- `mp.trigger('fraction.members.reprimand', data: json string)` - Выдача выговора
- `mp.trigger('fraction.members.reprimand.drop', id: number)` - Снятие выговора
- `mp.trigger('fraction.members.dismiss', data: json string)` - Увольнение

- `mp.trigger('fraction.members.group', userId: number, groupId: number)` - Изменение ранга
- `mp.trigger('fraction.members.rank', userId: number, rankNum: number)` - Изменение группы

- `mp.trigger('fraction.activity.request', name: string, id: num)` - Запрос на историю активности

- `mp.trigger('fraction.storage.request')` - Запрос на историю склада
- `mp.trigger('fraction.storage.toggle')` - Склад открыт/закрыт

** Триггеры фракций в `json/fraction-triggers.json`**
