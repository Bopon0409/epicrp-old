# Epic front

## Документация

### Тригеры **Клиент -> Фронт**

Выполняются через `browser.execute('window.trigger('triggerName', data')')`
Где data - JSON string

- `window.trigger('pushInventaryDataToFront', data)` - Загрузка данных инвентаря на фронт: `data: {"userIndicators": {}, "inventory": []}`

- `window.trigger('openInventory')` - Открыть инвентарь

- `window.trigger('closeInventory')` - Закрыть инвентарь

- `window.trigger('openAuth')` - Окрыть окно авторизации/регистрации

- `window.trigger('openHUD')` - Открыть Худ

- `window.trigger('closeHUD')` - Закрыть Худ

- `window.trigger('openBg')` - Открыть Фон (скрин gta)

- `window.trigger('closeBg')` - Закрыть Фон (скрин gta)

- `window.trigger('userAuthAnswer', isSuccess, errorMsg)` - Ответ сервера на авторизацию: `isSuccess: boolean, errorMsg: string`

- `window.trigger('userRegisterAnswer', isSuccess, errorMsg)` - Ответ сервера на регистрацию: `isSuccess: boolean, errorMsg: string'`

- `window.trigger('addAlert', type, text)` - Прислать уведомление в HUD: `type: string, text: string | types: ['confirm', 'error', 'warning']`

### Тригеры **Фронт -> Клиент**

- `mp.trigger('pushInventoryDataToClient', data)` - Инвентарь пользователя обновился: `data: {"userIndicators": {}, "inventory": []}`

- `mp.trigger('userUseInventaryItem', idItem)` - Игрок использовал предмет: `idItem: int`

- `mp.trigger('userEquippedItem', idItem)` - Игрок надел предмет: `idItem: int`

- `mp.trigger('userAuth', login, pass)` - Пользователь пытается залогиниться: `login: string, pass: string`

- `mp.trigger('userRegister', login, email, pass)` - Пользователь пытается зарегистрироваться: `login: string, email: string, pass: string`

### Тестирование фронта

## Управление через глобальный объект window.test (в консоли).

Пример: `window.test.openHUD()`

- `testAlerts()` : Имитация загрузки уведомлений в hud с сервера

- `testInventory()` : Имитация загрузки данных инвентаря с сервера

- `testAuthAnswer()` : Имитация ответа сервера на запрос регистрации/авторизации. Первым параметром - булево значение

- `openAuth()` : Открытие авторизации

- `openInventory()` : Открытие инвентаря

- `openHUD()` : Открытие hud

- `closeInventory()` : Закрытие инвентаря

- `closeHUD()` : Закрытие hud

- `openBg()`: Открытие фона (скриншота игры)

- `closeBg()` : Закрытие фона (скриншота игры)
