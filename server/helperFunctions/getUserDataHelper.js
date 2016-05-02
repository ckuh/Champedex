var getSummonerInfo = require('../getSummonerInfoHelper.js')

module.exports = {
  summonerName: function(riot, userName, callback) {
    getSummonerInfo(riot, userName, function(err, summonerInfo) {
      if (err) {
        console.error('+++line 7:', err);
        callback(summonerInfo);
      } else {
        callback(summonerInfo);
      }
    })
  }
}
