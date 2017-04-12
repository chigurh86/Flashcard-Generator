var inquirer = require("inquirer");
var ClozeCard = require("./clozeCards.js");
var BasicCard = require("./basicCard.js");
var count = 0;
var correct = 0;
var incorrect = 0;
var type = process.argv[2];
var createcount = 0;
var newBasicCard = new BasicCard();
var newClozecard = new ClozeCard();

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
			        if (answers.name.toLowerCase() === newClozecard.Clozecardarray[count].cloze) {
			        	console.log("Correct! " + newClozecard.Clozecardarray[count].full);
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
	    	if (correct > incorrect) {
	    		console.log("You Won!");
	    	}
	    	else{
		    	console.log("You Lost!");
		    }
		    console.log("Game Over!");
// ask to play again
		    inquirer.prompt([
		    {
		        name: "name",
		        message: "Play Again?",
		    }, 
		    ]).then(function(answers) {
		    	if (answers.name.toLowerCase() === "yes") {
		    		startGame();
		    		createPartialCard();

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
		        if (answers.name.toLowerCase() === newBasicCard.BasicCardArray[count].back) {
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
	    	if (correct > incorrect) {
	    		console.log("You Won!");
	    	}
	    	else{
		    	console.log("You Lost!");
		    }
		    console.log("Game Over!");
// ask to play again
		    inquirer.prompt([
		    {
		        name: "name",
		        message: "Play Again?",
		    }, 
		    ]).then(function(answers) {
		    	if (answers.name.toLowerCase() === "yes") {
		    		startGame();
		    		createNewCard();

		    	}
		    	else if(answers.name.toLowerCase() === "no"){
					startGame();
		    	}	
	    	   });
		}
	
	}
askQuestion();
}
var createNewCard = function() {
	inquirer.prompt([
	      {
	        name: "makemore",
	        message: "Want to make a card?"
	      }, 
	    ]).then(function(amounts){
    if(amounts.makemore.toLowerCase() === "yes"){
	    inquirer.prompt([
	      {
	        name: "front",
	        message: "Type your question"
	      }, {
	        name: "answer",
	        message: "Type the answer"
	      }, 
	    ]).then(function(cards) {
	      var newCard = new BasicCard(
	        cards.front.toLowerCase(),
	        cards.answer.toLowerCase())
	      newBasicCard.BasicCardArray.push(newCard);
	      createNewCard();
	    });
    }
  	else {
    	console.log("Okay, lets Study!");
   	 	askBasicQuestion();
  	}
  		});
}

var createPartialCard = function() {
	inquirer.prompt([
	      {
	        name: "amount",
	        message: "Want to make a card?"
	      }, 
	    ]).then(function(amounts){
    if(amounts.amount.toLowerCase() === "yes"){
    	console.log("Create a partial card: ");
	    inquirer.prompt([
	      {
	        name: "partial",
	        message: "Type your question (use ... for the missing word or words)."
	      }, {
	        name: "answer",
	        message: "Type the missing word"
	      }, 
	    ]).then(function(cards) {
	      var newPartialCard = new ClozeCard(
	        cards.partial.toLowerCase(),
	        cards.answer.toLowerCase(),
	        cards.partial.toLowerCase().replace("...", cards.answer)
	        )
	      newClozecard.Clozecardarray.push(newPartialCard);
	      // console.log(JSON.stringify(newClozecard.Clozecardarray));
	      createPartialCard();
	    });
    }
     else {
    	console.log("Okay, lets Study!");
    	askClozeQuestion();
  	 }
  });
}


switch(type){
	case "Create-Basic":
	createNewCard();
	break;
	case "Create-Partial":
	createPartialCard();
	break;
    default: 
    console.log("I did not understand your command");
}




