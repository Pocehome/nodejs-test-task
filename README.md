# Простое приложение Express

Это простое веб-приложение, созданное с использованием Node.js и Express.js.

## Установка

Убедитесь, что на вашей машине установлен Node.js. Затем выполните следующие команды для установки зависимостей:
```bash
npm install express
```

## Запуск приложения
Чтобы запустить приложение, выполните следующую команду:
```bash
node app.js
```

## Маршруты
* `/`  Главная страница, отображает сообщение “Hello, World!”.
* `/about` Страница “О нас”, отображает сообщение “Это простое приложение на Express.js”.
* Все остальные маршруты возвращают сообщение “Страница не найдена”.

## Статические файлы
Статический файл `index.html` находятся в директории public.
