FROM node:alpine

ENV NODE_ENV production
WORKDIR /services/api_service
COPY . .
RUN npm install

CMD npm start

EXPOSE 3000