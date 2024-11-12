FROM node:alpine

ENV NODE_ENV production
WORKDIR /services/web_app
COPY . .
RUN npm install

CMD npm start

EXPOSE 8080