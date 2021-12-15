"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const wokcommands_1 = __importDefault(require("wokcommands"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_PRESENCES
    ],
});
client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Kenta is online!');
    new wokcommands_1.default(client, {
        // typeScript: true,
        commandsDir: path_1.default.join(__dirname, 'commands'),
        featuresDir: path_1.default.join(__dirname, 'features'),
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
        .setColor(0x000000);
}));
 client.login(process.env.TOKEN)
// client.login(process.env.BOT_TOKEN);
