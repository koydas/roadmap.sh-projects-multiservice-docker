FROM node:alpine

ENV NODE_ENV production
WORKDIR /servoces/api_service
COPY . .
RUN npm install

CMD npm start

EXPOSE 3000