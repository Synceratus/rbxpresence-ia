const Discord = require('discord.js');
const noblox = require('noblox.js');
const client = new Discord.Client();
const Names = ["Synceratus", "RedactedZero", "Taysav123", "R0bustic", "CreepySins", "lxuca", "unix_system"];

bot.on("ready", () => {
    getInfos();
});

async function getInfos() {
    while (true) {
        for (let i = 0; i < Names.length; i++) {
            let userId = await noblox.getIdFromUsername(String(Names[i]));
            let plrInfo = await noblox.getPresences(Number(userId));
        }
    }
}

bot.login(process.env.BOT_TOKEN);
