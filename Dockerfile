#imagen base de Node 19
FROM node:19

#instalación de gestor apk + git
RUN apk update && apk add git

#clonación del repositorio
RUN git clone https://github.com/anderact/dsnlab04.git /usr/src/app

#definición del directorio de trabajo
WORKDIR /usr/src/app

#se descargan las dependencias en la ruta del directorio de trabajo
RUN npm install --prefix /usr/src/app

#se expone el puerto solicitado
EXPOSE 9000

#comando a ejecutar
CMD ["npm", "start", "--prefix", "/usr/src/app"]
