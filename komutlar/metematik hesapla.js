const Discord = require('discord.js');
const up = require('useful-package');

exports.run = (client, message, args) => {
    let islem = args.slice(0).join(' ')
         if (!islem) return message.reply("Bir işlem yazmalısın!")

      try {
       let cevap = up.matematik(islem)
      message.channel.send(`**${islem} = ${cevap}**`)
   } catch (err) {
message.channel.send(err)
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belirtilen işlemin sonucunu verir.',
  usage: 'hesapla'
};