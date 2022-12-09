FROM node:18.12.1-alpine3.15

RUN mkdir -p /home/node/app/node_modules

RUN mkdir -p /home/node/app/packages/frontend/node_modules

RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node . .
