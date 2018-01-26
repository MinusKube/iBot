const System = require("./utils/System");
const client = System.init();
const token = "NDA2MjI5NzI1MzQ2NzkxNDQ2.DUwKiQ.fWj3kTPIV6BWvDbof9yo4o75Owk";

/*
    Constants
*/
const Fun = require("./commands/Fun");
const Avatar = require("./commands/Avatar");
const Doc = require("./commands/Doc");
const MemberAdd = require("./commands/MemberAdd");

client.on('ready', () => {
    console.log("logged as: " + client.user.username);
    client.user.setGame(`iHelp ${client.guilds.size} servers !`);
    client.user.setUsername("iBot");
});

client.on('guildMemberAdd', (user) => {
    MemberAdd.ext(user);
    user.send("Hey ! Welcome to **" + user.guild.name + "** Discord Server ! My name is **iBot** i'm here to help you ;)");
});


client.on("message", (message) => {
    Fun.execute(message);
    Avatar.execute(message);
    Doc.execute(message);
})

client.login(token);