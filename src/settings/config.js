require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTIxNjQzODkyNDc5NzQxMTMzOA.GvdNhj.ojy6se0_ijyy3GQtwwvtxJ8eDLVCk4-xXYje3o", // <==== PASTE YOU TOKEN
    prefix: process.env.PREFIX || "f?", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
    color: process.env.EMBED_COLOR || "#c50632", // <==== YOU EMBEDED HEX COLOR
    owner: process.env.OWNER_ID || "434795654527713291", // <==== BOTS OWNER ID
    guildLogs: process.env.GUILD_LOGS || "761335625436889088", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "10000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
        clientID: process.env.SPOTIFY_ID || "2bf056dad36141e1ad71643e4a5fb576", // <==== SPOTIFY CLIENT ID
        clientSecret: process.env.SPOTIFY_SECRET || "e84c65966d074af3bf86cc9fcf9f2f3a", // <==== SPOTIFY CLIENT SECRET
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

    mongoUri: process.env.MONGO_URI || "mongodb+srv://beckerfelipee:GvvLUGGGlbFHtxl3@clusterkikobeats.0vwp3xp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterKikoBeats", // <==== YOUR MONGODB LINK
    supportUrl: process.env.SUPPORT_URL || "https://discord.com", // <==== YOUR SUPPORT SERVER LINK
    voteUrl: process.env.VOTE_URL || "https://discord.com", // <==== YOUR VOTE URL
    inviteUrl: process.env.INVITE_URL || "https://discord.com/oauth2/authorize?client_id=1216438924797411338&permissions=8&scope=bot+applications.commands", // <==== YOUR BOT INVITE LINK
    imageUrl: process.env.IMAGE_URL || "https://www.solidbackgrounds.com/images/800x600/800x600-air-force-dark-blue-solid-color-background.jpg", // <==== YOUR IMAGE LINK 
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
