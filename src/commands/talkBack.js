const getPrefix = require('../util/getPrefix')
const checkPerm = require('../util/checkPerm')

module.exports = function (message, onlyPayload) {
    if (!checkPerm(message, 'ADMINISTRATOR') || message.author.bot) {
        return
    }

  if (onlyPayload === '') {
    getPrefix(message).then(prefix => message.channel.send(`\`${prefix}talkBack <message>\``))
  } else {
    message.channel.send(onlyPayload)
  }
} 
