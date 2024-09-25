FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nodemon

CMD ["nodemon"]
