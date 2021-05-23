const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "davet",
  description: "Beni sunucunuza eklemek için",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["davet", "inv", "invite",],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Kronos'u sunucuna davet et!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `Beni davet etmek için yandaki tuşa tıklayabilirsin! [Davet Et](https://discord.com/oauth2/authorize?client_id=${
          client.config.ClientID
        }&permissions=${
          client.config.Permissions
        }&scope=bot%20${client.config.Scopes.join("%20")}&redirect_url=${
          client.config.Website
        }${client.config.CallbackURL}&response_type=code)`
      );
    message.channel.send(embed);
  }
};
