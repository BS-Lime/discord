const coyote_noises= [
    "hababababa",
    "baaaaa",
    "bababawholesomebababab",
    "hawawawawa",
    "*in alber noise* AWeehhh ish me, da boi"
];

module.exports = function (message, onlyPayload) {
    const yote_index = Math.floor(Math.random() * (coyote_noises.length - 1) + 1);
    message.channel.send(coyote_noises[yote_index]);
    } 
