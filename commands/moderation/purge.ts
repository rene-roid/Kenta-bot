// module.exports = {}

import { ICommand } from 'wokcommands'

export default {
  category: 'Moderacion',
  description: 'Borra una cantidad específica de mensajes.',

  permissions: ['ADMINISTRATOR'],
  // requireRoles: true,

  // minArgs: 1,
  maxArgs: 1,
  expectedArgs: '[amount]',

  slash: 'both',
  testOnly: true,

  callback: async ({ message, interaction, channel, args }) => {
    // const amount = parseInt(args.shift()!)
    const amount = args.length ? parseInt(args.shift()!) : 10

    if (message) {
      await message.delete()
    }

    // Bulk delete
    const { size } = await channel.bulkDelete(amount, true)

    const reply = `${size} mensajes borrados.`

    if (interaction) {
      return reply
    }

    channel.send(reply)
  },
} as ICommand
