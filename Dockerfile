# Используем Node 20 вместо 18
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json сначала (для кэша)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код проекта
COPY . .

# Открываем порт для Vue dev server
EXPOSE 8080

# Запуск Vue dev server
CMD ["npm", "run", "serve"]
