const Discord = require('discord.js');
const { spawn } = require('child_process');
exports.run = (client, message, args) => {
	var defaultOptions = ['rmi'];
	var options = defaultOptions.concat(args);

	const docker = spawn('docker', options);
	var stdout = '';
	var stderr = '';

	docker.stdout.on('data', (data) => {
		stdout = stdout.concat(data);
	});
	docker.stderr.on('data', (data) => {
		stderr = stderr.concat(data);
	});
	docker.on('close', (code) => {
		message.reply('\n'.concat(stdout, '\n', stderr));
	});
}

exports.help = {
  name: 'rmi',
  description: 'rmi docker images.',
  usage: 'rmi IMAGE [IMAGE...]'
};
