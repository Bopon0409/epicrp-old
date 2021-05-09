# Тригеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

### Инвентарь

- `window.trigger('inventory.toggle', active: bolean, id: int)` - Открыть/Закрыть инвентарь \*
- `window.trigger('inventory.update', data: json string)` - Загрузка данных

### Авторизация

- `window.trigger('auth.toggle', active: bolean, login?: string, pass?: string)` - Открыть/Закрыть окно авторизации (логин и пароль опционально)
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
- `window.trigger('hud.notify', data: json string)` - Прислать уведомление в HUD
- `window.trigger('hud.setData', data: json string)` - Загрузка данных (малый набор) hud
- `window.trigger('hud.setAllData', data: json string)` - Загрузка данных (весь набор) hud
- `window.trigger('hud.geo', data: json string)` - Загрузка данных гео локации в hud
- `window.trigger('hud.micro', data: json string)` - Загрузка данных микрофона в hud
- `window.trigger('hud.mission', data: json string)` - Загрузка данных миссии в hud
- `window.trigger('hud.online', data: json string)` - Загрузка данных онлайна в hud
- `window.trigger('hud.time', data: json string)` - Загрузка данных времени в hud

### Выбор персонажа

- `window.trigger('character.toggleMenu', active: bolean, data: json string)` - Открыть/Закрыть окно выбора персонажа (c загрузкой данных)

### Создание персонажа

- `window.trigger('character.active', active: bolean)` - Открыть/Закрыть окно создания персонажа
- `window.trigger('character.data', data: json string)` - Загрузка данных

### Меню взаимодействия

- `window.trigger('interaction-menu.toggle', active: bolean, data: json string)` - Открыть меню взаимодействия (с загрузкой данных)

### Банк

- `window.trigger('bank.toggle', active: bolean)` - Открыть/закрыть банк
- `window.trigger('bank.update', data: json string)` - Загрузить данные банка

### Банкомат

- `window.trigger('atm.toggle', active: bolean)` - Открыть/закрыть банкомат
- `window.trigger('atm.update', data: json string)` - Загрузить данные банкомата

### Спиидометр

- `window.trigger('speedometer.active', active: bolean)` - Открыть/закрыть спидометр
- `window.trigger('speedometer.type', type: 0 | 1)` - Выбор типа спидометра
- `window.trigger('speedometer.speed', speed: int)` - Изменение скорости
- `window.trigger('speedometer.maxSpeed', maxSpeed: int)` - Изменение макс скорости
- `window.trigger('speedometer.fuel', fuel: int)` - Изменение топлива (1-100)
- `window.trigger('speedometer.badge', badge: jsonString)` - Изменение значков

### Планшет фракции

- `window.trigger('fraction.active', active: bolean)` - Открыть/закрыть планшет фракции
- `window.trigger('fraction.data', data: json string)` - Загрузить данные планшета фракции

##### Примеры json 'speedometer.badge' в speedometer-badges.json

# chatAPI

- **Управление через глобальный объект chatAPI**
- `chat:push(msg: json string)`
- `chat:clear()`
- `chat:activate(active: boolean)`
- `chat:show(show: boolean)`
