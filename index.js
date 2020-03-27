const logger = require('./loaders/logger');
const Discord = require('discord.js'); 
const { spawn } = require('child_process');

var token = process.env.BOT_TOKEN;
logger.info(token);

const client = new Discord.Client(); 
require('./util/eventLoader')(client);
client.login(token); 
