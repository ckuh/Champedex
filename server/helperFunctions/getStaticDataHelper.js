module.exports = {
  realm: function(riot, region, callback) {
    riot.staticData.realm(region, function(err, data) {
      if (err) {
        console.error(err);
        callback(JSON.parse(data).status);
      } else {
        callback(data);
      }
    });
  },
  info: function(riot, callback) {
    riot.staticData.champions({dataById:'true',champData:'blurb,info,tags'}, function(err, data) {
      if (err) {
        console.error(err);
        callback(JSON.parse(data).status);
      } else {
        callback(data);
      }
    });
  }
}
