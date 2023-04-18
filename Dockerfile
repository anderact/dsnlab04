FROM mongo-express

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/anderact/dsnlab04.git /app

WORKDIR /app

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
