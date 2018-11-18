const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} **sigarasına başladı!!**`,
            image: {
                url: "https://3.bp.blogspot.com/-I4N9ZntdO1c/VEWKeHPHNjI/AAAAAAAACLg/jqcqZMKcYkQ/s1600/zedfg.gif"
            }
        }
    });

    let bitiş = (Math.random() * (99 - 5 +2)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, *her taraf duman oldu sonunda bitti sigaran**. \n[ *Sigara içmeyin* ]**`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sigarayak', 
  description: 'sigara içersiniz!',
  usage: 'sigarayak'
};
