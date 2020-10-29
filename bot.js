const discord = require('discord.js');
const { getPlayerInfo } = require('noblox.js');
const bot = new discord.Client();
const rNames = [Synceratus, RedactedZero, Taysav123, R0bustic, CreepySins, lxuca, unix_system];

bot.on("ready", () => {

    bot.user.setPresence({
        game: {
            name: "Watching over you.",
            type: "STREAMING"
        }
    });

    while(true) {
        for(let i = 0; i < rNames.length; i++) {
            let playerInfo = await getPlayerInfo(String(rNames[i]))
        }
    }
});

bot.login(process.env.BOT_TOKEN);