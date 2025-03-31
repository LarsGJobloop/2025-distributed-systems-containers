FROM node:22 AS builder
WORKDIR /App

COPY . ./

RUN npm install
RUN npm run build

FROM joseluisq/static-web-server:2 AS server
COPY --from=builder /App/dist /public
