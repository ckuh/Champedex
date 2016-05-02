module.exports = {
  getSummonerInfo: function(riot, userName, callback) {
    riot.summoner.byName(userName, {}, function(err, data) {
      if (err) {
        console.error('+++line 5:', err);
        callback(err, JSON.parse(data).status);
      } else {
        callback(err, data[userName]);
      }
    });
  }
}
