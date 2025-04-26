# Usa una imagen base oficial de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que la app escuchará
EXPOSE 3000

# Define las variables de entorno para la base de datos
# Asegúrate de que estas variables estén configuradas correctamente en Render (o en tu archivo .env)
ENV PGUSER='entrevistapro_user'
ENV PGHOST='dpg-d065rrili9vc73e1f5f0-a.oregon-postgres.render.com'
ENV PGDATABASE='entrevistapro'
ENV PGPASSWORD='tSi7wwd7hvtXSdegvlcNxANxLVpO3Afw'
ENV PGPORT=5432

# Usa la variable de entorno de puerto para que la app escuche en el puerto correcto
ENV PORT=3000



# Define el comando para iniciar la app
CMD ["node", "server.js"]
