const { MessageEmbed, version } = require('discord.js');
const settings = require('../settings.json');


exports.run = async(client, message, args, bot) => { //eslint-no-unused-vars
  
  const embed = new MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("Server ID", message.guild.id, true) 
  .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("Region", regs[message.guild.region], false)
  .addField('Text Channels',`${message.guild.channels.cache.filter(m => m.type === 'text').size} Text`, true)
  .addField('Voice Channels',`${message.guild.channels.cache.filter(m => m.type === 'voice').size} Voice`, true)
  .addField('Member Count',`${message.guild.members.cache.filter(m => m.presence.status === 'online').size} Online`, false)
  .setThumbnail(message.guild.iconURL())
  .setFooter(`${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`)
   message.channel.send(embed);
};

exports.help = {
  name: 'serverfornowonworkinfo',
}


// Date when was server created function
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
};
// Regions
const regs = {
  "europe": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa",
        "brazil": ":flag_br: Brazil"
    };
    // Member Statuses


