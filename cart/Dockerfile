FROM node:22

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY ../.docker/cart .

EXPOSE 9006

CMD ["npm", "start"]
