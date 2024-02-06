function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Name does not exist'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(newFriend)
    res.json(newFriend)
}

function getFriend(req, res) {
    const id = Number(req.params.id);
    const friend = friends[id];
    if (!friend) {
        return res.status(404).json({
            error: "Friend does not exist"
        });
    }
    res.json(friend);
}

function getFriends(req, res) {
    res.json(friends)
}

module.exports = {
    postFriend,
    getFriend,
    getFriends
}