const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "çalıyor",
  description: "Yazılan sırada çalan şarkıyı atar",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["çalıyor", "şuandaçalıyor", "şuanda çalıyor"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **Şu anda hiçbir şey çalmıyor...**"
      );

    let song = player.queue.current;
    let QueueEmbed = new MessageEmbed()
      .setAuthor("Şu anda çalıyor", client.config.IconURL)
      .setColor("RANDOM")
      .setDescription(`[${song.title}](${song.uri})`)
      .addField("İsteyen", `${song.requester}`, true)
      .addField(
        "Süre",
        `${
          client.ProgressBar(player.position, player.queue.current.duration, 15)
            .Bar
        } \`${prettyMilliseconds(player.position, {
          colonNotation: true,
        })} / ${prettyMilliseconds(player.queue.current.duration, {
          colonNotation: true,
        })}\``
      )
      .setThumbnail(player.queue.current.displayThumbnail());
    return message.channel.send(QueueEmbed);
  }
};
