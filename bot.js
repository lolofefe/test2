const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526927317440921611")
setInterval(function() {
channel.send(` LOLO GANGLOLO GANGLOLO GANGLOLO GANG LOLO GANG  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);