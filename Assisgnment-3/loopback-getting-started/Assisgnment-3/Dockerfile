FROM node:latest
WORKDIR /app
RUN npm install -g loopback-cli
RUN npm install -g apiconnect
RUN npm install -g strongloop
EXPOSE 3000
ENTRYPOINT [ "node", "." ]
