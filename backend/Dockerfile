FROM node:14
WORKDIR /app
COPY ./package.json ./package-lock.json ./
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./server.js /app/
CMD ["npm", "start"]