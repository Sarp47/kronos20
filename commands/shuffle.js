const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "karıştır",
    description: "Sırayı karıştırır",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["karıştır", "kar"],
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
        if (!player.queue || !player.queue.length || player.queue.length === 0) return client.sendTime(message.channel, "❌ | **Sırayı karıştırmak için yeterince şarkı yok!**");
        player.queue.shuffle();
        await client.sendTime(message.channel, "✅ | Sıra karıştırıldı!");
    }
};
