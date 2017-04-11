var inquirer = require("inquirer");
var ClozeCard = require("./clozeCards.js");
var BasicCard = require("./basicCard.js");
var count = 0;
var correct = 0;
var incorrect = 0;
var type = process.argv[2];

var newBasicCard = new BasicCard();
newBasicCard.addCard("Who was the first US President?", "George Washington");
newBasicCard.addCard("What political party was a Bill Clinton affiliated with?", "Democratic");
newBasicCard.addCard("How many original colonies were there in the United States?","13");
newBasicCard.addCard("Was President Nixon impeached from office?", "Yes");


var newClozecard = new ClozeCard();
newClozecard.addOne("... was our first President", "George Washington", "George Washington was our first President");
newClozecard.addOne("... was a Democratic President who got impeached", "Bill Clinton", "Bill Clinton was a Democratic President who got impeached");
newClozecard.addOne("There was originally ... colonies", "13", "There was originally 13 colonies");
newClozecard.addOne("... was a Republican President who was impeached from office", "Richard Nixon", "President Nixon was a Republican President who was impeached from office");

var startGame = function(){
		count = 0;
		correct = 0;
		incorrect = 0;
}

var askClozeQuestion = function(){
	var theClozeQuestion = function(){
		if (count < newClozecard.Clozecardarray.length) {
			 inquirer.prompt([
		      {
		        name: "name",
		        message: newClozecard.Clozecardarray[count].partial,
		      }, 
		    ]).then(function(answers) {
			        if (answers.name === newClozecard.Clozecardarray[count].cloze) {
			        	console.log("correct!");
			        	console.log(newClozecard.Clozecardarray[count].full)
			        	correct++;
			        	
			        }
			        else{
			        	console.log("Incorrect!");
			        	incorrect++;
			        }
		        count++;
		    	askClozeQuestion();
		 	 });
	    }
	    else{
	    	console.log("Game Over!");
	    	if (correct > incorrect) {
	    		console.log("You Won!");
	    	}
	    	else{
		    	console.log("You Lost!");
		    }
// ask to play again
		    inquirer.prompt([
		    {
		        name: "name",
		        message: "Play Again?",
		    }, 
		    ]).then(function(answers) {
		    	if (answers.name === "Yes" || "yes") {
		    		count = 0;
		    		correct = 0;
		    		incorrect = 0;
		    		askClozeQuestion();

		    	}
	    	   });
		}
    }
    theClozeQuestion();
}


var askBasicQuestion = function(){
	var askQuestion = function(){
		if (count < newBasicCard.BasicCardArray.length) {
			 inquirer.prompt([
		      {
		        name: "name",
		        message: newBasicCard.BasicCardArray[count].front,
		      }, 
		    ]).then(function(answers) {
		        if (answers.name === newBasicCard.BasicCardArray[count].back) {
		        	console.log("correct!");
		        	correct++;
		        	count++;
		    		askQuestion();
		        	
		        }else{
		        	console.log("Incorrect!");
					incorrect++;
					count++;
		    		askQuestion();	
		        }
		 	 });
	    }
	    else{
	    	console.log("Game Over!");
	    	if (correct > incorrect) {
	    		console.log("You Won!");
	    	}
	    	else{
		    	console.log("You Lost!");
		    }
// ask to play again
		    inquirer.prompt([
		    {
		        name: "name",
		        message: "Play Again?",
		    }, 
		    ]).then(function(answers) {
		    	if (answers.name === "Yes" || "yes") {
		    		count = 0;
		    		correct = 0;
		    		incorrect = 0;
		    		askBasicQuestion();

		    	}
		    	else{
					startGame();
		    	}	
	    	   });
		}
	
	}
askQuestion();
}


switch(type){
	case "Basic-Card": 
	askBasicQuestion();
    break;
    case "Partial-Card": 
	askClozeQuestion();
    break;
}




