const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var espriler = ['Sazan Tuttun! :fish:' ,'Köpek Balığı Tuttun İyi Para Eder Sat Sat :D' ,'Hamsi Tuttun! :fish:' ,'Alabalık Tuttun! Etide Çokmuş hee ;) :fish:' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Deniz Atı Tuttun! Vaay Bee İyi Balıkçıymışsın :fish:' ,'Levrek Tuttun! :fish:' ,'Hiçbirşey Tutamadın Maalesef! :wastebasket:' ,'Woow Bir Balina Tuttun! Bana Sat Bana :D :fish:' ,'Maalesef Balık Oltadan Kaçtı! :wastebasket:' ,'Palamut Tuttun! :fish:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balıktut', 'baliktut', 'balık tut', 'balik tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};