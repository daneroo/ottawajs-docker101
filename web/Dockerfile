FROM node:6

# inject the port into the app
ENV PORT 8000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

# This is were we publish
EXPOSE ${PORT}

CMD [ "npm", "start" ]
