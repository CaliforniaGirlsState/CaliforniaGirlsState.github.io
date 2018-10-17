# base image
FROM node:carbon

# set working directory
RUN mkdir -p /app/server
WORKDIR /app/server

COPY package.json /app/server
COPY package-lock.json /app/server
RUN npm install

EXPOSE 5000

# start app
CMD ["npm", "start"]
