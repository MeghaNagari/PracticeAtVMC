var app = angular.module('myapp',[]);


//app.controller("piplController", function ($scope,$http,$q) {
    
//    $scope.keyword = '';
//    
//    $scope.isVisible = false;
//	 $scope.user = {
//		 id:""
//	 };
//	 var userid=$scope.user.id;
//	 
//	 $scope.getUser = function (userid) {
//		 var deferred=$q.defer();
//        $http.get('/users/'+userid)
//        .then(function(response) {
//        	console.log(response);
//        	deferred.resolve(response);
//            // this callback will be called asynchronously
//            // when the response is available
//          }, function errorCallback(response) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//          });
//    };
//});

app.controller('piplController', ['$scope','UserCRUDService', 
	  function ($scope,UserCRUDService) {
	$scope.isVisible = false;
	      $scope.getUser = function () {
	          var id = $scope.user.id;
	          $scope.isVisible = true;
	         var getdata = UserCRUDService.getUser(id);
	        
	            getdata.then(function success(response) {
	           alert("done");
	                $scope.user = response.data;
	                $scope.user.id = id;
	                $scope.message='';
	                $scope.errorMessage = '';
	            },
	            function error (response) {
	                $scope.message = '';
	                if (response.status === 404){
	                    $scope.errorMessage = 'User not found!';
	                }
	                else {
	                    $scope.errorMessage = "Error getting user!";
	                }
	            });
	      };
	}]);

//      
//      
//      $scope.deleteUser = function () {
//    	    UserCRUDService.deleteUser($scope.user.id)
//    	      .then (function success(response) {
//    	          $scope.message = 'User deleted!';
//    	          $scope.User = null;
//    	          $scope.errorMessage='';
//    	      },
//    	      function error(response) {
//    	          $scope.errorMessage = 'Error deleting user!';
//    	          $scope.message='';
//    	      });
//    	}
//
//      
////      $scope.updateUser = function () {
////    	    UserCRUDService.updateUser($scope.user.id, 
////    	      $scope.User.name, $scope.user.email)
////    	      .then(function success(response) {
////    	          $scope.message = 'User data updated!';
////    	          $scope.errorMessage = '';
////    	      },
////    	      function error(response) {
////    	          $scope.errorMessage = 'Error updating user!';
////    	          $scope.message = '';
////    	      });
////    	}
////      
////      
////      $scope.addUser = function () {
////    	    if ($scope.user != null && $scope.user.name) {
////    	        UserCRUDService.addUser($scope.user.name, $scope.user.email)
////    	          .then (function success(response){
////    	              $scope.message = 'User added!';
////    	              $scope.errorMessage = '';
////    	          },
////    	          function error(response){
////    	              $scope.errorMessage = 'Error adding user!';
////    	              $scope.message = '';
////    	        });
////    	    }
////    	    else {
////    	        $scope.errorMessage = 'Please enter a name!';
////    	        $scope.message = '';
////    	    }
////    	}
//      
//      
//      
//}]);
	
app.service('UserCRUDService', [ '$http', function($http) {
	 
    this.getUser = function getUser(userId) {
    	
      return $http({
            method : 'GET',
            url : '/users/' + userId
        });
    }
} ]);
//    
//    this.deleteUser = function deleteUser(id) {
//        return $http({
//            method : 'DELETE',
//            url : '/deleteUser/' + id
//        })
//    }
//    
////    this.updateUser = function updateUser(id, name, email) {
////        return $http({
////            method : 'PATCH',
////            url : 'users/' + id,
////            data : {
////                name : name,
////                email: email
////            }
////        });
////    }
////    
////    this.addUser = function addUser(name, email) {
////        return $http({
////            method : 'POST',
////            url : 'users',
////            data : {
////                name : name,
////                email: email
////            }
////        });
////    }
//    
//} ]);