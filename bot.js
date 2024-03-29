const Discord = require('discord.js');
const noblox = require('noblox.js');
const dotenv = require('dotenv');
const client = new Discord.Client();
const Names = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10"];

var logChannelId = "idhere"


dotenv.config();

noblox.setCookie(process.env.cookie).catch(async err => {
    console.log(chalk.red('Login problems: ' + err));
});

client.on("ready", () => {
    getInfos();
    client.user.setPresence({
        activity: {
            name: 'activitytext',
            type: "WATCHING"
        },
        status: 'online'
    })
});

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var onlinePeeps = []

async function getInfos() {
        while (true) {
            for (let i = 0; i < Names.length; i++) {
                let userIds = await noblox.getIdFromUsername(String(Names[i]));
                if (userIds != null) {
                    let plrInfo = await noblox.getPresences([Number(userIds)]);
                    const result = onlinePeeps.find(element => element == Names[i])
                    const index = onlinePeeps.indexOf(Names[i])
                    if (plrInfo["userPresences"][0]["userPresenceType"] == 2 && plrInfo["userPresences"][0]["lastLocation"] == "<gamename>" && result == undefined) {
                      onlinePeeps[onlinePeeps.length] = Names[i];
                      const channel = client.channels.cache.find(channel => channel.id === logChannelId)
                      channel.send(Names[i] + " is online on <gamename>. <@&roleid>")
                    } else if (result != undefined && plrInfo["userPresences"][0]["userPresenceType"] != 2) {
                      onlinePeeps.splice(index, 1)
                      const channel = client.channels.cache.find(channel => channel.id === logChannelId)
                      channel.send(Names[i] + " is offline.")
                    }
                    await wait(5000);
                }
            }
          await wait(600000);
        }
}

client.login(process.env.BOT_TOKEN);
