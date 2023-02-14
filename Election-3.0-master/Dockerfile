FROM node:14.7.0-alpine

WORKDIR /var/app/

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]