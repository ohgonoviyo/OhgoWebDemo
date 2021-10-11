var app = angular.module('myApp', []);

var UserDetails = new Array();

app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
      url : "http://ohgoin-env.eba-qbuydnu9.us-east-2.elasticbeanstalk.com/getUserDetails?mobileNumber=9037400118"
  }).then(function mySuccess(response) {
      console.log(response.data)
      UserDetails = response.data;
      console.log("userId",response.data.id);
      $scope.userId = response.data.id;
      $scope.userName = response.data.userName;
      $scope.userMobile = response.data.mobileNumber;
      $scope.userGender = response.data.userGender;
      $scope.userBio = response.data.userBio;
      $scope.userCategory = response.data.shopCategeory;
      $scope.userShopName = response.data.shopName;
      $scope.userShopExp = response.data.shopExpiry;
      $scope.userShopAmount = response.data.paymentAmount;

      
    //   $scope.userId= UserDetails[0].userId;
    //   $scope.userName= UserDetails[0].userId;
    //   $scope.userId= UserDetails[0].userId;
    //   $scope.userId= UserDetails[0].userId;
    //   $scope.userId= UserDetails[0].userId;
    //   $scope.userId= UserDetails[0].userId;
    //   $scope.userId= UserDetails[0].userId;
    //   $scope.userId= UserDetails[0].userId;
  }, function myError(response) {
    allData = response.statusText;
  });
     
//   $http({
//     method : "GET",
//       url : "http://ohgoin-env.eba-qbuydnu9.us-east-2.elasticbeanstalk.com/getProductsByUser?userId=15495"
//   }).then(function mySuccess(response) {
//       console.log(response.data)
//       console.log("product id", response.data[0].productID)
//       $scope.ProductId = response.data[0].productId
//       $scope.productName = response.data[0].productName
//       $scope.productImage = response.data[0].productImage
      
//     //   $scope.userId= UserDetails[0].userId;
//     //   $scope.userName= UserDetails[0].userId;
//     //   $scope.userId= UserDetails[0].userId;
//     //   $scope.userId= UserDetails[0].userId;
//     //   $scope.userId= UserDetails[0].userId;
//     //   $scope.userId= UserDetails[0].userId;
//     //   $scope.userId= UserDetails[0].userId;
//     //   $scope.userId= UserDetails[0].userId;
//   }, function myError(response) {
//     allData = response.statusText;
//   });
var data = {
    "name": "morpheus",
    "job": "leader"
}
var data1 = {
    "inputs": {
        "filter": {
            "shop_id": 31
        },
        "auth":[{
            "api_key": "OHGO-SYSTEM-202109241133",
            "app_key": "ohgo_D(G+KbPeShVmYq3t6w9z$B&E)H@McQfT"
        }]
    },
    "modecode": 100
}

// Call the Api service
$http.post('https://ppab.a2hosted.com/ohgo/api/PublicApis/get_shop_profile', JSON.stringify(data1)).then(function (response) {

    if (response.data)
    console.log("Success fully");
    console.log(response);
    $scope.msg = "Post Data Submitted Successfully!";
    
    }, function (response) {
    
    $scope.msg = "Service not Exists";
    
    $scope.statusval = response.status;
    
    $scope.statustext = response.statusText;
    
    $scope.headers = response.headers();
    
    });
    
    
    
    

});


