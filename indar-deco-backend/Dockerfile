FROM node:20 as base


FROM base as development

WORKDIR /indar-deco-backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "npm","run","start-dev"]


FROM node:20 as production

WORKDIR /indar-deco-backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "npm","start" ]