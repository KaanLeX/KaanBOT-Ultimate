module.exports = member => {
  let guild = member.guild;
  member.send('niye çıkıyon amk oç!');
  guild.defaultChannel.sendMessage(`${member.user.username} isimli niye çıktın eğlenceyi kaçırdın`);
};
