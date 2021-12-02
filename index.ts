import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES
  ],
})

client.on('ready', async () => {
  console.log('Kenta is online!')

  new WOKCommands(client, {
    typeScript: true,

    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    
    testServers: ['915253625960407100'],
    botOwners: ['450330964481146880'],

    mongoUri: process.env.MONGO_URI,
    dbOptions: { keepAlive: true },

    showWarns: true,
    delErrMsgCooldown: 10,

    ignoreBots: true,

    disabledDefaultCommands: [
      // 'help',
      // 'command',
      'language',
      // 'prefix',
      // 'requiredrole'
    ],

  })

  .setCategorySettings([
    {
      name: 'Moderacion',
      emoji: '💻',
      hidden: true
    },
    {
      name: 'Owner',
      emoji: '😎',
      hidden: true
    },
    {
      // You can change the default emojis as well
      // "Configuration" is ⚙ by default
      name: 'Configuracion',
      emoji: '🚧',
      // You can also hide a category from the help menu
      // Admins bypass this
      hidden: true
    },
    {
      name: 'Help',
      emoji: '❓',
      hidden: true
    }
  ])

  .setDefaultPrefix('?')
  .setColor(0x000000)
})

client.login(process.env.TOKEN)
