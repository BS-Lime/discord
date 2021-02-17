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
const help = require('./commands/help')

const activities_list = [
    "the howls of the dead and forgotten",
    "hunty's permanent cries for burger",
    "alber's wise words",
    "important people only"
]; // creates an arraylist containing phrases you want your bot to switch through.

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
  commandManager.addModule('ticket', ticketManager)




        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index], { type: 'LISTENING' }); // sets bot's activities to one of the phrases in the arraylist.
        }, 10000); // Runs this every 10 seconds.


  afkReply(client)
  checkUserWords(client)
  instaBan(client)
  voiceRole(client)
})

client.login(token)
