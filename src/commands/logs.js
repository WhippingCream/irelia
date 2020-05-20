const { spawn } = require('child_process');
exports.run = (client, message, args) => {
	var defaultOptions = ['logs'];
	var options = defaultOptions.concat(args);

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
  name: 'logs',
  description: 'Fetch the logs of a container.',
  usage: 'logs CONTAINER'
};
