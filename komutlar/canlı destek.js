const Discord = require('discord.js')
 
 
exports.run = async(client, message, args) => {
 
 
const emoji1 = message.client.emojis.get('??');
const emoji2 = message.client.emojis.get('??');
const emoji3 = message.client.emojis.get('??');
const emoji4 = message.client.emojis.get('??');
const emoji5 = message.client.emojis.get('??');
const emoji6 = message.client.emojis.get('??');
const emoji7 = message.client.emojis.get('??');
      let isEnabled;
      message.reply("Sizinle Yetkilmiz Ilgilenecektir");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "504305757240426528";
      const embed = new Discord.RichEmbed()
        .addField('Uyari', `Canli Destek Cagrisi`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesaji**: ${mesaj}`)
        .setFooter("Canli Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('Destek cagrısına baglanmak icin `katil` yazınız. Iptal Etmek icin `kapat` yazınız.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katil') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('Internet GG.')
      if (reason === 'aborted') {
        message.reply('Cagrı reddedildi.')
        client.channels.get(destekKanal).send('Konusma Kapatilmistir.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('Destek Bekleniyor!')
        client.channels.get(destekKanal).send('Destek cagrisini kapatmak icin `kapat` yaziniz.')
        chan.send(`${message.author}`)
        chan.send('Cagriniz Gonderildi!')
        chan.send('En Yakin Zamanda Size Yardimci Olacagiz.')
        chan.send('Destek cagrısı kapatmak icin `kapat` yaziniz.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('Cagri Kapatildi.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('Cagri Karsi Taraftan kapatildi.')
              if (message.channel.id === destekKanal) chan.send('Cagri Karsi Taraftan kapatildi')
 
              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`?? **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`?? **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}
 
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'canlidestek',
  description: 'Canli Destek Tablebi Oluşturur.',
  usage: 'canlidestek'
};