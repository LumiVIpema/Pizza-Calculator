//Lumi Valkyrie Ipema
//Software Developer MBO4 

//Constanten For set values
const SMALL = 6; //Prize for a small pizza
const MEDIUM = 8; //Prize for a medium pizza
const BIGCHUNGUS = 12; //Prize for a BIG Chungus pizza

var small = 0; //Starting value for the small pizza
var medium = 0; //Starting value for the small medium
var bigchungus =0; //Starting value for the BIG Chungus

var PizzaClicker =[0,0,0] //This is an array, starting at value 0, based of the 3
function pizzabutton (id){ //Add 1 on a click
PizzaClicker [id] +=1

if (id ===0) { //first button counts the clicks and calculates the price
	small ++
var totalSmall =small*SMALL  
document.getElementById ("smallammount").innerHTML=small 
document.getElementById ("smallprice").innerHTML=totalSmall
}

else if (id ===1) { //second button counts the clicks and calculates the price
	medium ++
var totalmedium =medium*MEDIUM
document.getElementById ("mediumammount").innerHTML=medium
document.getElementById ("mediumprice").innerHTML=totalmedium
}

else if (id ===2) { //third button counts the clicks and calculates the price
	bigchungus ++
var totalbigchungus =bigchungus*BIGCHUNGUS
document.getElementById ("chungusammount").innerHTML=bigchungus
document.getElementById ("chungusprice").innerHTML=BIGCHUNGUS
}

}
