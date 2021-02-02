const { MessageEmbed, version } = require('discord.js');
const settings = require('../settings.json');
const Discord = require('discord.js')


exports.run = async(client, message, args, bot) => { 
    const shipTarget1 = (args[0])
    const shipTarget2 = (args[1])

          const noInput12 = new Discord.MessageEmbed()
          .setDescription(':x: | Please mention 2 users')

            .setColor(settings.color)
          if (!shipTarget1) return message.channel.send(noInput12)

          const noInput21 = new Discord.MessageEmbed()
          .setDescription(':x: | Please mention 2 users')
          .setColor(settings.color)
          if (!shipTarget2) return message.channel.send(noInput21)

          const shipEmbed = new Discord.MessageEmbed()
            .setTitle(':heart_decoration:  | Results |  :heart_decoration: ')
            .setDescription(`
            🔻 | ${shipTarget1} \n🔺 | ${shipTarget2}
            `)
            .setColor(settings.color)
            .addField('Ship', (`
              Their love-score is ${Math.floor(Math.random() * 100)}%! 💘
            `))
            message.channel.send(shipEmbed)
      }
    
exports.help = {
  name: 'ship'
}

