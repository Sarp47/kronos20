const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kapat",
  description: "Şarkıyı kapatıp ayrılır",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["kapat", "ayrıl", "k", "dc"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **Bu komutu kullanmak için sesli bir kanalda olman lazım!**");
    if (!player) return client.sendTime(message.channel,"❌ | **Şu anda hiçbir şey çalmıyor...**");
    await client.sendTime(message.channel,":notes: | **Müzik kapatıldı sıra temizlendi.**");
    await message.react("✅");
    player.destroy();
  }
};
