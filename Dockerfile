FROM node:18

RUN mkdir -p /home/app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /home/app

# RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
