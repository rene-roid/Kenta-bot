// module.exports = {}

import { TextChannel } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'Configuracion',
  description: 'Envia un mensaje con el bot.',

  permissions: ['ADMINISTRATOR'],

  minArgs: 2,
  expectedArgs: '<channel> <text>',
  expectedArgsTypes: ['CHANNEL', 'STRING'],

  slash: true,
  testOnly: true,
  guildOnly: true,

  callback: ({ message, interaction, args }) => {
    const channel = (
      message
        ? message.mentions.channels.first()
        : interaction.options.getChannel('channel')
    ) as TextChannel
    if (!channel || channel.type !== 'GUILD_TEXT') {
      return 'Porfavor especifica un canal.'
    }

    args.shift() // Remove the channel from the arguments array
    const text = args.join(' ')

    channel.send(text)

    if (interaction) {
      interaction.reply({
        content: 'Mensaje enviado!',
        ephemeral: true,
      })
    }
  },
} as ICommand
