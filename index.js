"use strict";

class Player{
    constructor(name){
        this.name= name
        this.score= 0
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
        this.selectedGesture= null

    }
} 
class Human extends Player{
    constructor(){
        super();
    }
    chooseGesture(){
        let chosenGesture = prompt("Please select your gesture");
        switch(chosenGesture){
            case "Rock":
                this.selectedGesture=this.gestures[0]
                return this.selectedGesture
            case "Paper":
                this.selectedGesture=this.gestures[1]
                return this.selectedGesture
            case "Scissors":
                this.selectedGesture=this.gestures[2]
                return this.selectedGesture
            case "Lizard":
                this.selectedGesture=this.gestures[3]
                return this.selectedGesture
            case "Spock":
                this.selectedGesture=this.gestures[4]
                return this.selectedGesture
            }
    }
}
class AI extends Player{
    constructor(){
        super();
    }

    chooseGesture(){
        let randomNumber = Math.floor(Math.random()* 5)
        this.selectedGesture =this.gestures[randomNumber];
        return this.selectedGesture

    }
}

let player1;
let player2;
if("Multiplayer"){
    player1 = Human();
    player2 = Human();
}
else if("Singleplayer"){
    player1 = Human();
    player2 = AI();
}
else{
    player1 = AI();
    player2 = AI();
}







player1.chooseGesture();
player2.chooseGesture();