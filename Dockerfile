FROM nginx:latest

# Копируем index.html в контейнер
COPY ./index.html /usr/share/nginx/html/index.html

EXPOSE 80
