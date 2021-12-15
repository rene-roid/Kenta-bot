"use strict";
// module.exports = {}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Moderacion',
    description: 'Borra una cantidad específica de mensajes.',
    permissions: ['ADMINISTRATOR'],
    // requireRoles: true,
    // minArgs: 1,
    maxArgs: 1,
    expectedArgs: '[amount]',
    slash: 'both',
    testOnly: true,
    callback: ({ message, interaction, channel, args }) => __awaiter(void 0, void 0, void 0, function* () {
        // const amount = parseInt(args.shift()!)
        const amount = args.length ? parseInt(args.shift()) : 10;
        if (message) {
            yield message.delete();
        }
        // Bulk delete
        const { size } = yield channel.bulkDelete(amount, true);
        const reply = `${size} mensajes borrados.`;
        if (interaction) {
            return reply;
        }
        channel.send(reply);
    }),
};
