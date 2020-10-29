const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setStatus("online");
    client.user.setPresence({
        game: {
            name: "test",
            type: "WATCHING"
        }
    });
});

client.login(process.env.BOT_TOKEN);