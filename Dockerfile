FROM node:12.20-alpine AS build
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

FROM nginx:1.17.1-alpine
RUN apk add --update alpine-sdk
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
