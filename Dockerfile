FROM node:22.3.0-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.3.0-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
