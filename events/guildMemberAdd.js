module.exports = member => {
    let username = member.user.username;
    member.sendMessage('**Ho� geldin **' + username + '**!**');
    member.guild.defaultChannel.send(''+username+'�simli HG Sunucya!!!');
};
