const Discord = require('discord.js');
const { getPlayerInfo } = require('noblox.js');
const Bot = new Discord.Client();
const Names = ["Synceratus", "RedactedZero", "Taysav123", "R0bustic", "CreepySins", "lxuca", "unix_system"];

bot.on("ready", () => {
    
});

while (true) {
    for (let i=0; i<Names.length; i++) {
        let plrInfo = await getPlayerInfo(String(Names[i]));
    }
}

bot.login(process.env.BOT_TOKEN);