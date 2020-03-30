const Discord = require('discord.js')
exports.run = (client, message, args) => {
	if(!args[0]){
		return message.channel.send("```" + `\n` + "Description: " + this.help.description + `\n` + "Usage: " + this.help.usage + "```")
	}else{
		let command = args[0];
		if (client.commands.has(command)) {
			cmd = client.commands.get(command);
			return message.channel.send("```" + `\n` + "Description: " + cmd.help.description + `\n` + "Usage: " + cmd.help.usage + "```")
		} else {
			return message.reply("That command doesn't exist!")
		}
	}
}

exports.help = {
  name: 'help',
  description: 'Displays all the available commands.',
  usage: 'help [command]'
};
