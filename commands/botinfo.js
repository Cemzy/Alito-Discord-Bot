const Discord = require("discord.js");
const { MessageEmbed, version } = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const client = new Discord.Client();
const prettyMilliseconds = require("pretty-ms");


exports.run = async(client, message, args, bot) => { //eslint-no-unused-vars

  const embed = new MessageEmbed()
  .setAuthor(`Bot Info`)
  .addField('Bot Name', `➤ ${client.user.username}`, true)
  .addField('Bot Created', `➤ ${client.user.createdAt.toLocaleString()}`, true)
  .addField('Library', `➤ discord.js ${version}`, true)
  .addField('Node.js Version',`➤ ${process.version}`, true)
  .addField('Bot Version', "➤ 0.0.0.3", false)
  .addField('Uptime', `➤ ${prettyMilliseconds(client.uptime)}`, false)
  .setColor(settings.color)
  message.channel.send(embed);
};

exports.help = {
  name: 'botinfo'
}
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

fs.readdir("./commands/", (err, files) => {
    const filez = files.length
})
