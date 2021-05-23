const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

  module.exports = {
    name: "kaldır",
    description: `Sıradan bir şarkı kaldırmaya yarar`,
    usage: "[sayı]",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: ["kaldır", "k"],

    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.players.get(message.guild.id);
    const song = player.queue.slice(args[0] - 1, 1); 
    if (!player) return client.sendTime(message.channel, "❌ | **Şu anda hiçbir şey çalmıyor**");
    if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **Bu komutu kullanmak için sesli bir kanalda olman lazım!**");
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return client.sendTime(message.channel, ":x: | **Bu komutu kullanmak için benimle aynı sesli kanalda olman lazım!**");
        
    if (!player.queue || !player.queue.length || player.queue.length === 0)
      return message.channel.send("Sırada kaldırılabilecek hiçbir şey yok");
    let rm = new MessageEmbed()
      .setDescription(`✅ **| \`${Number(args[0])}\` sıradan kaldırıldı**!`)
      .setColor("GREEN")
      if (isNaN(args[0]))rm.setDescription(`**Kullanımı - **${client.config.prefix}\`kaldır [sayı]\``);
      if (args[0] > player.queue.length)
      rm.setDescription(`Bu listede sadece **${player.queue.length}** şarkı var!`);
    await message.channel.send(rm);
    player.queue.remove(Number(args[0]) - 1);
  }
};