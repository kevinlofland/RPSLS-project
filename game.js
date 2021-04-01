class Game{
    constructor(Multiplayer, Singleplayer){
        this.Multiplayer = Multiplayer
        this.Singleplayer = Singleplayer

    let numberOfPlayers = prompt("How many Players? 1 or 2");
        if(numberOfPlayers == 1){
            return this.Singleplayer
        }
        else(numberOfPlayers == 2);{
            return this.Multiplayer
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
            
        }
}