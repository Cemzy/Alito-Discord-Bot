const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const settings = require('../settings.json');
const neko = new nekoclient();


exports.run = async (client, message, args) => {

        
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
                message.channel.send(":x: | Please mention someone to hug");
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.hug();
            const embed = new Discord.MessageEmbed()
            .setColor(settings.color)
            .setTitle(`${message.author.tag} hugs ${member.user.tag}`)
            .setImage(GIF.url)

            message.channel.send(embed);
            }
            await ping();
        
    }
}


exports.help = {
    name: 'hug'
  }
