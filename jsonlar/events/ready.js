const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('bot hazırlanıyo');
console.log('Bot hazır.');

    var Games = [

        `Lütfen botu al sunucuna !!!!`,

        `k.davet`,

        `k.yardım`,

       `k.düello komutu düzenlendi Yapımcı:★KaanLeX`

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/xxkaanlexx%22");
        }, 2 * 2500);

};