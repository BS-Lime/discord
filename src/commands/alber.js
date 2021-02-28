const alber_quotes = [
    "hababababa",
    "yes i am a boy",
    "disgustang",
    "hewwoooooooooo"
];

module.exports = function (message, onlyPayload) {
    const alber_index = Math.floor(Math.random() * (alber_quotes.length - 1) + 1);
    message.channel.send('"' + alber_quotes[alber_index] + '" - Alber');
} 