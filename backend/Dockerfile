# Используем образ Node.js 14
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из корня
COPY ./package.json ./package-lock.json ./

# Устанавливаем зависимости из package.json, который в корне
RUN npm install

# Копируем package.json и package-lock.json из backend/
COPY ./backend/package.json ./backend/package-lock.json ./backend/

# Устанавливаем зависимости для backend
WORKDIR /app/backend
RUN npm install

# Копируем остальные файлы
WORKDIR /app
COPY ./server.js /app/

# Запускаем приложение
CMD ["npm", "start"]
