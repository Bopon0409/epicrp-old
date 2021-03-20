# Тригеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', arguments)')`

### Инвентарь

- `window.trigger('setInventoryActive', active: boolean)` - Открыть/Закрыть инвентарь
- `window.trigger('pushInventaryDataToFront', data: json string)` - Загрузка данных инвентаря на фронт

### Авторизация

- `window.trigger('setAuthActive', active: boolean)` - Открыть/Закрыть окно авторизации
- `window.trigger('userAuthAnswer', isSuccess: boolean)` - Ответ сервера на авторизацию
- `window.trigger('userRegisterAnswer', isSuccess: boolean` - Ответ сервера на регистрацию

### Фон (скрин игры)

- `window.trigger('setBgActive', active: boolean)` - Открыть/Закрыть фон

### Чат

- `window.trigger('pushChatMsgFromClient', msg: json string)` - Прислать сообщение в чат
- `window.trigger('setChatActive', active: boolean)` - Активация чата
- `window.trigger('setChatShow', active: boolean)` - Показать/Скрыть чат
- `window.trigger('clearChat')` - Очистить чат

### HUD

- `window.trigger('setHudActive', active: boolean)` - Открыть/Закрыть HUD
- `window.trigger('addAlert', data: json string)` - Прислать уведомление в HUD
- `window.trigger('setHudData', data: json string)` - Загрузка данных (малый набор) hud
- `window.trigger('setAllHudData', data: json string)` - Загрузка данных (весь набор) hud
- `window.trigger('setGeoHudData', data: json string)` - Загрузка данных гео локации в hud
- `window.trigger('setMicroHudData', data: json string)` - Загрузка данных микрофона в hud
- `window.trigger('setMissionHudData', data: json string)` - Загрузка данных миссии в hud
- `window.trigger('setSpeedometerHudData', data: json string)` - Загрузка данных спидометра в hud

### Выбор персонажа

- `window.trigger('setChoicePersActive', active: boolean)` - Открыть/Закрыть окно выбора персонажа
- `window.trigger('pushPersData', data: json string)` - Загрузка данных о персонажах игрока

### Создание персонажа

- `window.trigger('setCreatePersActive', active: boolean)` - Открыть/Закрыть окно создания персонажа
- `window.trigger('pushCreatePersData', data: json string) - Загрузить данные о цветах и одежде для создания персонажа`

### Меню взаимодействия

- `window.trigger('setInteractionMenu', active: boolean, data: json string)` - Открыть меню взаимодействия (с загрузкой данных)

# chatAPI

##### Управление через глобальный объект chatAPI

- `push(msg: json string)`
- `clear()`
- `activate(active: boolean)`
- `show(show: boolean)`
