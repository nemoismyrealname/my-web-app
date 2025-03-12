# Используем образ Node.js 14
FROM node:14

# Устанавливаем рабочую директорию для приложения
WORKDIR /app

# Копируем package.json и package-lock.json из корня проекта
COPY package.json package-lock.json ./

# Устанавливаем зависимости из package.json, который в корне
RUN npm install

# Копируем package.json и package-lock.json из backend в папку /app/backend
COPY backend/package.json backend/package-lock.json ./backend/

# Переходим в рабочую директорию backend
WORKDIR /app/backend

# Устанавливаем зависимости для backend
RUN npm install

# Копируем остальные файлы (например, server.js) в рабочую директорию
COPY backend/server.js /app/backend/

# Запускаем приложение
CMD ["npm", "start"]
