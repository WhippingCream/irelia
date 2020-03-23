const logger = require('./loaders/logger');
const Discord = require('discord.js'); //Discord.JS 모듈을 불러오고,
const { spawn } = require('child_process');

const client = new Discord.Client(); //client 생성,
var token = '';

client.on('ready', () => { //이벤트 리스너 (봇이 준비되었을 때)
  logger.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => { //이벤트 리스너 (봇에 메세지가 올 때)

   if (msg.content === 'ping') { //만약 메세지의 내용이 'ping' 과 일치하다면,
     msg.reply('한글테스트'); //Pong! 이라고 대답해준다
   }

});

client.login(token); //'token' 으로 봇(클라이언트)이 로그인
