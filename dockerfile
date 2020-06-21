FROM node:latest

USER node

RUN mkdir /home/node/project

WORKDIR /home/node/project

COPY --chown=node:node package.json ./

RUN npm install --no-package-lock

COPY --chown=node:node . .

CMD [ "npm", "start" ]
