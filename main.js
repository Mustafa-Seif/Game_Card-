var cards = document.querySelectorAll(".memory-card");
var over_lay = document.getElementsByClassName("over_lay")[0];


start.addEventListener("click", function (e) {
  var name = prompt("Enter Your Name..")
  if ( name == null || name=="") {
      var i = 0;
      do {
            name = prompt("Please enter your name correctly..");
          i++

      } while ( name == null || name=="");
  }
  // else{
  //     // console.log("is"+name)
  // }
  document.querySelector("span").innerHTML = name;

  over_lay.remove()
setTimeout(function () {
  front.forEach(function (e) {
      e.classList.add("show_front")
  })
   
},3000)


  
});

var hasFlipped = false;
var firstCard, secondCard;
// var lockBoard = false;

function flipCard() {
  // if (lockBoard) return;
  // if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
  } else {
    hasFlipped = false;
    secondCard = this;

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      // lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        // lockBoard = false;
      }, 1500);
    }
  }
}

function shuffle() {
  cards.forEach((card) => {
    var randomPosition = Math.trunc(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

shuffle();

cards.forEach((card) => card.addEventListener("click", flipCard));


// if (condition) {
  
  
// }