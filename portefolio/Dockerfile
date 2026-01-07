FROM node:24.12-trixie-slim

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
