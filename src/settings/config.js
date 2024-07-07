require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "", 
    prefix: process.env.PREFIX || "f?",
    color: process.env.EMBED_COLOR || "#c50632",
    owner: process.env.OWNER_ID || "",
    guildLogs: process.env.GUILD_LOGS || "", // 
    leaveTimeout: process.env.LEAVE_TIMEOUT || "10000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
        clientID: process.env.SPOTIFY_ID || "", // 
        clientSecret: process.env.SPOTIFY_SECRET || "", // 
        reconnectTries: 2, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
        playlistLimit: 2, // <==== 1 = 100 TRACKS
        albumLimit: 1, // <==== 1 = 50 TRACKS
        artistLimit: 1, // <==== 1 = 50 TRACKS
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME2 || "Node 1",
            host: process.env.NODE_HOST2 || "lava.link",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "kronix",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 2",
            host: process.env.NODE_HOST2 || "lavalink.ddns.net",
            port: parseInt(process.env.NODE_PORT2 || "2433"),
            password: process.env.NODE_PASSWORD2 || "discord.gg/FqEQtEtUc9",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 3",
            host: process.env.NODE_HOST2 || "lavalink-v3.oryzen.xyz",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "oryzen.xyz",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 4",
            host: process.env.NODE_HOST2 || "lavalink.devamop.in",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "DevamOP",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 5",
            host: process.env.NODE_HOST2 || "lava-v3.ajieblogs.eu.org",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "https://dsc.gg/ajidevserver",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 6",
            host: process.env.NODE_HOST2 || "lavalink.api.timelessnesses.me",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "youshallnotpass",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 7",
            host: process.env.NODE_HOST2 || "lavalink.lexnet.cc",
            port: parseInt(process.env.NODE_PORT2 || "2333"),
            password: process.env.NODE_PASSWORD2 || "lexn3tl@val!nk",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 8",
            host: process.env.NODE_HOST2 || "eu-lavalink.lexnet.cc",
            port: parseInt(process.env.NODE_PORT2 || "2333"),
            password: process.env.NODE_PASSWORD2 || "lexn3tl@val!nk",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 9",
            host: process.env.NODE_HOST2 || "lavalink3.alfari.id",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "catfein",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 10",
            host: process.env.NODE_HOST2 || "lavalink3-frankfurt.alfari.id",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "catfein",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["frankfurt"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 11",
            host: process.env.NODE_HOST2 || "lavalink3-netherlands.alfari.id",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "catfein",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["netherlands"],
        },
        {
            name: process.env.NODE_NAME2 || "Node 12",
            host: process.env.NODE_HOST2 || "lavalink3-dbh.alfari.id",
            port: parseInt(process.env.NODE_PORT2 || "80"),
            password: process.env.NODE_PASSWORD2 || "catfein",
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"),
            regions: process.env.NODE_REGIONS2 || ["singapore"],
        },
    ],

    mongoUri: process.env.MONGO_URI || "", 
    supportUrl: process.env.SUPPORT_URL || "", 
    voteUrl: process.env.VOTE_URL || "",
    inviteUrl: process.env.INVITE_URL || "", 
    imageUrl: process.env.IMAGE_URL || "", 
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
