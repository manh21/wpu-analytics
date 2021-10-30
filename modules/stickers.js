require('dotenv').config();
const Discord = require('discord.js');
const Fuse = require('fuse.js');
const data = require('../data/sticker.json');

const { embedError, getUserFromMention, checkRoles, deleteMsg, sendMsg} = require('./utility.js');

const Stickers = async (msg, client) => {
    const split = msg.content.split(/ +/);
    const command = split[0].toLowerCase();
    const args = split.slice(1);

    if(data[command]){
        const attachment = new Discord.MessageAttachment(data[command]);

        // Send the attachment in the message channel
        sendMsg(msg.channel, {files: [attachment]});
        deleteMsg(msg);
    }
}

module.exports = {
    Stickers
};