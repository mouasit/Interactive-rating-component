
var rating = document.getElementById("rating")
var thankYou = document.getElementById("thankYou");

var listRating = document.querySelectorAll("#listRating .number-rating");
var submit = document.getElementById("submit");

var numberSelected = document.getElementById("numberSelected");
var numberRating = 0;

submit.addEventListener("click",addRating);

listRating.forEach(function(e){
    e.addEventListener("click", clickNumber);
});

function addRating(){
    if(numberRating)
    {
        rating.style.display = "none";
        thankYou.style.display = "flex";
        numberSelected.innerHTML = numberRating;
    }
};

function clickNumber(){
    listRating.forEach(function(e){
        e.id = false;
    });
    numberRating = this.innerHTML;
    this.id = "active";
}