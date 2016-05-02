angular.module('App')
  .controller('HomeController', function($scope, $state, $localStorage, homeFactory) {
    var vm = this;
    $localStorage.$reset();
    vm.summoner = {
      region: $localStorage.summonerRegion || 'NA'
    };
    vm.regionList = homeFactory.getRegionList();

    vm.saveSummonerIGN = function() {
      homeFactory.saveSummonerIGN(vm.summoner, vm.regionList);
      vm.summoner.IGN = '';
      $state.go('summoner');
    }
  });
