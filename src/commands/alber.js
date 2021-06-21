const alber_quotes = [
    "hababababa",
    "yes i am a boy",
    "disgustang",
    "it would be much easier if i wasn't inside the mouth",
    "I'm a big, stinky, dumb dumb",
    "im resting my hand",
    "NOwO",
    "Am I your burger daddy",
    "I'd bite a child",
    "hewwoooooooooo"
];

module.exports = function (message, onlyPayload) {
    const alber_index = Math.floor(Math.random() * (alber_quotes.length - 1) + 1);
    message.channel.send('"' + alber_quotes[alber_index] + '" - Alber');
} 