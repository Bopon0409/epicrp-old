# Тригеры **Фронт -> Клиент**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

## Инвентарь

** Триггеры инвентаря в `json/inventory-triggers.json`**

## Авторизация

Авторизация

- `mp.trigger('auth.signUp', login: string, pass: string, remember: boolean)`

Регистрация

- `mp.trigger('auth.signIn', login: string, email: string, pass: string)`

## Выбор персонажа

Пользователь выбрал персонажа (при клике на кнопку играть)

- `mp.trigger('character.selected', name: string, surname: string)`

Пользователь нажал на кнопку создания персонажа

- `mp.trigger('character.create-start')`

## Меню взаимодействия

Пользователь нажал на кнопку

- `mp.trigger('interact.click', icon: String)`

Пользователь закрыл меню

- `mp.trigger('interact.close')`

## Создание персонажа

Пользователь выбрал параметр бокового меню

- `mp.trigger('character.menu.change', menu: number)`

Пользователь закончил создание персонажа

- `mp.trigger('character.created')`

Пользователь что-то изменил при создании персонажа

- `mp.trigger('character.update', type: String, value: String or Number)`

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
- `mp.trigger('atm.transfer', addressee: int, money: int)` - Пользователь сделал
  перевод

## Планшет фракции

Добавление объявления

- `mp.trigger('fraction.ads.add', title: string, author: string text: string)`

Удаление объявления

- `mp.trigger('fraction.ads.remove', id: number)`

Изменение объявления

- `mp.trigger('fraction.ads.edit', id: num, title: string, text: string)`

Выдача премии

- `mp.trigger('fraction.members.award', id: number, text: string, sum: number)`

Выдача выговора

- `mp.trigger('fraction.members.reprimand', id: number, text: string)`

Снятие выговора

- `mp.trigger('fraction.members.reprimand.drop', id: number)`

Увольнение

- `mp.trigger('fraction.members.dismiss', id: number, text: string)`

Изменение ранга

- `mp.trigger('fraction.members.group', userId: number, groupId: number)`

Изменение группы

- `mp.trigger('fraction.members.rank', userId: number, rankNum: number)`

Запрос на историю активности

- `mp.trigger('fraction.activity.request', name: string, id: num)`

Запрос на историю склада

- `mp.trigger('fraction.storage.request', fractionName: string)`

Склад открыт/закрыт

- `mp.trigger('fraction.storage.toggle', open: boolean, fractionName: string)`