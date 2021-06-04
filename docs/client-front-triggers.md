# Триггеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

### Инвентарь

- `window.trigger('inventory.active', active: bolean)` - Открыть/Закрыть
  инвентарь
- `window.trigger('inventory.mode', mode: int)` - Смена типа инвентаря
- `window.trigger('inventory.data', data: json string)` - Загрузка данных

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

- `window.trigger('fraction.active', active: bolean)` - Открыть/закрыть планшет
  фракции
- `window.trigger('fraction.data', data: json string)` - Загрузить данные
  планшета фракции

### Экран загрузки

- `window.trigger('loading.set', data: json string)` - Открыть/Закрыть экран
  загрузки
- loading.set JSON: `{ active: boolean, hint?: string }`

### Дом

- `window.trigger('house.mode', mode: number)` - Переключение режима дома.
    - Значения mode:
        - 0: выключен
        - 1: меню снаружи
        - 2: меню внутри
        - 3: меню гаража
        - 4: меню сожителей
- `window.trigger('house.data', data: json string)` - Загрузить данные планшета
  фракции

##### Примеры json 'speedometer.badge' в speedometer-badges.json

# chatAPI

- **Управление через глобальный объект chatAPI**
- `chat:push(msg: json string)`
- `chat:clear()`
- `chat:activate(active: boolean)`
- `chat:show(show: boolean)`
