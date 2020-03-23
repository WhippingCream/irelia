FROM enterkeywasremoved/irelia:base

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

CMD [ "npm", "run-script", "start" ]
