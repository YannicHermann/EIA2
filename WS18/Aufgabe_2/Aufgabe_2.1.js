/*
Aufgabe: Aufgabe 2 - UNO
Name: Yannic Hermann
Matrikel: 255279
Datum: 25.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A2;
(function (A2) {
    let handCards = [];
    let deck = [];
    let colors = ["red", "yellow", "green", "blue"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "<=>", "x"];
    let numCards;
    document.addEventListener("DOMContentLoaded", function () {
        document.addEventListener("keydown", pullCardKey);
        console.log(deck);
        createPlaceholder();
        /*  Begrenzung, falls mehrere Spieler implementiert werden
                
                if (isNaN(parseInt(numCards)) || parseInt(numCards) > 8) {
                    numCards = prompt("Sorry, Du musst eine Zahl eingeben, die kleiner als 8 ist.");
                } else {
                    alert("Okay, Du spielst nun mit " + numCards + " Karten!");
                }
        */
        //Generiere das Kartendeck
        for (let i = 0; i < colors.length; i++) {
            for (let a = 0; a < values.length; a++) {
                for (let n = 0; n < 2; n++) {
                    let card = { color: colors[i], value: values[a] };
                    deck.push(card);
                }
            }
        }
        //�berfl�ssige 0er entfernen und schwarze Karten hinzuf�gen
        deck.splice(0, 1);
        deck.splice(25, 1);
        deck.splice(50, 1);
        deck.splice(75, 1);
        deck.push({ color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" });
        numCards = prompt("Mit wie vielen Karten willst Du spielen?");
        //Push so viele Karten in den HandArray, wie der Nutzer w�nscht und l�sche diese aus dem Deck
        for (let i = 0; i < parseInt(numCards); i++) {
            let randomNum = Math.floor(Math.random() * deck.length);
            // handCards = deck.splice(deck[randomNum, 1]).concat(handCards);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
        }
        console.log(handCards);
        console.log(deck);
        //Stelle die erzeugten Karten in der HTML dar
        for (let i = 0; i < handCards.length; i++) {
            let div = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            let id = div.id = String(i);
            div.addEventListener("click", dropCard);
            console.log(div);
            /*let card: Card = { color: colors[i], value: values[i] };
              if (card.color = "black") {
              //    div.classList.remove("handCardStyle");
              //  div.classList.add("blackCards");
              div.style.color = "white";
            */
            div.innerHTML = handCards[i].value;
            div.style.backgroundColor = handCards[i].color;
        }
        // let  : HTMLDivElement = document.getElementsByTagName("")[0];
        // deck.addEventListener("click", pullCard);
    });
    function dropCard(_event) {
        console.log(_event.target);
        let domCard = _event.target;
    }
    //Nachziehstapel
    function createPlaceholder() {
        let div = document.createElement("div");
        document.getElementById("deck").appendChild(div);
        div.classList.add("placeholder");
        div.innerHTML += "UNO";
        div.addEventListener("click", pullCardClick);
    }
    function pullCardClick(_event) {
        console.log("works" + _event.target);
    }
    function pullCardKey(_event) {
        console.log(_event.target);
        console.log(_event);
        console.log("keyCode = " + _event.keyCode);
        //console.log(_event.keyCode);
        if (_event.keyCode == 32) {
            console.log("works");
            let randomNum = Math.floor(Math.random() * deck.length);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
            console.log(deck);
            console.log(handCards);
            displayCard();
        }
    }
    function displayCard() {
        for (let i = 0; i < handCards.length; i++) {
            let div = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            let id = div.id = String(i);
            div.addEventListener("click", dropCard);
            console.log(div);
            /*let card: Card = { color: colors[i], value: values[i] };
              if (card.color = "black") {
              //    div.classList.remove("handCardStyle");
              //  div.classList.add("blackCards");
              div.style.color = "white";
            */
            div.innerHTML = handCards[i].value;
            div.style.backgroundColor = handCards[i].color;
        }
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=Aufgabe_2.1.js.map