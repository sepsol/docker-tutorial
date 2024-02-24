FROM node:20.10.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD npm run dev
