module.exports = member => {
  let guild = member.guild;
  member.send('Niye ��k�yon Gerzek mal');
  guild.defaultChannel.send(`${member.user.username} isimli ki�i Hainlik D�zenledi Ve ��kt�!! :sob: :sob:`);
};
