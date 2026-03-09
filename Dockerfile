FROM node:22.19.0 AS base

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22.19.0 AS release

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules node_modules
COPY . .

RUN yarn run build

CMD yarn run start

EXPOSE 3000