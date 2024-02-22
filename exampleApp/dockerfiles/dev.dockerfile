FROM node:lts-alpine as build-stage

WORKDIR /app

ENTRYPOINT ["tail", "-f", "/dev/null"]

# COPY ../package*.json ./

# RUN npm install

# EXPOSE 8000