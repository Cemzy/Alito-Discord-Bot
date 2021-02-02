let snipe = require("../snipe.json")
const settings = require('../settings.json');
const {MessageEmbed} = require("discord.js")
exports.run = async (client, message, args) => {

      if(!snipe[message.channel.id]) return message.channel.send("Nice Try, but nobody here deleted messages.")
       let msg = snipe[message.channel.id].msg; 
      let author = snipe[message.channel.id].user; 
      let time = snipe[message.channel.id].time; 
      let icon = snipe[message.channel.id].icon; 
       const embed = new MessageEmbed()
       .setTitle(`An Imposter deleted a message!`)
       .addField("Imposter: ", `<@${author}>`)
       .addField("Evil Message: ", `${msg}`)
       .setColor(settings.color)
       .setTimestamp(time)
       .setThumbnail(icon) 
    message.channel.send(embed)

}
exports.help = {
    name: 'snipe'
  }
