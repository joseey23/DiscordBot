require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] }); //create new client

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require('./handlers/${handler}')(client, Discord)
})

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);