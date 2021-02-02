const { MessageEmbed } = require('discord.js');
const moment = require('moment');

  exports.run = async (client, message, args) => {

    message.channel.send(`**:ping_pong:Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.:ping_pong:**`);
  }

    exports.help = {
      name: 'ping'
    }
