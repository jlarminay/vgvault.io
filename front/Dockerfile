# build stage
FROM node:17.8.0 as build-stage

WORKDIR /
COPY package*.json ./

COPY . ./

RUN npm install
RUN npm run build

#production stage
FROM nginx:1.21.1 as production-stage

COPY --from=build-stage /dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp