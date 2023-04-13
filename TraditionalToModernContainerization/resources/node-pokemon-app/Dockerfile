FROM node:14

LABEL maintainer="<admin@xyz.com>"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]