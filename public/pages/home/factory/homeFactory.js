angular.module('homeFactory', [])
  .factory('homeFactory', function($state, $localStorage) {

    var service = {
      saveSummonerIGN: saveSummonerIGN,
      getRegionList: getRegionList
    }
    return service;

    function saveSummonerIGN(summoner, regionList) {
      $localStorage.summonerIGN = summoner.IGN;
      $localStorage.summonerRegion = regionList[summoner.region].region;
    }

    function getRegionList() {
      return {
        'NA': {
          region: 'na',
          platId: 'NA1'
        },
        'BR': {
          region: 'br',
          platId: 'BR1'
        },
        'EUNE': {
          region: 'eune',
          platId: 'EUN1'
        },
        'EUW': {
          region: 'euw',
          platId: 'EUW1'
        },
        'KR': {
          region: 'kr',
          platId: 'KR1'
        },
        'LAN': {
          region: 'lan',
          platId: 'LA1'
        },
        'LAS': {
          region: 'las',
          platId: 'LA1'
        },
        'OCE': {
          region: 'oce',
          platId: 'OC1'
        },
        'RU': {
          region: 'ru',
          platId: 'RU1'
        },
        'TR': {
          region: 'tr',
          platId: 'TR1'
        }
      };
    }
  })
