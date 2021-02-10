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

- `window.trigger('userAuthAnswer', data)` - Ответ сервера на авторизацию: `data: {isSuccess: boolean, errorMsg: string}'`

- `window.trigger('userRegisterAnswer', data)` - Ответ сервера на регистрацию: `data: {isSuccess: boolean, errorMsg: string}'`

- `window.trigger('addAlert', alert)` - Прислать уведомление в HUD: `alert: {id: number, type: string, text: string} types: ['confirm', 'error', 'warning']`

### Тригеры **Фронт -> Клиент**

- `mp.trigger('pushInventoryDataToClient', data)` - Инвентарь пользователя обновился: `data: {"userIndicators": {}, "inventory": []}`

- `mp.trigger('userUseInventaryItem', idItem)` - Игрок использовал предмет: `idItem: int`

- `mp.trigger('userEquippedItem', idItem)` - Игрок надел предмет: `idItem: int`

- `mp.trigger('userAuth', data)` - Пользователь пытается залогиниться: `data: {login: string, pass: string}`

- `mp.trigger('userRegister', data)` - Пользователь пытается зарегистрироваться: `data: {login: string, pass: string}`
