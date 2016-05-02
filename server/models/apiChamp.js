var getChampData = require('../helperFunctions/getChampDataHelper.js');
var getStaticData = require('../helperFunctions/getStaticDataHelper.js');
var riot = require('../config/config.js').riot;

module.exports = {
  getChampMastery: {
    get: function(callback, params) {},
    post: function(callback, params) {
      console.log('inside getChampMastery Models');
      getStaticData.info(riot, function(champData) {
        getChampData.mastery(riot, params, function(champMastery) {
          callback({
            champData: champData,
            champMastery: champMastery
          });
        })
      })
    }
  }
}
