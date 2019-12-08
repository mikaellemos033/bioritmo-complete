# base image
FROM node:10.12 as node

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx
COPY --from=node /app/dist/weather-front/ /usr/share/nginx/html/
# COPY ./dist/weather-front/ /usr/share/nginx/html/

EXPOSE 80