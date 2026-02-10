# 1. Build stage
FROM node:20-alpine AS build

WORKDIR /app

# package dosyalarını kopyala ve install et
COPY package*.json ./
RUN npm install

# Tüm projeyi kopyala ve build et
COPY . .
RUN npm run build

# 2. Production stage
FROM node:20-alpine

WORKDIR /app

# Production bağımlılıklarını yükle
COPY package*.json ./
RUN npm install --production

# Build edilmiş dosyaları kopyala
COPY --from=build /app/dist ./dist

# Vite preview server için port aç
EXPOSE 80

# Container çalışınca Vite preview başlasın
CMD ["npx", "vite", "preview", "--port", "80", "--host"]
