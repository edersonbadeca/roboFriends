FROM node:10.14.0

WORKDIR /app
ADD . $WORKDIR
RUN npm install -g create-react-app
RUN npm install
