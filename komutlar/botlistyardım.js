const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:815557092127539251> Botlist Yardım Komutları')
.setTimestamp()
.addField('<a:maviyildiz:815557092127539251> n.bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('<a:maviyildiz:815557092127539251> n.bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('<a:maviyildiz:815557092127539251> n.bot-ekle', 'Bot eklersiniz')
.addField('<a:maviyildiz:815557092127539251> n.botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setFooter('Narcos Code', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};