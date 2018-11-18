module.exports = member => {
  let guild = member.guild;
  member.send('Niye çýkýyon Gerzek mal');
  guild.defaultChannel.send(`${member.user.username} isimli kiþi Hainlik Düzenledi Ve Çýktý!! :sob: :sob:`);
};
