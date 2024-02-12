const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        car: "Porsche GT3 RS 5.0"
    })
}

function postMessage(req, res) {
    console.log(`Updating Messages`);
}

module.exports = {
    getMessages,
    postMessage
}