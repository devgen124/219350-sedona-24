var popupButton = document.querySelector(".booking-button");
var form = document.querySelector(".search-hotels");
var submitButton = document.querySelector(".search-button");
var adults = document.querySelector("[name=adults-amount]");
var children = document.querySelector("[name=children-amount]");
var adultsStorage = localStorage.getItem("adults");
var childrenStorage = localStorage.getItem("children");

popupButton.addEventListener("click", function(evt){
  evt.preventDefault();
  form.classList.toggle("search-hotels-show");
  if (adultsStorage) {
    adults.value = adultsStorage;
  };
  if (childrenStorage) {
    children.value = childrenStorage;
  }
});

submitButton.addEventListener("submit", function(){
  localStorage.setItem("adults", adults.value);
  localStorage.setItem("children", children.value);
});
