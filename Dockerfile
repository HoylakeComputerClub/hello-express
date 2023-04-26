FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

 RUN npm ci --omit=dev

 COPY . .

 EXPOSE 3004

 CMD [ "node", "index.js" ]