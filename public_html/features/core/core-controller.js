
var mymodal = angular.module('mymodal',[]);

mymodal.controller('modelController', function ($scope,$modal) {
   
    $scope.toggleModal = function () {
        var modalInstance = $modal.open({
        templateUrl: 'features/contact/aboutus.html',
        scope: $scope,
        backdrop: 'static',
        resolve: {
            '$modalInstance': function () {
                return function () {
                    return modalInstance;
                };
            }
        }
    });
    modalInstance.result.then(function (response) {
        console.log(response)
        if (response === 'yes') {
          
        }
        if (response === 'no') {

        }
    }, function () {
        console.log(' cancel Modal dismissed at: ' + new Date());
    });
//       
    };
   
 
    


});



 