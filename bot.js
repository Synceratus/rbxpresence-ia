const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
});

bot.login(process.env.BOT_TOKEN);