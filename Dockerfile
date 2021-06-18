FROM node:14.16.0-alpine3.13
RUN apk add --no-cache git

WORKDIR /app

EXPOSE 3000/tcp

# copy package and lock files first for better caching
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

# install the packages
RUN --mount=type=secret,id=npmrc,dst=/root/.npmrc \
  yarn install

# copy the rest
COPY . .

CMD yarn start -h 0.0.0.0
