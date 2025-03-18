FROM node:22.3.0-alpine as build

WORKDIR /app

COPY landing-page/package.json landing-page/package-lock.json ./

RUN npm install

COPY ./landing-page .

RUN npm run build

FROM node:22.3.0-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]