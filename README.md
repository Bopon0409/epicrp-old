# Epic front

## Документация

### Тригеры **Клиент -> Фронт**

Выполняются через  `browser.execute('window.trigger('triggerName', data')')`
Где data - JSON string

- `window.trigger('pushInventaryDataToFront', data)` - Загрузка данных инвентаря на фронт: `data: {"userIndicators": {}, "inventory": []}`

### Тригеры **Фронт -> Клиент**

- `mp.trigger('pushInventoryDataToClient', data)` - Инвентарь пользователя обновился: `data: {"userIndicators": {}, "inventory": []}`

- `mp.trigger('userUseInventaryItem', idItem)` - Игрок использовал предмет: `idItem: int`

- `mp.trigger('userEquippedItem', idItem)` - Игрок надел предмет: `idItem: int`
