const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("Bot Hakkında")
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription(`**BOT Ping** >${client.ping}`)
  .setFooter(`${message.author.username} tarafından istendi.`, `${message.author.avatarURL}`)
  .setThumbnail("https://media.giphy.com/media/ZgVUpYDKlQg5IZqKUf/giphy.gif")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField("Api Hakkında", `**API Ping** >${client.pings}`, true)
  .addBlankField(true)

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping'
};
