const { MessageEmbed, version } = require('discord.js');
const settings = require('../settings.json');
const moment = require('moment');


exports.run = async(client, message, args, bot) => { //eslint-no-unused-vars
  
  const embed = new MessageEmbed()
  .setAuthor("Command List")
  .addField("This is list of all commands", "Need  help? [Join our guild](https://discord.gg/ttG3GRtd)")
  .addField(":wrench: Utility","`ping` `clear` `feedback` `avatar` `botinfo`")
  .addField(":grin: Actions","`hug` `feed` `slap` `kiss`")
  .addField(":face_with_monocle: Social","`ship`")
  .addField(":8ball: Fun","`snipe` `8ball`")
  message.channel.send(embed);
};

exports.help = {
  name: 'help'
}

