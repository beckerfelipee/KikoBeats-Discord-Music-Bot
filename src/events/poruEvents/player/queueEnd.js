const { EmbedBuilder } = require("discord.js");
const Reconnect = require("../../../settings/models/247.js");

module.exports.run = async (client, player) => {
    const channel = client.channels.cache.get(player.textChannel);
    if (!channel) return;

    if (player.queue.length) return;

    if (player.message) await player.message.delete();

    const data = await Reconnect.findOne({ guild: player.guildId });

    if (data && Date.now() >= data.time) {
        await data.delete();
    }

    if (data) return;
    //

    await player.destroy();

    const embed = new EmbedBuilder()
        .setDescription(`\`👋\` | Disconnected...!!! Due to queue was empty.`)
        .setColor(client.color);

    return channel.send({ embeds: [embed] });
};
