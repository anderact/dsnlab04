FROM mongo-express

RUN apk update && apk add git

RUN git clone https://github.com/anderact/dsnlab04.git /app

WORKDIR /app

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
