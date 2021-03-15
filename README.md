**Короче, Программист, я тут задокументировал и в благородство играть не буду: выполнишь для проекта пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после этого сочного кода прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот фронт сдалался, но я в чужие дела не лезу, хочешь писать на js, значит есть за что...**

# Скрипты

- `npm i` Установить зависимости
- `npm run dev` Запуск development сервера
- `npm run build` Компиляция билда
- `npm run analyze` Запуск анализа билда
- `npm run zip` Компиляция и архивация билда
(*только в linux среде, необходим debian пакет zip, sudo apt install zip для установки*)

# Документация

- **Документация по триггерам (API) папке `docs`**

- **Формат JSON данных для триггеров в папке `src/tests/json`**

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

#### Выбор персонажа

- `setChoicePersActive()` : Открытие/закрытие окна выбора персонажа
- `setPersData()` : Загрузка данных персонажей игрока

#### Создание персонажа

- `setCreatePersActive()` : Открытие/закрытие окна создания персонажа
