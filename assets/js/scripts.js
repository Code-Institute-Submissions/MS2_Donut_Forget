$(document).ready(function () {

    

  
  let lockGrid = false;
  

  function startGame(){

    $("#start").click(function(){
        Timer();
        
    $(".modalBackground").hide();


   });

     }
    startGame();


  
 //borrowed from https://codepen.io/bycreator/pen/RNQmZK//   


  let duration = 0;
    let time = setInterval(Timer, 1000
    );
function Timer(){
   
     $("#timer").html(`Timer: ${duration}`);
    $(".cards").click(function () {
        if ($(hideMatchedCards).length === 36){
            clearInterval(time);
        }
    

    
});


}

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
$(".cards.flip.selected").removeClass("selected").animate({opacity: 0}, {duration: 2000});

  }

  function notMatchedCards() {
    lockGrid = true;
    setTimeout(function () {
      $(".flip").toggleClass("flip");
      lockGrid = false;
    }, 1500);
    $(".cards.flip.selected").removeClass("selected");
  }


  //Fisher-Yates method//
  function shuffle() {
    let cards = document.querySelector(".game_grid");
    for (i = cards.children.length; i > -1; i--) {
    cards.appendChild(cards.children[(Math.random() * i) | 0]);
    }
  }
  shuffle();
});
