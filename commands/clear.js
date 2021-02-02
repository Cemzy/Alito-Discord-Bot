const { MessageEmbed } = require('discord.js');

  exports.run = async (client, message, args) => {
        message.delete()
        if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply("You dont have permission `MANAGE_MESSAGES'").then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        if(isNaN(clearamount)) return message.reply(`Please do a number value to clear.`).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        if(clearamount <= 0) return message.reply(`Please choose a number greater than **0** and less than **1**`)
        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);        }, 1000)
            message.channel.send(`Succesfuly deleted **${clearamount}** messages`)
    }
    exports.help = {
      name: 'clear'
    }
