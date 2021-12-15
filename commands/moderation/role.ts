// module.exports = {}

import { ICommand } from 'wokcommands'

const actions = ['give', 'remove', 'has']

export default {
  category: 'Moderacion',
  description: 'Da un rol a un usuario',

  permissions: ['MANAGE_ROLES'],

  minArgs: 3,
  expectedArgs: `<"${actions.join('", "')}"> <user @> <role @>`,

  slash: true,
  testOnly: true,
  guildOnly: true,

  options: [
    {
      name: 'action',
      description: `La acción a realizar. Uno de: ${actions.join(', ')}`,
      type: 'STRING',
      required: true,
      choices: actions.map((action) => ({
        name: action,
        value: action,
      })),
    },
    {
      name: 'user',
      description: 'El usuario para realizar la acción en',
      type: 'USER',
      required: true,
    },
    {
      name: 'role',
      description: 'El rol para realizar la acción en',
      type: 'ROLE',
      required: true,
    },
  ],

  callback: ({ guild, args }) => {
    const action = args.shift()
    if (!action || !actions.includes(action)) {
      return `¡Acción desconocida! Utilice uno de los siguientes: ${actions.join(
        ', '
      )}`
    }

    const memberId = args.shift()!.replace(/[<@!&>]/g, '')
    const roleId = args.shift()!.replace(/[<@!&>]/g, '')

    const member = guild!.members.cache.get(memberId)
    const role = guild!.roles.cache.get(roleId)

    if (!member) {
      return `No se pudo encontrar el ID del miembro ${memberId}`
    }

    if (!role) {
      return `No se ha podido encontrar el ID del rol ${roleId}`
    }

    if (action === 'has') {
      return member.roles.cache.has(roleId)
        ? 'El usuario tiene el rol'
        : 'La usuario no tiene el rol'
    }

    if (action === 'give') {
      member.roles.add(role)
      return 'Rol dado'
    }

    if (action === 'remove') {
      member.roles.remove(role)
      return 'Rol eliminado'
    }

    return 'Unknown action'
  },
} as ICommand
