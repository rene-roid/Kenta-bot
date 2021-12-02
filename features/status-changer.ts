// module.exports = (client) => {}

import { Client } from 'discord.js'

export default (client: Client) => {
  const statusOptions = ['hello', 'world', 'test']
  let counter = 0

  const updateStatus = () => {
    client.user?.setPresence({
      activities: [
        {
          name: statusOptions[counter],
        },
      ],
    })

    if (++counter >= statusOptions.length) {
      counter = 0
    }

    setTimeout(updateStatus, 1000 * 60 * 2)
  }
  updateStatus()
}

export const config = {
  dbName: 'STATUS_CHANGER',
  displayName: 'Status Changer',
}

// module.exports.config = {}
