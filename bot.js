const discord = require('discord.js');
const { getPlayerInfo } = require('noblox.js');
const bot = new discord.Client();

bot.on("ready", () => {
    bot.user.setPresence({
        game: {
            name: "Watching over you.",
            type: "STREAMING"
        }
    });
});

bot.login(process.env.BOT_TOKEN);