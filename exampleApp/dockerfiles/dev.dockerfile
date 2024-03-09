FROM node:lts-alpine as build-stage

WORKDIR /app

#copy package
COPY ./vue/package*.json ./

RUN npm install

EXPOSE 8000