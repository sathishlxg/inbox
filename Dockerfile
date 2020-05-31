FROM node:10-alpine

RUN mkdir -p /home/node_app/src/node_modules && chown -R node:node /home/node_app/src

WORKDIR /home/node_app/src

ENV PATH=/home/node_app/src/bin:$PATH

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD ["npx", "ember", "server", "--live-reload", "false"]
