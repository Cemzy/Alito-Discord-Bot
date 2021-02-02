const Discord = require('discord.js');
const Client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const express = require('express');
const app = express();

let prefix = settings.prefix;

app.get("/", (req, res) => {
  res.send("I'm alive.");
});
///////////////////////// Snipe Command ////////////////////////////////////
const snipes = require("./snipe.json")
const snip = require("./snipes.js")

Client.on('messageDelete',async message => {
  const args = message.content.split(" ");
 const author = message.author.id;
 const time = message.createdAt;
  const icon = message.author.displayAvatarURL();
  snip.run(message,args,Client,author,time,icon) 
})
///////////////////////// Snipe Command ////////////////////////////////////



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`${eventName} loaded.`);
    Client.on(eventName, event.bind(null, Client));
  });
});

Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./commands/${file}`);
    let cmdFileName = file.split(".")[0];
    Client.commands.set(cmd.help.name, cmd);
    console.log(`${cmdFileName} is loaded.`);
    if (cmd.help.aliases) {
      cmd.help.aliases.forEach(alias => {
        Client.aliases.set(alias, cmd.help.name);
      });
    };
  });
});

Client.on("ready", () => {
  console.log(`${Client.user.tag} is online.`);
});

Client.login(settings.token)
