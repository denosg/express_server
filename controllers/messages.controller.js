const path = require('path');

function getMessages(req, res) {
    const filePath = path.join(__dirname, '..', 'public', 'images', '424285.jpg')
    res.sendFile(filePath);
    // res.send('Mesaje !')
}

function postMessage(req, res) {
    console.log(`Updating Messages`);
}

module.exports = {
    getMessages,
    postMessage
}