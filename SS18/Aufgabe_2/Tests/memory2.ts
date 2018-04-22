namespace Aufgabe_2 {
    
    let n: number; 
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ];
    let cardArray: string[] = [];
    let askPairs: string;
    let numPairs: number = parseInt(askPairs);  
    let askPlayers: string; 
    let numPlayers: number = parseInt(askPlayers); 
    let card: HTMLDivElement = document.createElement("div");
    let cssClassHidden: string [] = ["hidden"];
    let cssClassOpen: string [] = ["open"];
    let cssClassOpenString: string = "open";
    let openCards: string [] = [];
    
    window.onload = function (): void {
        
        
     

/*Asking how many Pairs + Check if it's in range + if it's a number*/
    do  {
    askPairs = prompt ("Wie viele Paare?");
    numPairs = parseInt(askPairs);
    
    } while (numPairs < 1 || numPairs > 20); 
     
/*    do  {
    askPairs = prompt ("Wie viele Paare?");
    numPairs = parseInt(askPairs);
    
    } while (isNaN(numPairs) || isNaN(numPairs));

   Gebe ich zuerst eine falsche Nummer oder einen String ein funktionieren beide Abfragen. 
   Nach der String-Test kann ich aber auch Zahlen au�erhalb der Range eingeben und er springt weiter. 
   Ich bin mir ziemlich sicher, dass es daran liegt, dass die Abfragen in 2 versch. Schleifen stattfinden.
   Wenn ich beide Abfragen in eine Schleife gepackt habe, habe ich es aber nicht zum Laufen gebracht.*/

   
/*Asking how many Players + Check if it's in range + if it's a number*/
    do  {
    askPlayers = prompt ("Wie viele Spieler?");
    numPlayers = parseInt(askPlayers);
    
    } while (numPlayers < 1 || numPlayers > 4); 
     
/*    do  {
    askPlayers = prompt ("Wie viele Spieler?");
    numPlayers = parseInt(askPlayers);
    
    } while (isNaN(numPlayers) || isNaN(numPlayers)); 
*/        
    console.log(askPlayers);
    console.log(askPairs);
    
    //createCard(cardContent, "#ff0000");
    createPlayer();
    createCards(numPairs, cardArray, cardContent);
    

    
    console.log(cardContent);

    function createPlayer(): void {
    for (let i: number = 0; i < numPlayers; i++) {
    let player: HTMLDivElement = document.createElement("div");
    let playerCounter: number [] = [1, 2, 3, 4];

    player.innerText = "Player" + playerCounter[i]; 
    document.getElementById("player").appendChild(player);

    }
}              
    
    function createCards(_numPairs: number, _cardArray: string [], _content: string []): void {
        
    for ( let i: number = 0; i < _numPairs * 2; i++) {

        let card: HTMLDivElement = document.createElement("div");
        document.getElementById("playground").appendChild(card);
        
        card.addEventListener("click", clickHandler);
        
        card.className = "hidden";
        
        let randomContent: number = Math.floor(Math.random() * (cardArray.length - 0) + 0);
        
        
        
        card.innerText = cardContent[randomContent]; 
        
        cardArray.push(cardContent[randomContent]);  
        
        cardArray.splice(randomContent, 1);      
        }
        
   // for (let i: number = 0; i < cardArray.length; i++) {
               
        

 //       let randomStatus: number = Math.floor(Math.random() * (cssClassHidden.length - 0) + 0);
     //   let status: string = cssClassHidden[0];
        
     //   createCard(cardArray, randomContent, status);
         
        
        
//        }
        
    }
    
    
/*        function randomContent(_min: number, _max: number): void {
        _min = 0;
        _max = cardArray.length;
        Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    
        function randomStatus(_min: number, _max: number): void {
        _min = 0;
        _max = cssClasses.length;
        Math.floor(Math.random() * (_max - _min + 1) + _min);
    }    
*/       


/*
    function createCard(_content: string[], _randomContent: number, _status: string): void {    
    for (let i: number = 0; i < numPairs; i++) {    
    let card: HTMLDivElement = document.createElement("div");
        
        
    card.innerText = _content[_randomContent];
        
    card.className = _status;
    
    document.getElementById("playground").appendChild(card);
    
    card.addEventListener("click", clickHandler);            
    }
}  */      
    function clickHandler(_event: MouseEvent): void {
        let info: HTMLDivElement = <HTMLDivElement>_event.target;
        
        if (info.classList.contains("hidden")) {
                info.classList.add("open");
                openCards.push(info.innerText);
            }
        
        
       // if (info.classList.contains("hidden")) {
        
        
        
        cardArray.push();
        
        console.log(cardArray);
        console.log("Open Cards" + openCards);
        
        if (openCards.length > 1) {
        prompt("setTimeout + CompareCardsFunction");        
        }
        logEvent(_event);
        
        //        logEvent(_event);
  //      card.className = cssClassOpen [0];
    }
        
        
    function logEvent(_event: Event): void {
        if (_event == undefined) {
            console.log("No event object passed");
            return;
        }
        console.group("EventInfo");
        let info: string = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;

        console.log(info);
        console.log(_event);
        console.groupEnd();
    }



  /*  let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    for (let i: number = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }*/
    
        
    }; 
}