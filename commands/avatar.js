const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const settings = require('../settings.json');

  exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Avatar by ${message.author.username}`)
    .setDescription("`ID:" + ` ${message.author.id} `+"`")
    .setColor(settings.color)
    .setImage(message.author.displayAvatarURL({dynamic : true}))
    message.channel.send({embed})
}
   
    exports.help = {
      name: 'avatar'
    }
