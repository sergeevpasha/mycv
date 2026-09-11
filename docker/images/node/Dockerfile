FROM node:24.21.0-trixie-slim

WORKDIR /build
COPY package*.json ./
RUN npm install && chown -R node:node /build

WORKDIR /var/www
USER node

COPY --chmod=755 docker/images/node/entrypoint.sh /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["npm", "run", "dev"]
