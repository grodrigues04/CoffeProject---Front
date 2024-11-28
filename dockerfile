# syntax=docker/dockerfile:1

FROM node:20.16.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 3000 