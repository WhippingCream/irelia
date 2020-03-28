const logger = require('./loaders/logger');
const Discord = require('discord.js'); 
const fs = require('fs');
require('dotenv').config();

var token = process.env.BOT_TOKEN;
logger.info(token);

const client = new Discord.Client(); 
require('./loaders/eventLoader')(client);

client.commands = new Discord.Collection();
fs.readdir('./src/commands/', (err, files) => {
	if (err) logger.error(err);
	logger.info(`Loading a total of ${files.length} commands.`);
	files.forEach(f => {
		let props = require(`./commands/${f}`);
		logger.info(`Command Loaded! ${props.help.name} 👌`);
		client.commands.set(props.help.name, props);
	});
});

client.login(token); 
