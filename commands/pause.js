const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
    name: "dur",
    description: "Müziği durdurur",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["dur"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let player = await client.Manager.get(message.guild.id);
        if (!player) return client.sendTime(message.channel, "❌ | **Şu anda hiçbir şey çalmıyor...**");
        if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **Bu komutu kullanmak için sesli bir kanalda olman lazım!**");
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return client.sendTime(message.channel, ":x: | **Bu komutu kullanmak için benimle aynı sesli kanalda olman lazım!**");
        if (player.paused) return client.sendTime(message.channel, "❌ | **Müzik zaten durdurulmuş!**");
        player.pause(true);
        let embed = new MessageEmbed().setAuthor(`Durduruldu`, client.config.IconURL).setColor("RANDOM").setDescription(`\`${GuildDB.prefix}devam\` yazarak şarkıyı devam ettirebilirsin!`);
        await message.channel.send(embed);
        await message.react("✅");
    }
};
