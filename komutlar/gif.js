const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/499291511184162816/505073686001483778/pattis.gif", "https://media.giphy.com/media/10sDMjEoL7cAOA/giphy.gif", "https://www.google.com.tr/search?q=2+d+komik+giflwe&source=lnms&tbm=isch&sa=X&ved=0ahUKEwicz_unlsDeAhUFhywKHQCbCVMQ_AUIDigB#imgdii=GZWfNr8ZQ6l7EM:&imgrc=vbdX8RcaAXj9JM:", "https://media.giphy.com/media/kRWFIgO75okHm/giphy.gif", "https://media.giphy.com/media/TlK63Er4gKHILXzNeA8/giphy.gif", "https://media.giphy.com/media/14smAwp2uHM3Di/giphy.gif", "https://media.giphy.com/media/VPtakcmZS6z5K/giphy.gif", "https://media.giphy.com/media/gdKAVlnm3bmKI/giphy.gif", "https://media.giphy.com/media/VgIums4vgV4iY/giphy.gif", "https://media.giphy.com/media/l4EoX23aHCEIVlcTm/giphy.gif", "https://media.giphy.com/media/xT39CTnUseDauWbrRS/giphy.gif", "https://media.giphy.com/media/roAfEu8tdNYe4/giphy.gif", "https://media.giphy.com/media/l4Ep6mu0EsZlneBs4/giphy.gif", "https://media.giphy.com/media/g9x6SOnpJ7Mxa/giphy.gif", "https://media.giphy.com/media/RptlNBj3wJMbu/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'gif',
  description: 'Rastgele gif atar.',
  usage: 'gif'
};
