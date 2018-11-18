const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**KaanBOT Ultimate Adlı Botun Sahibi**")
        .setColor(0x00AE86)
        .addField("Adı :", "★KaanLeX", true)
        .addField("Soyadı :", "Lex", true)
        .addField("Yaşı :", "16", true)
        
   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sahip', 
  description: 'Botun sahibi hakkında bilgi verir.',
  usage: 'sahip'
};
