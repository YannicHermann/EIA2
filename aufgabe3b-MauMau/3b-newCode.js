var maumau;
(function (maumau) {
    var deck = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik Ass"];
    var discard = [];
    var hand = [];
    window.onload = function () {
        document.getElementById("deck").addEventListener("click", pullRandomCard);
        document.getElementById("handcards").addEventListener("click", removeCard);
    };
    function pullRandomCard() {
        if (hand.length < 5 && deck.length > 0) {
            var randomCard = Math.floor((Math.random() * deck.length - 1) + 0); // ZUF�LLIGE KARTE
            hand.push(deck[randomCard]); //PUSH RANDOM CARD IN DIE HAND
            deck.splice(randomCard, 1); //REMOVE THIS CARD OF ARRAY
            //Get Divs and append child to "handcards"
            var handCard = document.getElementById("handcards");
            var div = document.createElement("div");
            document.getElementById("handcards").appendChild(div);
            handCard.innerHTML = "";
            for (var i = 0; i < hand.length; i++) {
                //  Div Content at i-th place    
                var divWithContent = document.createElement("div");
                divWithContent.textContent = hand[i];
                handCard.appendChild(divWithContent);
            }
            console.log(deck);
            console.log(hand);
        }
    }
    function removeCard(_event) {
        var click = _event.target; //get mouse target
        var handCard = click.textContent; //content
        hand.splice(hand.indexOf(handCard), 1); //remove index of Array 
        discard.push(handCard); // push to discard
        click.parentNode.removeChild(click); // remove the div, which clicked
        //Content & Visuals
        if (discard.length > 0) {
            document.getElementById("discard").textContent = discard[discard.length - 1];
            if (deck.length == 0) {
                var deckDiv = document.getElementById("deck");
                deckDiv.parentNode.removeChild(deckDiv);
                var discardDiv = document.getElementById("discard");
                discardDiv.innerHTML = ("ENDE");
            }
        }
    }
})(maumau || (maumau = {}));
;
//# sourceMappingURL=3b-newCode.js.map