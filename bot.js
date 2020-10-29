const discord = require('discord.js');
const { getPlayerInfo } = require('noblox.js');
const bot = new discord.Client();

bot.on("ready", () => {
    
});

bot.login(process.env.BOT_TOKEN);