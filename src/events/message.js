const Discord = require('discord.js');
const logger = require('../loaders/logger');
const fs = require("fs");
module.exports = async message => {
	var prefix = '/';
	var client = message.client;

	if (!message.content.startsWith(prefix)) 
		return;  
    
	let command = message.content.split(' ')[0].slice(prefix.length);
	let params = message.content.split(' ').slice(1);
    
	let cmd;
	if (client.commands.has(command)) {
		cmd = client.commands.get(command);
	}

	if (cmd) {
		cmd.run(client, message, params);
		logger.info("Command: /" + cmd.help.name + "Params: " + params);
	}
};
