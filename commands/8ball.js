const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const settings = require('../settings.json');

  exports.run = async (client, message, args) => {
    let reason = args.join(' ');
    if (reason.length < 1) return message.channel.send('You did not give the bot a question');
    var ball = ['It is certain.','No doubt about it.','No chance.','Maybe, time will tell.','No way.','Concentrate and try again.', ' As I see it, yes', 'Outlook good', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'My sources say no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    const embed = new Discord.MessageEmbed()
    .setColor(settings.color)
    .addField("You asked", reason)
    .addField("Answer:", ball[Math.floor(Math.random () * ball.length)])
    .setThumbnail("https://freepngimg.com/thumb/8_ball_pool/26906-7-8-ball-pool-transparent.png")
    message.channel.send({embed})
}
   
    exports.help = {
      name: '8ball'
    }
