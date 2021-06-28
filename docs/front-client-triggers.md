# Триггеры **Фронт -> Клиент**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

## Инвентарь

** Триггеры инвентаря в `json/inventory-triggers.json`**

## Экран работы

Устроиться / Уволиться

- `mp.trigger('work.work-status', workType: 1 | 2 | 3, workStatus: booolean)`

Выбор транспорта

- `mp.trigger('work.transport', transportNum: 1 | 2 | 3)`

Закончить работу

- `mp.trigger('work.work-shift-cancel')`

## Авторизация

Авторизация

- `mp.trigger('auth.signIn', login: string, pass: string, remember: boolean)`

Регистрация

- `mp.trigger('auth.signUp', login: string, email: string, pass: string)`

## Выбор персонажа

Пользователь выбрал персонажа (при клике на кнопку играть)

- `mp.trigger('character.selected', name: string, surname: string)`

Пользователь нажал на кнопку создания персонажа

- `mp.trigger('character.create-start')`

## Меню взаимодействия

Пользователь нажал на кнопку

- `mp.trigger('interact.click', icon: String)`

## Меню список

Пользователь нажал на кнопку

- `mp.trigger('list-menu.click', value: string)`

Пользователь закрыл меню

- `mp.trigger('interact.close')`

## HUD

Пользователь согласился в диалоговом окне

- `mp.trigger('hud.dialogue.accept')`

Пользователь отказался в диалоговом окне

- `mp.trigger('hud.dialogue.decline')`

## Создание персонажа

Пользователь выбрал параметр бокового меню

- `mp.trigger('character.menu.change', menu: number)`

Пользователь нажал кнопку случайно

- `mp.trigger('character.random')`

Пользователь закончил создание персонажа

- `mp.trigger('character.created')`

Пользователь что-то изменил при создании персонажа

- `mp.trigger('character.update', type: String, value: String or Number)`

#### Список параметров `character.update`

- name - String, Имя
- surname - String, Фамилия
- sex - String ('male', 'female'), Пол
- age - int
- mother - Int (id), Мать
- father - Int (id), Отец
- parentsSimilarity - Float (0-1), Схожесть с родителями
- skinColor - Float (0-1), Цвет кожи

**Остальные параметры в `create-pers-data.json`**

## Банкомат

Игрок вышел из банкомата

- `mp.trigger('atm.exit')`

Игрок положил деньги на карту

- `mp.trigger('atm.put', cardId: int, money: int)`

Игрок снял наличные

- `mp.trigger('atm.take', cardId: int, money: int)`

Пользователь сделал перевод

- `mp.trigger('atm.transfer', cardId: int, addressee: int, money: int)`

Пользователь оплатит дом

- `mp.trigger('atm.pay.house', cardId: int, houseId: int, money: int)`

Пользователь оплатит бизнес

- `mp.trigger('atm.pay.business', cardId: int, businessId: int, money: int)`

Пользователь мобильную связь

- `mp.trigger('atm.pay.phone', cardId: int, money: int)`

## Планшет фракции

Добавление объявления

- `mp.trigger('fraction.ads.add', title: string, author: string text: string)`

Удаление объявления

- `mp.trigger('fraction.ads.remove', id: number)`

Изменение объявления

- `mp.trigger('fraction.ads.edit', id: num, title: string, text: string)`

Выдача премии

- `mp.trigger('fraction.members.award', id: number, text: string, sum: number)`

Выдача выговора игроку

- `mp.trigger('fraction.members.reprimand', id: number, text: string)`

Снятие выговора у игрока

- `mp.trigger('fraction.members.reprimand.drop', id: number)`

Увольнение игрока

- `mp.trigger('fraction.members.dismiss', id: number, text: string)`

Изменение ранга игрока

- `mp.trigger('fraction.members.group', userId: number, groupId: number)`

Изменение группы игрока

- `mp.trigger('fraction.members.rank', userId: number, rankNum: number)`

Создание группы

- `mp.trigger('fraction.group.create', data: json string)`

Удаление группы

- `mp.trigger('fraction.group.remove', groupId: num)`

Изменение настроек группы

- `mp.trigger('fraction.group.edit', data: json string)`

Изменение начальника группы

- `mp.trigger('fraction.group.boss_edit', groupId: num, bossId: num)`

Запрос на историю активности

- `mp.trigger('fraction.activity.request', name: string, id: num)`

Запрос на историю склада

- `mp.trigger('fraction.storage.request')`

Склад открыт/закрыт

- `mp.trigger('fraction.storage.toggle', open: boolean)`

Спавн машины

- `mp.trigger('fraction.cars.spawn', carId: num)`

Спавн всех машины

- `mp.trigger('fraction.cars.spawn-all')`

Разрешения на машину обновились (ранги)

- `mp.trigger('fraction.cars.permission.rank', data: json string)`

Разрешения на машину обновились (группы)

- `mp.trigger('fraction.cars.permission.group', data: json string)`

Удаление ранга

- `mp.trigger('fraction.rank.remove', rankNum: number)`

Добавление ранга

- `mp.trigger('fraction.rank.create', data: json string)`

Изменение ранга

- `mp.trigger('fraction.rank.edit', data: json string)`

## Дом

Вход в дом

- `mp.trigger('house.enter.house', houseNumber: number)`

Вход в гараж

- `mp.trigger('house.enter.garage', houseNumber: number)`

Продажа дома

- `mp.trigger('house.sell', houseNumber: number)`

Покупка дома

- `mp.trigger('house.buy', houseNumber: number)`

Открытие/Закрытие шкафа

- `mp.trigger('house.lock.access', houseNumber: numb, memberId: num, settingName: str, settingValue: str)`

Выселение сожителя

- `mp.trigger('house.roommate.move_out', houseNum: num, memberId: num)`

Открытие/Закрытие дома

- `mp.trigger('house.lock.house', houseNumber: number, open: bool)`

Открытие/Закрытие шкафа

- `mp.trigger('house.lock.cupboard', houseNumber: number, open: bool)`

--------------------------------------------------------------------------------

Передвижение авто в гараже

- `window.frontTrigger('garage.move', slotFrom: number, slotTo: number)`

Добавление авто (своего) в гараж

- `window.frontTrigger('garage.add', carId: number, slotTo: number)`

Удаление авто (своего) из гаража

- `window.frontTrigger('garage.remove', slotFrom: number)`

Добавление авто (сожителя) в гараж

- `window.frontTrigger('garage.roommate.set', roommateName: string, carId: number, slotTo: number)`

Удаление авто (сожителя) из гаража

- `window.frontTrigger('garage.roommate.set', roommateName: string, carId:  number)`

## Электрики

- `mp.trigger('electrician.win')`
- `mp.trigger('electrician.fail')`
