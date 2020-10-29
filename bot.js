const Discord = require('discord.js');
const Bot = new Discord.Client();

bot.on("ready", () => {
});

bot.login(process.env.BOT_TOKEN);