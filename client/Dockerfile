# base image
FROM node:carbon

# set working directory
RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json /app/client
COPY package-lock.json /app/client
RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]
