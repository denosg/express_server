function getMessages(req, res) {
    res.send('Mesaje !')
}

function postMessage(req, res) {
    console.log(`Updating Messages`);
}

module.exports = {
    getMessages,
    postMessage
}