FROM node:18.1-alpine

WORKDIR /frontend

RUN apk update && \
    npm install -g npm && \
    npm install -g vue-cli

EXPOSE 8080

CMD ["npm", "run", "serve"]
