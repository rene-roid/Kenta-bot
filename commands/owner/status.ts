// module.exports = {}

import { ICommand } from 'wokcommands'

const status = ['online', 'idle', 'dnd', 'invisible']

export default {
  category: 'Owner',
  description: 'Sets the bots status',

  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<status>',

  slash: true,
  testOnly: true,

  ownerOnly: true,

  options: [
    {
      name: 'status',
      description: `Set bot status to one of: ${status.join(', ')}`,
      type: 'STRING',
      required: true,
      choices: status.map((state) => ({
        name: state,
        value: state,
      })),
    },
  ],

  callback: ({ client, text, args, message, interaction }) => {
    const state = args.shift()

    if (!state || !status.includes(state)) {
      return `Unknown status! Please use one of the following: ${status.join(', ')}`
    }

    if (state === 'online') {
      client.user?.setPresence({
        status: 'online',
      })
    } else if (state === 'idle') {
      client.user?.setPresence({
        status: 'idle',
      })
    } else if (state === 'dnd') {
      client.user?.setPresence({
        status: 'dnd',
      })
    } else if (state === 'invisible') {
      client.user?.setPresence({
        status: 'invisible',
      })
    } else {
      client.user?.setPresence({
        status: 'online',
      })
    }

    return {
      custom: true,
      content: 'Status updated',
      ephemeral: true,
    }
  },
} as ICommand
