# 1. Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Production Stage
FROM nginx:alpine

# Statik build-i nginx-ə köçür
COPY --from=builder /app/dist /usr/share/nginx/html

# Front-end routing varsa /index.html-ə fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
