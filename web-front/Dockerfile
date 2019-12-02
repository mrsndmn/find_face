FROM node:10

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "npm", "start" ]