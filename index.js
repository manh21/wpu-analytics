require('dotenv').config();
const TOKEN = process.env.TOKEN;
const { Client, Intents, Sticker } = require('discord.js');

const { Public } = require("./modules/public.js");
const { Analytics } = require("./modules/analytics.js");
const { Stickers } = require("./modules/stickers.js");
const { embedLog, embedMsg, sendMsg, deleteMsg } = require("./modules/utility.js");
const { PrismaClient }= require("@prisma/client");

const main = () => {
    const myIntents = new Intents();
    myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS);

    const client = new Client({ intents: myIntents});
    const prisma = new PrismaClient();

    client.on('ready', () => {
        console.info(`Logged in as ${client.user.tag}!`);
        console.info('Bot is ready!');
    });

    client.on('message', msg => {
        // Public Scope Command
        Public(msg, client);

        Analytics(msg, client, prisma);
        
        Stickers(msg, client);
    });

    client.login(TOKEN);
};

main();