# Скрипты

- `npm i` Установить зависимости
- `npm run dev` Запуск development сервера
- `npm run build` Компиляция билда
- `npm run analyze` Запуск анализа билда

# Тесты

##### Управление через глобальный объект test (в консоли)

Пример: `test.setHudActive(true)`

#### Инвентарь

- `setInventoryActive(active)` : Открытие/закрытие инвентаря
- `testInventory()` : Имитация загрузки данных инвентаря с сервера

#### Авторизация

- `testAuthAnswer()` : Имитация ответа сервера на запрос авторизации
- `testRegisterAnswer()` : Имитация ответа сервера на запрос регистрации
- `setAuthActive(active)` : Открытие/закрытие авторизации/регистрации

#### Фон (скрин игры)

- `setBgActive(active)` : Открытие/закрытие фона

#### Чат

- `testChatPushMsg()` : Имитация загрузки сообщений с сервера
- `setChatActive(active)` : Активация чата
- `setChatShow(active)` : Показать/Скрыть чат
- `clearChat()` : Очистка чата

#### HUD

- `setHudActive(active)` : Открытие/закрытие HUD
- `setHudData()` : Имитация загрузки данных (малый набор) в hud
- `setAllHudData()` : Имитация загрузки данных (весь набор) в hud
- `setGeoHudData()` : Имитация загрузки данных гео локации в hud
- `setMicroHudData()` : Имитация загрузки данных микрофона в hud
- `setMissionHudData()` : Имитация загрузки данных миссии в hud
- `setSpeedometerHudData()` : Имитация загрузки данных спидометра в hud
- `setTimeHudData()` : Имитация загрузки данных времени в hud
- `setOnlineHudData()` : Имитация загрузки данных онлайна в hud
- `testAlerts()` : Имитация загрузки уведомлений в hud с сервера

# Документация

## Тригеры **Клиент -> Фронт**

##### Выполняются через `browser.execute('trigger('triggerName', argument)')`

- `window.trigger('pushInventaryDataToFront', data: json string)` - Загрузка данных инвентаря на фронт
- `window.trigger('pushPersData', data: json string)` - Загрузка данных о персонажах игрока
- `window.trigger('userAuthAnswer', isSuccess: boolean)` - Ответ сервера на авторизацию
- `window.trigger('userRegisterAnswer', isSuccess: boolean` - Ответ сервера на регистрацию
- `window.trigger('addAlert', data: json string)` - Прислать уведомление в HUD
- `window.trigger('setHudData', data: json string)` - Загрузка данных (малый набор) hud
- `window.trigger('setAllHudData', data: json string)` - Загрузка данных (весь набор) hud
- `window.trigger('setGeoHudData', data: json string)` - Загрузка данных гео локации в hud
- `window.trigger('setMicroHudData', data: json string)` - Загрузка данных микрофона в hud
- `window.trigger('setMissionHudData', data: json string)` - Загрузка данных миссии в hud
- `window.trigger('setSpeedometerHudData', data: json string)` - Загрузка данных спидометра в hud
- `window.trigger('setInventoryActive', active: boolean)` - Открыть/Закрыть инвентарь
- `window.trigger('setAuthActive', active: boolean)` - Открыть/Закрыть окно авторизации
- `window.trigger('setHudActive', active: boolean)` - Открыть/Закрыть HUD
- `window.trigger('setBgActive', active: boolean)` - Открыть/Закрыть фон
- `window.trigger('setChatActive', active: boolean)` - Активация чата
- `window.trigger('setChatShow', active: boolean)` - Показать/Скрыть чат
- `window.trigger('clearChat')` - Очистить чат
- `window.trigger('setCreatePersActive', active:boolean)` - Открыть/Закрыть окно создания персонажа
- `window.trigger('setChoicePersActive', active:boolean)` - Открыть/Закрыть окно выбора персонажа

## Тригеры **Фронт -> Клиент**

- `mp.trigger('pushInventoryDataToClient', data: json string)` - Инвентарь пользователя обновился
- `mp.trigger('userdUseItem', idItem: int)` - Игрок использовал предмет
- `mp.trigger('userEquippedItem', idItem: int)` - Игрок надел предмет
- `mp.trigger('userTakeOfItem', idItem: int)` - Игрок использовал предмет
- `mp.trigger('userAuth', login: string, pass: string)` - Пользователь пытается залогиниться
- `mp.trigger('userRegister', login: string, email: string, pass: string)` - Пользователь пытается зарегестрироваться
- `mp.trigger('pushMessageToClient', type: string, text: string)` - Пользователь отправил сообщение
- `mp.trigger('createCharChangeValue', type: String, value: String or Number)` - Пользователь что-то изменил при создании персонажа

##### Список параметров `createCharChangeValue`

1. name - String, Имя
2. surname - String, Фамилия
3. sex - String ('male', 'female'), Пол
4. mother - Int (id), Мать
5. father - Int (id), Отец
6. parents_similarity - Float (0-1), Схожесть с родителями

## chatAPI

##### Управление через глобальный объект chatAPI

- `push(msg: json string)`
- `clear()`
- `activate(active: boolean)`
- `show(show: boolean)`
