FROM node:12

# Bundle APP files
COPY . .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

CMD [ "npm", "run-script", "start" ]
