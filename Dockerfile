FROM node:5.2.0

RUN apt-get update
RUN apt-get install build-essential -y

ENV TERM "xterm"

ADD ./package.json /app/package.json
ADD ./app.js /app/app.js
ADD ./config /app/config
ADD ./controllers /app/controllers
ADD ./models /app/models
ADD ./public /app/public
ADD ./test /app/test
ADD ./views /app/views

WORKDIR /app

RUN npm install
RUN npm install -g node-dev

CMD node-dev app.js

#cleanup
RUN apt-get clean