FROM node:14.16.0-alpine3.13 as builder
RUN apk add --no-cache git

WORKDIR /app

# copy package and lock files first for better caching
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

# install the packages
RUN --mount=type=secret,id=npmrc,dst=/root/.npmrc \
  yarn install

# copy the rest
COPY . .

RUN yarn build

## production environment
FROM nginx:1.16.0-alpine

COPY --from=builder ./app/nginx.conf /etc/nginx/
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]
