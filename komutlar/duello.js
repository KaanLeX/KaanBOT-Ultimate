const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
        let opponent = message.mentions.users.first()
        if (!opponent) return message.reply("**Oynamak İstediğin Kişiyi __Etiketlemelisin !__**")
  
  if (opponent.bot) return message.reply('Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('Kendin ile düello atamazsın!');
                if (this.fighting.has(message.channel.id)) return message.reply('**__Kanal Başına Sadece Bir Düello Meydana Gelebilir !__**');
                this.fighting.add(message.channel.id);
                try {
                        if (!opponent.bot) {
                await message.channel.send(`${opponent}, **__Düello İsteği Geldi. Düello'yu Kabul Ediyormusun?__** (\`evet\` Veya \`hayır\` **__Olarak Cevap Veriniz.__**)`);
                                const verification = await verify(message.channel, opponent);
                                if (!verification) {
                                        this.fighting.delete(message.channel.id);
                                        return message.channel.send(`**Düello Kabul Edilmedi ,__Rakip Korkup Kaçtı !__**`);
                                }
                        }
                        let userHP = 500;
                        let oppoHP = 500;
                        let userTurn = false;
                        let guard = false;
                        const reset = (changeGuard = true) => {
                                userTurn = !userTurn;
                                if (changeGuard && guard) guard = false;
                        };
                        const dealDamage = damage => {
                                if (userTurn) oppoHP -= damage;
                                else userHP -= damage;
                        };
                        const forfeit = () => {
                                if (userTurn) userHP = 0;
                                else oppoHP = 0;
                        };
                        while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                                const user = userTurn ? message.author : opponent;
                                let choice;
                                if (!opponent.bot || (opponent.bot && userTurn)) {
                                        await message.channel.send(stripIndents`
                                                ${user}, **__Ne Yapmak İstersin ?__** \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
                                                **${message.author.username}**: ${userHP} :heartpulse:
                                                **${opponent.username}**: ${oppoHP} :heartpulse:
                                        `);
                                        const filter = res =>
                                                res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
                                        const turn = await message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 30000
                                        });
                                        if (!turn.size) {
                                                await message.reply(`**__Üzgünüm Ama Süre Doldu !__**`);
                                                reset();
                                                continue;
                                        }
                                        choice = turn.first().content.toLowerCase();
                                } else {
                                        const choices = ['saldır', 'savun', 'ultra güç'];
                                        choice = choices[Math.floor(Math.random() * choices.length)];
                                }
                                if (choice === 'saldır') {
                                        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                        await message.channel.send(`${user}, **__[${damage}]__ hasar Vurdu !**`);
                                        dealDamage(damage);
                                        reset();
                                } else if (choice === 'savun') {
                                        await message.channel.send(`${user}, **__Kendisini Süper Kalkan İle Savundu !__**`);
                                        guard = true;
                                        reset(false);
                                } else if (choice === 'ultra güç') {
                                        const miss = Math.floor(Math.random() * 4);
                                        if (!miss) {
                                                const damage = randomRange(100, guard ? 150 : 300);
                                                await message.channel.send(`${user}, **Çoook Uzak Galaksilerden Gelen Ultra Sonik Enerjiyi Yeterki Miktarda Topladın Ve __[${damage}]__ hasar vurdun !**`);
                                                dealDamage(damage);
                                        } else {
                                                await message.channel.send(`${user}, **__Çoook Uzak Galaksilerden Gelen Ultra Sonik Enerjiyi Yeterki Miktarda Toplayamadığın İçin Ulta Güç Kullanamadın !__**`);
                                        }
                                        reset();
                                } else if (choice === 'kaç') {
                                        await message.channel.send(`${user}, **__Savaştan Kaçtı ! Korkağın Tekiymiş !__**`);
                                        forfeit();
                                        break;
                                } else {
                                        await message.reply('**__Ne Yapmaya Çalışıyorsun ?__**');
                                }
                        }
                        this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
                        return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
                } catch (err) {
                        this.fighting.delete(message.channel.id);
                        throw err;
                }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};