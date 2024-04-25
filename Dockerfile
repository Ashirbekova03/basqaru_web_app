ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-buster as base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS compiled
WORKDIR /app/
COPY . ./
RUN npm run build && rm -rf node_modules

FROM nginx:alpine AS web-server
WORKDIR /usr/share/nginx/html
COPY --from=compiled app/dist ./
COPY ./app.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]