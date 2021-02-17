# Epic front

## Документация

### Тригеры **Клиент -> Фронт**

Выполняются через `browser.execute('window.trigger('triggerName', data')')`
Где data - JSON string

- `window.trigger('pushInventaryDataToFront', data: json string)` - Загрузка данных инвентаря на фронт

- `window.trigger('userAuthAnswer', isSuccess: boolean)` - Ответ сервера на авторизацию

- `window.trigger('userRegisterAnswer', isSuccess: boolean` - Ответ сервера на регистрацию

- `window.trigger('addAlert', data: json string)` - Прислать уведомление в HUD

- `window.trigger('setInventoryActive', active: bollean)` - Открыть/Закрыть инвентарь

- `window.trigger('setAuthActive', active: bollean)` - Открыть/Закрыть окно авторизации

- `window.trigger('setHudActive', active: bollean)` - Открыть/Закрыть HUD

- `window.trigger('setBgActive', active: bollean)` - Открыть/Закрыть фон

### Тригеры **Фронт -> Клиент**

- `mp.trigger('pushInventoryDataToClient', data: json string)` - Инвентарь пользователя обновился

- `mp.trigger('userdUseItem', idItem: int)` - Игрок использовал предмет

- `mp.trigger('userEquippedItem', idItem: int)` - Игрок надел предмет

- `mp.trigger('userTakeOfItem', idItem: int)` - Игрок использовал предмет

- `mp.trigger('userAuth', login: string, pass: string)` - Пользователь пытается залогиниться

- `mp.trigger('userRegister', login: string, email: string, pass: string)` - Пользователь пытается зарегестрироваться

- `mp.trigger('pushMessageToClient', type: string, text: string)` - Пользователь отправил сообщение

### Тестирование фронта

## Управление через глобальный объект window.test (в консоли).

Пример: `window.test.openHUD()`

- `testAlerts()` : Имитация загрузки уведомлений в hud с сервера

- `testInventory()` : Имитация загрузки данных инвентаря с сервера

- `testChatPushMsg()` : Имитация загрузки сообщений с сервера

- `testAuthAnswer()` : Имитация ответа сервера на запрос авторизации

- `testRegisterAnswer()` : Имитация ответа сервера на запрос регистрации

- `setInventoryActive(active)` : Открытие/закрытие инвентаря

- `setAuthActive(active)` : Открытие/закрытие авторизации/регистрации

- `setHudActive(active)` : Открытие/закрытие HUD

- `setBgActive(active)` : Открытие/закрытие фона

- `setChatActive(active)` : Открытие/закрытие чата

- `setChatInput(active)` : Открытие/закрытие возможности ввода

- `clearChat()` : Очистка чата

### chatApi

- `push(msg: json string)`

- `clear()`

- `activate(active: boolean)`

- `show(active: boolean)`
