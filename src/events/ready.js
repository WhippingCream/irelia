const Discord = require('discord.js');
const logger = require('../loaders/logger');
const client = new Discord.Client();
const fs = require('fs');
module.exports = client => {
	logger.info(`Logged in as ${client.user.tag}!`);
};
