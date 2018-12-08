

 //every game has two players, identified by their WebSocket 
var game = function (gameID) { //introduces player1 and player2
    this.playerA = null;
    this.playerB = null;
    this.id = gameID;
    this.turn = playerA; 
    

};

class position  {
    constructor(x, y, hit){
    this.x = x;  //x coordinates for the board
    this.y = y;  //y corrdinate for the board
    this.hit = hit; //Makes sure that you can not hit the boat again  
    
 }
 setPosition(x,y){
     this.x = x;
     this.y = y;
 }
 setHit(){
     this.hit = true;
 }
}



let Carrier = [(new position("B",1,false)),new position("A",2,false),new position("A",3,false),new position("A",4,false),new position("A",5,false)]; //5
 class ships {
     constructor(){
         this.ships=[Carrier]
     }
 }
var player = function (){
    this.score = 0;
    this.ships = new ships().ships;
}
player.prototype.ships = [ '','' ];

//Victim is player1 or player2
//Takes the coordinate that should be hit and the victim as an argument 
//Returns -1 if already tried
//returns 0 if it is as miss
//returns 1 if it is a hit 

fireShot = (victim, id) => {
   
    for(var i = 0; i < victim.ships.length; i++) {
       
        for (var i2 = 0; i2< victim.ships[i].length;i2++){   
            if("player1-" + victim.ships[i][i2].x + victim.ships[i][i2].y === $(id).attr('id')){
                  
            victim.score += 100;
            $(id).off(event);
            $(id).prepend('<img src="./images/flame.gif" id="spinner" alt="loading..." style="width: 90%; display: block;position: absolute;top: 50%;left: 50%;min-height: 90%; min-width: 90%;transform: translate(-50%, -50%);" />')
         
            $("#player2Name").text(victim.score)
           
            return;
            }
        }

        if(victim.score >= 10){
            victim.score -= 10;
        }
        $("#player2Name").text(victim.score)
       
        $(id).off(event);
        $(id).prepend('<img src="./images/x.png" style="width: 90%; display: block;position: absolute;top: 50%;left: 50%;min-height: 90%; min-width: 90%;transform: translate(-50%, -50%);" />')
      

      
    }
        
}


const player1 = new player();









$(function() {
    $("#player2Name").addEventListener("drag", fireShot(victim,this));
   // $(".grid-item").children().hide()
      $( ".grid-item" ).on("click", function( event ) {  
            fireShot(player1, this)
      });

      $( ".grid-item-white" ).on("click", function( event ) {  
        fireShot(player1, this)
      });


    $('#player1-A1').one( "click", function(){
        alert( "Handler for .click() called." );
      });
    $('.player2').hide();


    $("#d").on("click", function(){
        console.log(333);
    });
})
