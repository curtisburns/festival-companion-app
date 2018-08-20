function CarSharesNewCtrl($http, $scope, $state) {
  $scope.createCarShare = function() {
    $http({
      method: 'POST',
      url: `/api/festivals/${$state.params.festivals.id}/carShares`,
      data: $scope.carShare
    })
      .then(() => $state.go('carSharesShow'));
  };
}

export default CarSharesNewCtrl;
