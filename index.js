const Discord = require('discord.js');

const client = new Discord.Client();
const { prefix, token } = require('./config.json');
var count = 0;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.content === `${prefix}isGay`) {
      msg.reply('Yes, your mother is gay.');
    }
    if (msg.content === `${prefix}love`) {
        msg.reply('Thank you. I love you too <3 ');
    }
    if (msg.content === `${prefix}isJamesGay`) {
        msg.reply('Yes, James is gay. He eats butthole.');
    }
    if (msg.content === `${prefix}amSimp`) {
        msg.reply('Yes, you are a simp.');
    }
    if (msg.content === `${prefix}nWord`) {
        count = 0;
        count +=1;
        msg.reply(`You have been granted ${count} N word passes. Please use it wisely.`);
    }
    if (msg.content === 'nibba' && count != 0) {
        count -=1;
        msg.reply(`You have ${count} N word passes left. `);
    }else if ( msg.content === 'nibba' && count <= 0){
        msg.reply('You have no N word passes left. Please obtain some more.');
    }
});
client.login(token);

