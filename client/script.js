var turnnum=1;
var pickingurmove=1;
var whatmove=1;
var playerhealth=600;

var settingweapon="flame";
var settingtarget="mrflame";

var turnnumbruh=document.getElementById("turnnum");
var movebruh=document.getElementById("whatmove");
var lastmovebruh=document.getElementById("lastmove");

var pathchoice
(pathchoice) = 1


var gobetween=1;

var attacker= "flame";

var target= "mrflame";




function element(userelement, targetelement) {
var typeaffinity = {
  
  
"flame": {"flame": 0.75, "mrflame": 0.75,
         "aqua": 0.75, "hydroblob": 0.75, 
         "electric": 1, "elektra": 1,
         "ice": 2, "yeti": 2},
  
"mrflame": {"flame": 0.75, "mrflame": 0.75,
           "aqua": 0.75, "hydroblob": 0.75, 
            "electric": 1, "elektra": 1, 
           "ice": 2, "ice": 2},
  
  
  
"aqua": {"flame": 2, "mrflame": 2,
          "aqua": 0.75, "hydroblob": 0.75, 
           "electric": 0.75, "elektra": 0.75,
          "ice": 1, "yeti": 1},
  
"hydroblob": {"flame": 2, "mrflame": 2, 
          "aqua": 0.75, "hydroblob": 0.75, 
          "electric": 0.75, "elektra": 0.75, 
          "ice": 1, "yeti": 1},   

  
    
"electric": {"flame": 1, "mrflame": 1, 
        "aqua": 2, "hydroblob": 2, 
        "electric": 0.75, "elektra": 0.75, 
        "ice": 0.75,"yeti": 0.75},
  
"elektra": {"flame": 1, "mrflame": 1, 
        "aqua": 2, "hydroblob": 2, 
        "electric": 0.75, "elektra": 0.75, 
        "ice": 0.75, "yeti": 0.75},
  
  
  
"ice": {"flame": 0.75, "mrflame": 0.75, 
        "aqua": 1, "hydroblob": 1,
        "electric": 2, "elektra": 2,
        "ice": 0.75, "yeti": 0.75},
  
"yeti": {"flame": 0.75, "mrflame": 0.75, 
        "aqua": 1, "hydroblob": 1,
        "electric": 2, "elektra": 2, 
        "ice": 0.75, "yeti": 0.75} 
  
  
  
};

var multiplier = typeaffinity[userelement][targetelement];
return multiplier;
}

var weapon= "flame"
var target= "mrflame"
var multiplier = element(weapon, target);




const weapons = {
flame: {attack: 100, defense: 100, agility: 80, dexterity: 120, moves: [50, 75, 125, 150], 
},
aqua: {attack: 80, defense: 150, agility: 80, dexterity: 90, moves: [65, 70, 90, 175],
},
electric: {attack: 140, defense: 50, agility: 120, dexterity: 90, moves: [80, 100, 120, 200],
},
ice: {attack: 90, defense: 70, agility: 110, dexterity: 130, moves: [70, 50, 40, 120],
},

hydroblob: {attack: 70, defense: 150, agility: 70, dexterity: 30, moves: [60, 1, 1, 1], 
},  
elektra: {attack: 90, defense: 50, agility: 70, dexterity: 70, moves: [40, 75, 1, 1], 
},  
mrflame: {attack: 90, defense: 80, agility: 60, dexterity: 80, moves: [60, 80, 1, 1], 
},    
yeti: {attack: 80, defense: 65, agility: 100, dexterity: 70, moves: [100, 30, 1, 1], 
}    
};

function damagecalc(attacker, movepick, target, crit = false, fail = true) {
turnnum++
turnnumbruh.value= turnnum
lastmovebruh.value= movebruh.value
movebruh.value= movebruh.value   

var a = weapons[attacker].attack; 
var d = weapons[target].defense;
var m = weapons[attacker].moves[movepick]; 
var t = element(attacker, target); 
var critcalc = crit ? Math.random() * (2 + 1) + 1 : 1; 
var c= 1;  
var r = Math.random() * (1.1 - 0.95) + 0.95; 
var f = fail && Math.random() < 0 +((weapons[target].agility*2)-weapons[attacker].dexterity)/1000 ? 0 : 1;
var h = (a / d) * m * t * c * r * f; 
  
console.log(attacker)
console.log(target)
console.log(movepick)
console.log(h)
return Math.round(h); 
}







