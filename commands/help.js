const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  description: "Bot hakkında bilgi",
  usage: "[komut]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["yardım", "y", "komutlar"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
            .setAuthor(
              `${client.user.username}'un komutlar `,
              client.config.IconURL
            )
            .setColor("RANDOM")
            .setFooter(
              `Belirli bir komut hakkında bilgi almak için ${
                GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
              }yardım [komut] | İyi günler!`
            ).setDescription(`${Commands.join("\n")}
  
  Kronos Sürümü: v${require("../package.json").version}
  [✨ Destek sunucusu](${
    client.config.SupportServer
  }) | Yapımcı [BagetEkmek]`);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(message.channel, `❌ | Belirttiğiniz komut bulunamadı.`);

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.config.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Takma adları", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Kullanımı",
          `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Yetkiler",
          "Üye: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  }
};
