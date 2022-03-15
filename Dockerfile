FROM node:12.20-alpine AS build-stage
WORKDIR /usr/src/app

RUN apk add --update alpine-sdk
# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

COPY package.json package-lock.json ./
RUN npm install --build-from-resource
COPY . .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /usr/src/app/dist /app
COPY vue.config.js /etc/nginx/nginx.conf
