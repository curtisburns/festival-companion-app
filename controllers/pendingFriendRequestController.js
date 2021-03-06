const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
let token;
let userId;


function getTokenFromHttpRequest(req) {
  token = req.headers.authorization.replace('Bearer ', '');
  function retrieveUserIdFromToken(err, result) {
    userId = result.sub;
  }
  jwt.verify(token, secret, retrieveUserIdFromToken);
}

//Shows your pending friend requests
function pendingFriendsIndex(req, res, next) {
  getTokenFromHttpRequest(req);
  User
    .findById(userId)
    .populate('pendingFriends')
    .then(user => res.json(user))
    .catch(next);
}
function pendingFriendsCreate(req, res, next) {

  const friendId = req.params.friendId;
  User
    .findById(userId)
    .then(user => {
      user.pendingFriends = user.pendingFriends.filter(pendingFriend =>
        pendingFriend.toString() !== friendId
      );
      user.userFriends.push(friendId);
      return user.save();
    })
    .then(() => User.findById(friendId)) //This bit needs testing
    .then((friend) => res.json(friend))
    .catch(next);
}

// rejects the friend request and deletes from requester's friend list pending
// may not need this //
function pendingFriendsDelete(req, res, next) {
  getTokenFromHttpRequest(req);
  const friendId = req.params.friendId;
  User
    .findById(userId)
    .then(user => {
      user.pendingFriends = user.pendingFriends.filter(friend =>
        friend.toString() !== friendId);
      return user.save();
    })
    .then(() => User.findById(friendId))
    .then(friend => {
      friend.userFriends = friend.userFriends.filter(id =>
        id.toString() !== userId);
      return friend.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: pendingFriendsIndex,
  delete: pendingFriendsDelete,
  create: pendingFriendsCreate
};
