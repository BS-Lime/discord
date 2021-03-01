const getPrefix = require('../util/getPrefix')
const validDice = [4, 6, 8, 10, 12, 20, 100, 420]
const DEBUG = process.env.DEBUG || false

module.exports = function (message, onlyPayload) {
    let reply = ""
        let diceobj = parseNotation(onlyPayload)
    if (diceobj.failed) {
        getPrefix(message).then(prefix => {
            message.channel.send(`\`Sorry, i did not get that. Please use ${prefix}roll [d4, 2d6, d8,... ]\``)
        })
            if (DEBUG) { message.reply('Error code: ' + diceobj.errorcode) }
            return
        }
        for (let [dicevalue, count] of Object.entries(diceobj.counts)) {
            if (count < 1) {
                continue
            }
            let rolledValues = []
            for (i = 0; i < count; i++) {
                rolledValues.push(Math.ceil(Math.random() * dicevalue))
            }
            let valuesString = ""
            for (let value of rolledValues) {
                valuesString += "  `" + value + "`"
            }
            if (count == 1) {
                count = ""
            }
            reply += count + "d" + dicevalue + ":" + valuesString + "\n"
        }
    if (reply == "") {
        message.reply("There are no dice to roll! Please check your notation.")
        return
    }
    message.reply("\n" + reply)
    return
}


function parseNotation(notation) {
    var diceobj = {
        failed: false,
        errorcode: 0,
        counts: {
            "100": 0,
            "20": 0,
            "12": 0,
            "10": 0,
            "8": 0,
            "6": 0,
            "4": 0
        }
    }

    let notationSplit = notation.split(/[Dd]/)
    let numberOfDice = 1;

    if (notationSplit[0] != "") {
        if (isNaN(notationSplit[0]) || notationSplit[0] < 0) {
            diceobj.failed = true
            diceobj.errorcode = 1
            return diceobj
        }
        numberOfDice = parseInt(notationSplit[0])
    }

    if (isNaN(notationSplit[1])) {
        diceobj.failed = true
        diceobj.errorcode = 2
        return diceobj
    }

    if (validDice.includes(parseInt(notationSplit[1])) && notationSplit[1] != "") {
        diceobj.counts[notationSplit[1]] += numberOfDice
    } else {
        diceobj.failed = true
        diceobj.errorcode = 3
        return diceobj
    }

    return diceobj
}