function slimeset(){

settingtarget="hydroblob"

}

function impset(){
settingtarget="elektra"
  
}

function yetiset(){
settingtarget="yeti"

}

function knightset(){
settingtarget="mrflame"

}




function daggerset(){
settingweapon="ice" 
  
}

function swordset(){
settingweapon="aqua" 

}

function staffset(){
settingweapon="flame" 

}

function spearset(){
  
settingweapon="electric" 

}


function moveoneset(){

pickingurmove="0"

}

function movetwoset(){
pickingurmove="1"
  
}

function movethreeset(){
pickingurmove="2"

}

function movefourset(){
pickingurmove="3"

}




 

function move_run(){

Player.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player2.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow2.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow3.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowL.gif?v=1736882164580";
(pathchoice = 1)
console.log (pathchoice);
}







//Move Right

function move2_run(){

Player.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player3.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow2.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow6.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowSL.png?v=1736882179028";
  
  
(pathchoice = 2)


console.log (pathchoice);

}


//Top Right Bridge

function move3_run(){

Player2.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow2.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow3.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowSL.png?v=1736882179028";
(pathchoice = 3)


console.log (pathchoice);

}

//Top Middle Bridge 

function move4_run(){

Player4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow3.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowSL.png?v=1736882179028";
(pathchoice = 4)


console.log (pathchoice);

}

//Area Before Cave Entrance on right side

function move5_run(){

Player5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player6.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197"; //Player 6 is the final spot
LeftArrow4.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow9.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/UpArrow.gif?v=1736882210657"; //Come back to this part once all arrows are done to decide what the final value will be.
(pathchoice = 5);


console.log (pathchoice);

}

//Bottom Middle Bridge

function move6_run(){

Player5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player3.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player7.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow4.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow6.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow7.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowL.gif?v=1736882164580";
(pathchoice = 6)


console.log (pathchoice);

}

//Edge of left hill

function move7_run(){

Player7.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player8.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow5.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow7.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow8.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowR.png?v=1736882171634";
(pathchoice = 7)


console.log (pathchoice);

}

//Moves to final spot from left path


function move8_run(){

Player8.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player6.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/Player.gif?v=1736882196197";
LeftArrow7.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow8.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow9.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/UpArrow.gif?v=1736882210657";
(pathchoice = 8);


console.log (pathchoice);

}

//Move to enter the cave

function FinalMove_run(){

//here is where the final turn is.

console.log (pathchoice);

}





function betweentransition(){
console.log("yes it pressed") 
console.log(gobetween)  
console.log(pathchoice)   
   
if(gobetween==1){
gobetween=2  
Player.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player2.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player3.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
Player4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";  
Player5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";  
Player6.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";  
Player7.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";  
Player8.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";   
LeftArrow.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow2.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow3.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow4.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow5.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow6.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879";
LeftArrow7.src ="https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879"; 
gamemap.src=  "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879"; 
gamebridge.src=  "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/tictacBLANKTPT.gif?v=1736882207879"; 
}
}    



function secondtransition(){
if(gobetween==2){
gobetween=1
  
if(pathchoice==1){
Player.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336";
LeftArrow2.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336";  
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}
    
if(pathchoice==2){
Player3.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow6.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336";  
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}  
      
if(pathchoice==3){
Player4.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow4.src = "https://cdn.glitch.global/1dc9feb7-a25c-4337-aa0f-e966782a30e3/ArrowSL.png?v=1736882179028"; 
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}  
  
if(pathchoice==4){
Player5.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow5.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336"; 
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}    
  
if(pathchoice==5){
Player6.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow9.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336";  
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}  
  
if(pathchoice==6){
Player7.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow7.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336"; 
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}  
  
if(pathchoice==7){
Player8.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow8.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336";
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}    
  
  
if(pathchoice==8){
Player6.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";  
LeftArrow9.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/UpArrow.gif?v=1737572301616";  
gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
}    
  
}
}









//Player.src ="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/Player.gif?v=1737488765964";

//LeftArrow.src = "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/ArrowL.gif?v=1737488770336";

//gamemap.src=   "https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brebruhmap.gif?v=1737488854492"; 
//gamebridge.src="https://cdn.glitch.global/ee7c8ab9-8a0d-4c13-84b5-b33bd31f0c1e/brehbruhbridge.gif?v=1737488857485";
  









