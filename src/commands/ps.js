const Discord = require('discord.js');
const { spawn } = require('child_process');
exports.run = (client, message, args) => {
	var defaultOptions = ['ps', '-a'];
	var formattedOptions = ['--format', 'table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}'];
	var options = defaultOptions.concat(formattedOptions);

	const docker = spawn('docker', options);
	var stdout = '```';
	var stderr = '';

	docker.stdout.on('data', (data) => {
		stdout = stdout.concat(data);
	});
	docker.stderr.on('data', (data) => {
		stderr = stderr.concat(data);
	});
	docker.on('close', (code) => {
		stdout = stdout.concat('```');
		message.channel.send('\n'.concat(stdout, '\n', stderr));
	});
}

exports.help = {
  name: 'ps',
  description: 'List containers.',
  usage: 'ps'
};
