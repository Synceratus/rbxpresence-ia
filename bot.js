const Discord = require('discord.js');
const noblox = require('noblox.js');
const dotenv = require('dotenv');
const client = new Discord.Client();
const Names = ["Synceratus", "RedactedZero", "Taysav123", "R0bustic", "CreepySins", "lxuca", "unix_system"];

dotenv.config();

noblox.setCookie(process.env.cookie).catch(async err => {
    console.log(chalk.red('Login problems: ' + err));
});

client.on("ready", () => {
    getInfos();
    client.user.setPresence({
        activity: {
            name: 'Syn developing me.',
            type: "WATCHING"
        },
        status: 'online'
    })
});

async function getInfos() {
    while (true) {
        for (let i = 0; i < Names.length; i++) {
            let userIds = await noblox.getIdFromUsername(String(Names[i]));
            if (userIds != null) {
                let plrInfo = await noblox.getPresences[Number(userIds)];
                console.log(plrInfo);
            }
        }
    }
}

client.login(process.env.BOT_TOKEN);
