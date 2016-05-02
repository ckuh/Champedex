module.exports = {
  mastery: function(riot, params, callback) {
    riot.championMastery.all(params.platId, params.playerId, {}, function(err, data) {
      if (err) {
        console.error(err);
        callback(JSON.parse(data).status);
      } else {
        callback(data);
      }
    });
  }
}
