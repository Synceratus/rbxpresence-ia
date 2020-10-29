const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setActivity('over you.', { type: "WATCHING"});
    client.user.setStatus('online');
});

client.login(process.env.BOT_TOKEN);