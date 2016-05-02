var models = require('../models/apiChamp.js');

module.exports = {
  getChampMastery: {
    get: function(req, res) {},
    post: function(req, res) {
      console.log('inside getChampMastery Controller ');
      models.getChampMastery.post(function(data) {
        res.status(200).send(data);
      }, req.body)
    }
  }
}
