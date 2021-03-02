const printHelp = require('../util/printHelp')
const getPrefix = require('../util/getPrefix')

module.exports = (message) => {
    getPrefix(message).then((prefix) => {
        printHelp(message.channel, prefix, [
            { name: 'afk', description: 'Toggle afk mode - this will inform anyone mentioning you that you are away' },
            { name: 'lego', params: '<official setId>', description: 'will pull the link to this set from brickset.com' },
            { name: 'alber', description: 'will give you a random alber quote' },
            { name: 'yote', description: 'makes random coyote noises' }
            { name: 'roll', params:'<d4, d6, d8, d10, d12, d20, d100, d420>', description: 'Rolls a dice. Stuff like 2d4 works as well' }
            //{ name: 'setPrefix', params: 'newPrefix', description: 'bind the bot to this new prefix' },
            //{ name: 'muteUserWord', params: '<user> <word>', description: 'prevent that user from saying that word (case sensitive)' },
            //{ name: 'unmuteUserWord', params: '<user>', description: 'clear all mute words for that user' },
            //{ name: 'deleteImages', params: '<number>', description: 'delete the last <number> images and embeds in this channel' },
            //{ name: 'banName', params: '<name>', description: 'ban users with that name instantly on join (exact match)' },
            //{ name: 'unbanName', params: '<name>', description: 'remove autoban for that name' },
            //{ name: 'addVoiceRole', params: '<channel> <role>', description: 'add an association between a voice channel and a role. Users get that role for the stay in that channel.' },
            //{ name: 'removeVoiceRoles', params: '<channel>', description: 'remove that association' },
            //{ name: 'ticket', params: '<command>', description: `interact with tickets - type \`${prefix}ticket\` for more info` }
        ])
    })
}