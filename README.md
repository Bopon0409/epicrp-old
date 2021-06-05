# Epic RP Front Repo

**_Короче, программист, я тут задокументировал и в благородство играть не буду:
выполнишь для проекта пару заданий — и мы в расчете. Заодно посмотрим, как
быстро у тебя башка после этого сочного кода прояснится. А по твоей теме
постараюсь разузнать. Хрен его знает, на кой ляд тебе этот фронт сдался, но я в
чужие дела не лезу, хочешь юзать моё api, значит есть за что..._**

# Скрипты

- `npm i` Установить зависимости
- `npm run dev` Запуск development сервера
- `npm run build` Компиляция билда
- `npm run zip` Компиляция и архивация билда
- `npm run analyze` Запуск анализа билда
- `npm run stats` Просмотр статистика кода

# Документация

- **Документация по триггерам (API) папке `docs`**
- **Формат JSON данных для триггеров в папке `src/tests/json`**

# Тесты

* **Через модальное окно: F9**
* **Через глобальный объект: window.test (в консоли)**

# Правила фронтендов

1. Если не работает, оно работает в браузере `npm run dev`
2. Если не работает в браузере, напиши мне
3. Если нужен триггер, то он есть в `docs`
4. Если его нет в `docs` он есть в `src/tests`
5. Если его нет в `src/tests` напиши мне
6. Если нужен триггер по кнопке его можно посмотреть запустив `npm run dev`
7. Если npm run dev не работает, запусти `git pull`
8. **Если необходимость в правках устраняется 1 строчкой на бэке, необходимости
   в правках нет**
9. **Если необходимость в правках устраняется 2-мя строчками на бэке,
   необходимости в правках нет**
10. **Если необходимость в правках устраняется 3-мя строчками на бэке,
    необходимости в правках нет**
11. **Фронт отвечает за отображение данных, и передачу событий**
12. Если проверку можно сделать на клиенте, проверку **нужно** сделать на
    клиенте
13. Если не согласен, **см пункт 11**
13. Не используй тройные тернарные операторы
14. Используй switch case
15. Фронтендер понятия не имеет что на бэке, все пожелания по входным данным
    новой системы **до написания кода системы**