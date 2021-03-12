# Тесты

##### Управление через глобальный объект test (в консоли)

Пример: `test.setHudActive(true)`

### Инвентарь

- `setInventoryActive(active)` : Открытие/закрытие инвентаря
- `testInventory()` : Имитация загрузки данных инвентаря с сервера

### Авторизация

- `testAuthAnswer()` : Имитация ответа сервера на запрос авторизации
- `testRegisterAnswer()` : Имитация ответа сервера на запрос регистрации
- `setAuthActive(active)` : Открытие/закрытие авторизации/регистрации

### Фон (скрин игры)

- `setBgActive(active)` : Открытие/закрытие фона

### Чат

- `testChatPushMsg()` : Имитация загрузки сообщений с сервера
- `setChatActive(active)` : Активация чата
- `setChatShow(active)` : Показать/Скрыть чат
- `clearChat()` : Очистка чата

### HUD

- `testAlerts()` : Имитация загрузки уведомлений в hud с сервера
- `setHudActive(active)` : Открытие/закрытие HUD
- `setHudData()` : Имитация загрузки данных (малый набор) в hud
- `setGeoHudData()` : Имитация загрузки данных гео локации в hud
- `setMicroHudData()` : Имитация загрузки данных микрофона в hud
- `setMissionHudData()` : Имитация загрузки данных миссии в hud
- `setSpeedometerHudData()` : Имитация загрузки данных спидометра в hud
- `setAllHudData()` : Имитация загрузки данных (весь набор) в hud
- `setTimeHudData()` : Имитация загрузки данных времени в hud
- `setOnlineHudData()` : Имитация загрузки данных онлайна в hud
