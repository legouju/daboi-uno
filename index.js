const client = new (require("discord.js").Client);
const { DiscordUNO } = require("discord-uno")
const { token } = require("./config.json")
const discordUNO = new DiscordUNO("YELLOW"); /** You can add an optional string to the class, 
                                    this string (color) will be the color for all embeds that 
                                    are sent. ie: new DiscordUNO("RED"), any Discord ColorResolvable
                                    will work. **/


client.on("ready", () => {
    console.log("ready");
});

const prefix = "u-";

client.on("message", async (message) => {

    var cmds = {
        "cmds": "current commands: -info -cmdns -ping -cointoss -8ball -insult -servers -advinfo",
         };
    
    if (message.content.startsWith(prefix)) {
      Object.keys(cmds).forEach(function(command) {
        if (message.content == `${prefix}${command}`) {
          message.channel.send(cmds[command]);
          return;
        }
      });
    }
    

    if (message.content.toLowerCase() === prefix + "creategame")
        await discordUNO.createGame(message);

    else if (message.content.toLowerCase() === prefix + "join")
        await discordUNO.addUser(message); 

    else if (message.content.toLowerCase() === prefix + "leave")
        await discordUNO.removeUser(message);

    else if (message.content.toLowerCase() === prefix + "u-hand")
        await discordUNO.viewCards(message);

    else if (message.content.toLowerCase() === prefix + "startgame")
        await discordUNO.startGame(message);

    else if (message.content.toLowerCase().startsWith(prefix + "play"))
        await discordUNO.playCard(message);

    else if (message.content.toLowerCase() === prefix + "closegame") 
        await discordUNO.closeGame(message);

    else if (message.content.toLowerCase() === prefix + "endgame") 
        await discordUNO.endGame(message);

    else if (message.content.toLowerCase() === prefix + "draw") 
        await discordUNO.draw(message);

    else if (message.content.toLowerCase() === prefix + "settings")
        await discordUNO.updateSettings(message);

    else if (message.content.toLowerCase() === prefix + "viewsettings")
        await discordUNO.viewSettings(message);
        
    else if (message.content.toLowerCase().startsWith(prefix + "uno"))
        await discordUNO.UNO(message);

    else if (message.content.toLowerCase() === prefix + "table") 
        await discordUNO.viewTable(message);

    else if (message.content.toLowerCase() === prefix + "checkversion")
        await discordUNO.version.updates(message);

});

client.login(token);