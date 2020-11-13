$(document).ready(function () {

    

  //let hasFlippedCard = false;
  let lockGrid = false;
  //let firstCard, secondCard;

  function startGame(){

    $("#start").click(function(){
    $(".modalBackground").hide();

   });

     }
    startGame();


//modified from https://codepen.io/bycreator/pen/RNQmZK//

  $(".cards").click(function () {
    if (lockGrid) return;
    if (!$(this).hasClass("selected")) {
      $(this).toggleClass("flip");
      $(this).addClass("selected");
      
    }

    selectingCards();
  });

  function selectingCards() {
    if ($(".cards.flip.selected").length === 2) {
      matchingCards();
      
    }
  }

  function matchingCards() {
    if (
      $(".cards.flip.selected").first().data("image") ===
      $(".cards.flip.selected").last().data("image")
    ) {
      hideMatchedCards ();
    } else {
      notMatchedCards();
      
    }
  }

  function hideMatchedCards(){
$(".cards.flip.selected").removeClass("selected").animate({opacity: 0});

  }

  function notMatchedCards() {
    lockGrid = true;
    setTimeout(function () {
      $(".flip").toggleClass("flip");
      lockGrid = false;
    }, 1500);
    $(".cards.flip.selected").removeClass("selected");
  }

  function shuffle() {
    let cards = document.querySelector(".game_grid");
    for (i = cards.children.length; i > -1; i--) {
    cards.appendChild(cards.children[(Math.random() * i) | 0]);
    }
  }
  shuffle();
});
