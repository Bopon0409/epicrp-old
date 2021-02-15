# Epic front

## Документация

### Тригеры **Клиент -> Фронт**

Выполняются через `browser.execute('window.trigger('triggerName', data')')`
Где data - JSON string

- `window.trigger('pushInventaryDataToFront', data)` - Загрузка данных инвентаря на фронт: `data: {"userIndicators": {}, "inventory": []}`

- `window.trigger('setInventoryActive', active: bollean)` - Открыть/Закрыть инвентарь

- `window.trigger('setAuthActive', active: bollean)` - Открыть/Закрыть окно регистрации/авторизации

- `window.trigger('setHudActive', active: bollean)` - Открыть/Закрыть HUD

- `window.trigger('setBgActive', active: bollean)` - Открыть/Закрыть фон

- `window.trigger('userAuthAnswer', isSuccess, errorMsg)` - Ответ сервера на авторизацию: `isSuccess: boolean, errorMsg: string`

- `window.trigger('userRegisterAnswer', isSuccess, errorMsg)` - Ответ сервера на регистрацию: `isSuccess: boolean, errorMsg: string'`

- `window.trigger('addAlert', type, text)` - Прислать уведомление в HUD: `type: string, text: string | types: ['confirm', 'error', 'warning']`

### Тригеры **Фронт -> Клиент**

- `mp.trigger('pushInventoryDataToClient', data)` - Инвентарь пользователя обновился: `data: {"userIndicators": {}, "inventory": []}`

- `mp.trigger('userdUseItem', idItem: int)` - Игрок использовал предмет: `idItem: int`

- `mp.trigger('userEquippedItem', idItem: int)` - Игрок надел предмет: `idItem: int`

- `mp.trigger('userdTakeOfItem', idItem: int)` - Игрок использовал предмет: `idItem: int`

- `mp.trigger('userAuth', login: string, pass: string)` - Пользователь пытается залогиниться

- `mp.trigger('userAuth', login: string, pass: string)` - Пользователь пытается залогиниться

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
