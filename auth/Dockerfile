FROM node:22

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY ../.docker/auth .

EXPOSE 9001

CMD ["npm", "start"]
