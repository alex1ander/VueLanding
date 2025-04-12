# Используем официальный Node.js image
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта Vue
COPY . .

# Устанавливаем зависимости для Vue
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
