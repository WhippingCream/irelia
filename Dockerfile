FROM enterkeywasremoved/irelia:base

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
RUN [ "sh", "-c" , "npm install"]

CMD [ "npm", "run-script", "start" ]
