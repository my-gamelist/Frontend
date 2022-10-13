FROM node:alpine as build

ARG APP_HOST

WORKDIR /app
COPY package*.json .

RUN touch .env
RUN RUN echo "APP_HOST=${APP_HOST}}" >> .env

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]