FROM node:22

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY ../.docker/catalog .

EXPOSE 9002

CMD ["npm", "start"]
