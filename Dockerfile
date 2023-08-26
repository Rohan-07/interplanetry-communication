FROM node:20.3.1
#Creating app directory
WORKDIR /app

COPY package*.json /app
RUN yarn install --frozen-lockfile --only=production && yarn cache clean

COPY . /app
CMD yarn run start
EXPOSE 3000
