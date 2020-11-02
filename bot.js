const Discord = require('discord.js');
const noblox = require('noblox.js');
const dotenv = require('dotenv');
const client = new Discord.Client();
const IDs = [622038343, 69814407, 161989118, 34919504, 34455029, 301532427, 13706661];

dotenv.config();

noblox.setCookie(process.env.cookie).catch(async err => {
    console.log(chalk.red('Login problems: ' + err));
});

client.on("ready", () => {
    getInfos();
    client.user.setPresence({
        activity: {
            name: 'over you.',
            type: "WATCHING"
        },
        status: 'online'
    })
});

async function getInfos() {
    while (true) {
        for (let i = 0; i < IDs.length; i++) {
            let plrInfo = await noblox.getPresences(Number(IDs[i]));
            console.log(plrInfo["placeId"]);
        }
    }
}

client.login(process.env.BOT_TOKEN);
