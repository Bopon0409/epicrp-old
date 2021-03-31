# Тригеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

### Инвентарь

- `window.trigger('inventory.toggle', id: int)` - Открыть/Закрыть инвентарь
- `window.trigger('inventory.update', data: json string)` - Загрузка данных

### Авторизация

- `window.trigger('auth.toggle')` - Открыть/Закрыть окно авторизации
- `window.trigger('auth.authAnswer', result: boolean)` - Ответ на авторизацию
- `window.trigger('auth.registerAnswer', result: boolean` - Ответ на регистрацию

### Фон (скрин игры)

- `window.trigger('hud.toggleBg')` - Открыть/Закрыть фон

### Чат

- `window.trigger('chat.push', msg: json string)` - Прислать сообщение в чат
- `window.trigger('chat.active', active: boolean)` - Активация чата
- `window.trigger('chat.show', active: boolean)` - Показать/Скрыть чат
- `window.trigger('chat.clear')` - Очистить чат

### HUD

- `window.trigger('hud.toggle')` - Открыть/Закрыть HUD
- `window.trigger('hud.notify', data: json string)` - Прислать уведомление в HUD
- `window.trigger('hud.setData', data: json string)` - Загрузка данных (малый набор) hud
- `window.trigger('hud.setAllData', data: json string)` - Загрузка данных (весь набор) hud
- `window.trigger('hud.geo', data: json string)` - Загрузка данных гео локации в hud
- `window.trigger('hud.micro', data: json string)` - Загрузка данных микрофона в hud
- `window.trigger('hud.mission', data: json string)` - Загрузка данных миссии в hud
- `window.trigger('hud.speed', data: json string)` - Загрузка данных спидометра в hud
- `window.trigger('hud.online', data: json string)` - Загрузка данных онлайна в hud
- `window.trigger('hud.time', data: json string)` - Загрузка данных времени в hud

### Выбор персонажа

- `window.trigger('character.toggleMenu', data: json string)` - Открыть/Закрыть окно выбора персонажа (c загрузкой данных)

### Создание персонажа

- `window.trigger('character.toggleCreation', data: json string)` - Открыть/Закрыть окно создания персонажа (c загрузкой данных)

### Меню взаимодействия

- `window.trigger('interaction-menu.toggle', data: json string)` - Открыть меню взаимодействия (с загрузкой данных)

# chatAPI

##### Управление через глобальный объект chatAPI

- `push(msg: json string)`
- `clear()`
- `activate(active: boolean)`
- `show(show: boolean)`
