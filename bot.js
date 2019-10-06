const Discord = require('discord.js');
const bot = new Discord.Client();
const bot_user = new Discord.ClientUser();

let prefix = "!";

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

  bot.user.setPresence({
    game: {
      name: 'разработку проекта',
      type: 3
    }, status : "123"
  });

});

bot.on('message', msg => {

  const args = msg.content.slice(prefix.length).split(' ');

  if(msg.author == bot.user){
    return
  }



  switch(args[0])
  {
    case ('ping'): {
      bot.guilds.first().channels.first().send("Pong");
    }
    case ('send'): {
      if(!args[1]) return msg.channel.send('Введите сообщение, которое хотите отправить.');
      msg.channel.send(args[1]);
    }
  }



});

bot.on('messageReactionAdd', (msgReact, user) => {
  bot_user.sendMessage
});

bot.login(process.env.BOT_TOKEN);
