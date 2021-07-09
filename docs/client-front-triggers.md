# Триггеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

### Инвентарь

- `window.trigger('inventory.active', active: bolean)` - Открыть/закрыть
  инвентарь
- `window.trigger('inventory.mode', mode: int)` - Смена типа инвентаря
- `window.trigger('inventory.data', data: json string)` - Загрузка данных
- `window.trigger('inventory.drop-ready')` - Сброс кнопок готов в trade
- `window.trigger('inventory.clear', inventoryId: number)` - Очистка инвентаря

### Авторизация

- `window.trigger('auth.toggle', active: bolean, autoLogin?: bool, login?: string)`
    - Открыть/Закрыть окно авторизации (логин и чекбокс опционально)
- `window.trigger('auth.authAnswer', result: boolean)` - Ответ на авторизацию
- `window.trigger('auth.registerAnswer', result: boolean` - Ответ на регистрацию

### Фон (скриншот игры)

- `window.trigger('hud.toggleBg', active: bolean)` - Открыть/Закрыть фон

### Чат

- `window.trigger('chat.push', msg: json string)` - Прислать сообщение в чат
- `window.trigger('chat.active', active: boolean)` - Активация чата
- `window.trigger('chat.show', active: boolean)` - Показать/Скрыть чат
- `window.trigger('chat.clear')` - Очистить чат

### HUD

- `window.trigger('hud.toggle', active: bolean)` - Открыть/Закрыть HUD
- `window.trigger('hud.data', data: json string)` - Загрузка данных

### Выбор персонажа

- `window.trigger('character.toggleMenu', active: bolean, data: json string)` -
  Открыть/Закрыть окно выбора персонажа (c загрузкой данных)

### Создание персонажа

- `window.trigger('character.active', active: bolean)` - Открыть/Закрыть окно
  создания персонажа
- `window.trigger('character.data', data: json string)` - Загрузка данных

### Меню взаимодействия

- `window.trigger('interaction-menu.toggle', active: bolean, data: json string)`
    - Открыть меню взаимодействия (с загрузкой данных)

### Меню список

- `window.trigger('list-menu.open', data: json)` - Открыть с загрузкой данных
- `window.trigger('list-menu.close')` - Закрыть

### Банк

- `window.trigger('bank.toggle', active: bolean)` - Открыть/закрыть банк
- `window.trigger('bank.update', data: json string)` - Загрузить данные банка
- `window.trigger('bank.pin.success')` - Успешная смена пин-кода
- `window.trigger('bank.pin.error')` - Ошибка смены пин-кода

### Банкомат

- `window.trigger('atm.active', active: bolean)` - Открыть/закрыть банкомат
- `window.trigger('atm.data', data: json string)` - Загрузить данные банкомата
- `window.trigger('atm.enter.success')` - Вход подтверждён
- `window.trigger('atm.enter.error', '{ error: 'Неверный пин-код' }')` - Ошибка
  входа

### Спидометр

- `window.trigger('speedometer.active', active: bolean)` - Открыть/закрыть
  спидометр
- `window.trigger('speedometer.type', type: 0 | 1)` - Выбор типа спидометра
- `window.trigger('speedometer.speed', speed: int)` - Изменение скорости
- `window.trigger('speedometer.maxSpeed', maxSpeed: int)` - Изменение макс
  скорости
- `window.trigger('speedometer.fuel', fuel: int)` - Изменение топлива (1-100)
- `window.trigger('speedometer.badge', badge: jsonString)` - Изменение значков

### Планшет фракции

- `window.trigger('fraction.active', active: bolean)` - Открыть/закрыть
- `window.trigger('fraction.data', data: json)` - Загрузить данные

### Экран загрузки

- `window.trigger('loading.set', data: json)` - Открыть/Закрыть
- loading.set JSON: `{ active: boolean, hint?: string }`

### Электрики

- `window.trigger('electrician.open', gameType: 1-12, isFirstTime: boolean)`
- Начать игру
- `window.trigger('electrician.close')` - Закрыть игру

### Экран работ

- `window.trigger('work.active', active: bolean)` - Открыть/закрыть
- `window.trigger('work.data', data: json)` - Загрузить данные
- types:
    - 1: taxi
    - 2: bus driver
    - 3: carrier

### Дом

- `window.trigger('house.mode', mode: number)` - Переключение режима дома.
    - Значения mode:
        - 0: выключен
        - 1: меню снаружи
        - 2: меню внутри
        - 3: меню гаража
        - 4: меню сожителей
        - 5: меню выхода
- `window.trigger('house.data', data: json string)` - Загрузить данные планшета
  фракции


### Бизнес меню (для владельца)
##### примеры json файлов находятся в json, папка business-stats
- `window.trigger('business-stats.active', active: boolean)` - 
Отобразить/скрыть окно "меню бизнеса".
- `window.trigger('business-stats.stats', data: json string)` - 
Загрузить данные для вкладки "статистика" в "меню бизнеса".
- `window.trigger('business-stats.warehouse', data: json string)` - 
Загрузить данные для вкладки "склад" в "меню бизнеса".
- `window.trigger('business-stats.products-items', data: json string)` - 
Загрузить данные для вкладки "товары gta items" в "меню бизнеса".
- `window.trigger('business-stats.products-irl-items', data: json string)` - Загрузить данные для вкладки "товары gta irl items" в "меню бизнеса".
- `window.trigger('business-stats.advance', data: json string)` - 
Загрузить данные для вкладки "улучшения" в "меню бизнеса".
- `window.trigger('business-stats.change-player-money', money: number)` - 
Изменить денежный баланс владельца бизнеса (про пополнении/снятии).
- `window.trigger('business-stats.change-business-money', money: number)` - 
Изменить баланс денег бизнеса (при пополнении/снятия).
###### ТОЛЬКО ДЛЯ АВТОСАЛОНА
- `window.trigger('business-stats.staff', data: json string)` - 
Загрузить данные для вкладки "сотрудники" в "меню бизнеса".

  ## Склад
  - `window.trigger('business-stats.warehouse-clearOrdersList')` - очистить
список выбранных предметов.
  - `window.trigger('business-stats.warehouse-clearData')` - очистить данные
(выбранные items, кол-во, итоговой суммы) после сохранения.


### Паспорт
  - `window.trigger('passport.active', status: boolean)` - отобразить/скрыть
  - `window.trigger('passport.data', data: json string)` - загрузить данные,
пример данных находится в папке json/passport

### EMS - Inspection (добавление новой записи в мед. карту)
  - `window.trigger('ems-inspection.active', state: boolean)` - отобразить/скрыть
  - `window.trigger('ems-inspection.data', data: json string)` - загрузить данные,
пример данных находится в папке json/fractions/ems/inspection

### EMS - IssueMedicalSertificate (выдача медицинской справки)
  - `window.trigger('ems-issue-med-sertificate.active', state: boolean)` - 
  отобразить/скрыть

### Shops-and-parlors (магазины одежды и тату салон)
- `window.trigger('shops-and-parlors.show', status: boolean)` - отобразить/скрыть
- `window.trigger('shops-and-parlors.money', money: json)` - загрузить деньги
- `window.trigger('shops-and-parlors.data', data: json)` - загрузить данные
- `window.trigger('shops-and-parlors.clear-actives')` - снять выделения с блоков
##### примеры json ./json/shops-and-parlors/


##### Примеры json 'speedometer.badge' в speedometer-badges.json

# chatAPI

- **Управление через глобальный объект chatAPI**
- `chat:push(msg: json string)`
- `chat:clear()`
- `chat:activate(active: boolean)`
- `chat:show(show: boolean)`
