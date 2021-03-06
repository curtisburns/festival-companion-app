const Festival = require('../models/festival');

function festivalsIndex(req, res, next) {
  Festival
    .find()
    .populate('attendees')
    .then(festivals => res.json(festivals))
    .catch(next);
}

function festivalsShow(req, res, next) {
  Festival
    .findById(req.params.id)
    .populate('attendees')
    .then(festival => res.json(festival))
    .catch(next);
}


function festivalsCreate(req, res, next) {
  Festival
    .create(req.body)
    .then(festival => res.status(201).json(festival))
    .catch(next);
}

// function festivalsUpdate(req, res) {
//   Festival
//     .findById(req.params.id)
//     .then(festival => {
//       if(!festival) return res.status(401).json({ message: 'No festival found'});
//
//       for(const field in req.body) {
//         festival[field] = req.body[field];
//       }
//
//       return festival.save();
//     })
//     .then(festival => res.json(festival))
//     .catch(() => res.status(500).json({ message: 'Something went wrong'}));
// }

function festivalsUpdate(req, res, next) {
  Festival
    .findById(req.params.id)
    .then(festival => festival.set(req.body))
    .then(festival => festival.save())
    .then(festival => res.json(festival))
    .catch(next);
}


function festivalsDelete(req, res, next) {
  // getTokenFromHttpRequest(req);
  // const festivalId = req.params.id;
  Festival
    .findById(req.params.id)
    .then(festival => festival.remove())
    // .then(() => User.findById(userId))
    // .then((user) => {
    //   user.festivalsOrganised = user.festivalsOrganised.filter(festival =>
    //     festival.toString() !== festivalId);
    //   return user.save();
    // })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: festivalsIndex,
  show: festivalsShow,
  create: festivalsCreate,
  update: festivalsUpdate,
  delete: festivalsDelete
};
