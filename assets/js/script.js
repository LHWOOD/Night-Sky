//variable declaration
var userForm = document.querySelector("#submitForm");
var addressInput = document.querySelector("#addressArea");
var cityInput = document.querySelector("#cityArea");
var stateInput = document.querySelector("#stateArea");
var zipInput = document.querySelector("#zipArea");

//captures user address
var inputHandler = function (event) {
  event.preventDefault();
  var address = addressInput.value;
  var city = cityInput.value;
  var state = stateInput.value;
  var zip = zipInput.value;
  let requestAddress = `${address} ${city}, ${state} ${zip}`;
  return requestAddress;
};

//event listener for form
userForm.addEventListener("submit", function (event) {
  let requestAddress = inputHandler(event);
  let requestURL = `https://geocode.xyz/${requestAddress}?json=1`;
  getGeoData(requestURL);
});

function getGeoData(requestURL) {
  $.ajax({
    url: requestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
