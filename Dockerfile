FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app

RUN npm install

COPY . /home/app

# RUN npm run build

EXPOSE 3000

# CMD ["node", "/home/app/index.js"]
CMD ["node", "index.js"]

