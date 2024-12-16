# Gunakan image Node.js sebagai base image
FROM node:18

# Tentukan direktori kerja di dalam container
WORKDIR /

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Ekspos port aplikasi (misalnya aplikasi Anda berjalan pada port 3000)
EXPOSE 8080

# Tentukan perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
