const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eðlence Komutlarý Özel Mesajlarda Kullanýlamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Dalgalara dikkat!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://www.google.com.tr/url?sa=i&source=images&cd=&ved=2ahUKEwjVhLPpiZDeAhWR_qQKHfpUAAMQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fsurf-surfing-gopro-3orif4tsbdtVDGxR72&psig=AOvVaw0JZPfU4qvtzBZopHRiOpRO&ust=1539955007276474`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'surf',
  description: 'Surf Yaparsýnýz.',
  usage: 'surf'
};
