#get lastest node image
FROM node:lts-alpine as build-stage

WORKDIR /app

#keep container running
ENTRYPOINT ["tail", "-f", "/dev/null"]

