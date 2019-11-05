const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NjMwNzk3NTY1NTcwNTgwNDgx.XZtiIQ.P4PRY5grlrKZBwSU_2mEq3igjm0');

let fs = require('fs');

let prefix = "!";

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

});

bot.on('message', msg => {

  if(msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.split(' ');
  let command = msg.content.toLowerCase().split(' ')[0];
  command = command.slice(prefix.length)

  switch(command) { 

    case 'send' : {
      if (!args[1]) return msg.channel.send('Введите сообщение, которое хотите отправить!');
      
      msg.delete();
      msg.channel.send(msg.content.replace(`${prefix}${command}`, ''));
    }
    case 'clear' : {

      let amt = args[1];

      if (!amt) return msg.channel.send('Укажите сколько хотите удалить сообщений!');
    } 
  }

});

bot.on('guildMemberAdd', member => {

  member.addRole("Unturned");

  member.guild.channels.get('630797184358416424').send({ embed: {
      color: 4832585,
      author: {
        name: member.user.username,
        icon_url: member.user.avatarURL
      },
      title: "Подключение к серверу",
      description: `${member.user.username} прибыл на сервер. Добро пожаловать!`
    }
  })
});

bot.on('guildMemberRemove', member => {
  member.guild.channels.get('630797184358416424').send({ embed: {
    color: 12320768,
    author: {
      name: member.user.username,
      icon_url: member.user.avatarURL
    },
    title: "Отключение от сервера",
    description: `${member.user.username} покинул сервер.`
  }
})
});


bot.on('messageUpdate', (oldmsg, newmsg) => {

  let authorMsg = oldmsg.author;

  bot.channels.get('632219030211788820').send({embed: {
    
    color: 16751616,
    author: {
      name: "Изменение сообщения",
    },

    timestamp: new Date(),
    footer: {
      icon_url: authorMsg.avatarURL,
      text: `${authorMsg.username} | ${authorMsg.id}`,
    },

    fields: [
    {
      name: "Старое сообщение:",
      value: `${oldmsg.content}`,
      inline: true, 
    },
    {
      name: "Новое сообщение:",
      value: `${newmsg.content}`,
      inline: true,
    },
    {
      name: "Канал:",
      value: `#${oldmsg.channel.name}`,
      inline: true,
    }
  ]

  }});
});

bot.on('messageDelete', (msg) => {

  let authorMsg = msg.author;
  
  bot.channels.get('632219030211788820').send({embed: {
    
    color: 16751616,
    author: {
      name: "Удаление сообщения",
    },

    timestamp: new Date(),
    footer: {
      icon_url: authorMsg.avatarURL,
      text: `${authorMsg.username} | ${authorMsg.id}`
    },

    fields: [{
      name: "Сообщение:",
      value: `${msg.content}`,
      inline: true,
    },
    {
      name: "Канал:",
      value: `#${msg.channel.name}`,
      inline: true,
    }
  ]

  }});
});
