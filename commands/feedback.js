const { MessageEmbed } = require('discord.js');
const settings = require('../settings.json');

  exports.run = async (client, message, args) => {
    if(!args.join(" ")) return message.channel.send("Specify a feedback please!");
    let feedback = args.join(" ");
    let embed = new MessageEmbed()
    .setTitle("Feedback")
    .setColor(settings.color)
    .setDescription(args.join(" "))
    .addField('Author:', message.author)
    .addField('From server:', message.guild.name)
    .setTimestamp(new Date())
    message.delete()
    message.channel.send("Your feedback has been sent to the developer!")
    client.channels.cache.get("806111096020795393").send(embed);};
    exports.help = {
      name: 'feedback'
    }
