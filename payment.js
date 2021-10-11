var app = angular.module('myApp', []);



app.controller('myCtrl', function($scope, $http) {

$scope.options = {
  "key": "rzp_test_FkRo6rT2vfxK34", // Enter the Key ID generated from the Dashboard
  "amount": 0, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Acme Corp",
  "description": "Test Transaction",
  "image": "https://github.com/ohgonoviyo/OhgoWebDemo/blob/master/asset/Ohgo%20Icon.jpeg?raw=true",
  "order_id": "order_I7uPHk0Aej1PHq", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "handler": function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
  },
  "prefill": {
      "name": "falihpangat",
      "email": "falihpangat@example.com",
      "contact": "9037400118"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#FF0000"
  }
};

$scope.rzp1 = new Razorpay($scope.options);
$scope.rzp1.on('payment.failed', function (response){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
});

$scope.myfunction= function(amount){
    console.log("amount",amount); 
    $scope.options.amount = amount * 100;
    $scope.rzp1.open();
    amount.preventDefault();
    
    
}
    
});