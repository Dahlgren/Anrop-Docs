FROM node:lts-alpine AS builder
WORKDIR /build/
COPY package.json package-lock.json /build/
RUN npm install
COPY docs /build/docs/
RUN npm run build

FROM node:lts-alpine
WORKDIR /app/
COPY package.json package-lock.json /app/
RUN npm install --production
COPY --from=builder /build/docs/.vuepress/dist/ /app/docs/.vuepress/dist/
EXPOSE 8080
CMD npm run serve
