const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using BoomBot? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('BoomBot','https://cdn.discordapp.com/attachments/608531899429814283/882241348672040990/raze_bot_disk.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Boombot to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=818450510343438336&permissions=8&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
