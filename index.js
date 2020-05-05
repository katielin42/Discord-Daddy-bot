const Discord = require('discord.js');

const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.content === `${prefix}isGay`) {
      msg.reply('Yes, your mother is gay.');
    }
    if (msg.content === `${prefix}isJamesGay`) {
        msg.reply('Yes, James is gay. He eats butthole.');
    }
    if (msg.content === `${prefix}amSimp`) {
        msg.reply('Yes, you are a simp.');
    }
    if (msg.content === `${prefix}nWord`) {
        msg.reply('You have been granted the N pass. Please use it wisely.');
    }
});
client.login(token);

