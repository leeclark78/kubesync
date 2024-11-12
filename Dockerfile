FROM node:16-alpine as builder

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/packages/api/dist ./api
COPY --from=builder /app/packages/ui/dist ./ui
COPY package.json yarn.lock ./
RUN yarn install --production

EXPOSE 3000
CMD ["node", "api/server.js"]