FROM node:18
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4002
CMD ["npm", "run", "start"]
