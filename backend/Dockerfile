# Используем образ Node.js 14
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из корня проекта
COPY package.json package-lock.json ./

# Устанавливаем зависимости для проекта
RUN npm install

# Копируем файлы из backend в контейнер
COPY backend/ ./backend/

# Устанавливаем зависимости для backend
WORKDIR /app/backend
RUN npm install

# Копируем оставшиеся файлы
COPY backend/server.js /app/backend/

# Запускаем приложение
CMD ["npm", "start"]
