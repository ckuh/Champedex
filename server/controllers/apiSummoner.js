var models = require('../models/apiSummoner.js');

module.exports = {
  getSummoner: {
    get: function(req, res) {},
    post: function(req, res) {
      console.log('inside getSummoner Controller ');
      models.getSummoner.post(function(data) {
        res.status(200).send(data);
      }, req.body)
    }
  }
}
