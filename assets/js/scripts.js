$(document).ready(function() {

    let lockGrid = false;

    let time = 0,
        totalSeconds = 0,
        minutesLabel = document.getElementById("minutes"),
        secondsLabel = document.getElementById("seconds");




    function setTimer() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        if (minutesLabel.innerHTML === "03" && secondsLabel.innerHTML === "00") {
            clearInterval(time);
            restartGame();
        }
    }

    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }



    //modified from https://codepen.io/bycreator/pen/RNQmZK//

    $(".cards").click(function() {
        if (lockGrid) return;
        if (!$(this).hasClass("selected")) {
            $(this).toggleClass("flip");
            $(this).addClass("selected");

        }

        selectingCards();
        endOfGame();
    });

    function startGame() {

        $("#start").click(function() {
            time = setInterval(setTimer, 1000);
            $(".modalBackground").hide();
        });
    }
    startGame();

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
            hideMatchedCards();
        } else {
            notMatchedCards();

        }
    }

    function hideMatchedCards() {
        $(".cards.flip.selected").removeClass("selected").animate({ opacity: 0 }, { duration: 2000 });
    }

    function notMatchedCards() {
        lockGrid = true;
        setTimeout(function() {
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

function endOfGame() {
    if ($(hideMatchedCards).length === 36) {
        setTimeout(function() {
            $("#restart").replaceWith(`<div id="restart">
        <h1>Game Over</h1>
        <p>Click here to restart!</p>
        </div>`);
            restartGame();
        }, 1000);

    }



    function restartGame() {
        $("#restart").click(function() {
            time = setInterval(setTimer, 1000);
            $(".modalBackground").hide();
            setTimer();
            shuffle();
        });


    };

}