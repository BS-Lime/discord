const Sequelize = require('sequelize'),
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: '../database.sqlite3'
    })
const Discord = require('discord.js'),
    client = new Discord.Client()
const token = require('../secrets/token')
const CommandManager = require('./commandManager')
const talkBack = require('./commands/talkBack')
const lego = require('./commands/lego')
const afk = require('./commands/afk')
const muteUserWord = require('./commands/muteUserWord')
const unmuteUserWord = require('./commands/unmuteUserWord')
const banName = require('./commands/banName')
const unbanName = require('./commands/unbanName')
const deleteImages = require('./commands/deleteImages')
const addVoiceRole = require('./commands/addVoiceRole')
const removeVoiceRoles = require('./commands/removeVoiceRoles')
const afkReply = require('./afkReply')
const checkUserWords = require('./checkUserWords')
const instaBan = require('./instaBan')
const voiceRole = require('./voiceRole')
const ticketManager = require('./modules/tickets/ticketManager')
const yote = require('./commands/yote')
const alber = require('./commands/alber')
const roll = require('./commands/roll')
const help = require('./commands/help')

const activities_list = [
    "the howls of the dead and forgotten",
    "hunty's permanent cries for burger",
    "alber's wise words",
    "important people only",
    "wrap",
    "bad advice",
    "an echo chamber",
    "vsauce music"
];

sequelize
    .authenticate()
    .then(() => {
        console.log('Database Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    const commandManager = new CommandManager(client)
    commandManager.addCommand('talkBack', talkBack)
    commandManager.addCommand('lego', lego)
    commandManager.addCommand('afk', afk)
    commandManager.addCommand('help', help)
    commandManager.addCommand('muteUserWord', muteUserWord)
    commandManager.addCommand('unmuteUserWord', unmuteUserWord)
    commandManager.addCommand('deleteImages', deleteImages)
    commandManager.addCommand('banName', banName)
    commandManager.addCommand('unbanName', unbanName)
    commandManager.addCommand('addVoiceRole', addVoiceRole)
    commandManager.addCommand('removeVoiceRoles', removeVoiceRoles)
    commandManager.addCommand('yote', yote)
    commandManager.addCommand('alber', alber)
    commandManager.addCommand('roll', roll)
    commandManager.addModule('ticket', ticketManager)




    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: 'LISTENING' });
        console.log('Set status to: Listening to ' + activities_list[index])
    }, 300000);

    afkReply(client)
    checkUserWords(client)
    instaBan(client)
    voiceRole(client)
})

client.login(token)
