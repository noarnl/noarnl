const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: :help");
    console.log("Connected");
});

bot.login("ODcyOTM0MDc5MjE2MTExNjc3.YQxFNg.LaSsgJo2PLit5khTqXkTJ0WGJmo");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
    }

    if (message.content === prefix + "tt"){
        message.channe("Création du bot le _05/08/2021_ à _22h00_");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.reply("_Ce bot à été fabbriqué par Noa_");
        console.log("Commande effectué");
    }
});
