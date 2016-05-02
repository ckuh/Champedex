var getSummonerInfo = require('../helperFunctions/getSummonerInfoHelper.js').getSummonerInfo;
var setUserName = require('../helperFunctions/setUserNameHelper.js').setUserName;
var riot = require('../config/config.js').riot;

module.exports = {
  getSummoner: {
    get: function(callback, params) {},
    post: function(callback, params) {
      console.log('inside getSummoner Models');
      riot.settings = {
        region: params.region
      }
      getSummonerInfo(riot, setUserName(params.name), function(err, summonerInfo) {
        if (err) {
          console.error('+++line 16:', err);
          callback(err, JSON.parse(data).status);
        } else {
          callback(summonerInfo);
        }
      })
    },
  }
}
