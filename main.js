var inquirer = require("inquirer");
var ClozeCard = require("./clozeCards.js");
var BasicCard = require("./basicCard.js");
var count = 0;
var type = process.argv[2];

// create cards
 
 var newBasicCard = new BasicCard();
 newBasicCard.addCard("Who was the first US President?", "George Washington");
 newBasicCard.addCard("What political party was a Bill Clinton affiliated with?", "Democratic");
 newBasicCard.addCard("How many original colonies were there in the United States?","13");
 newBasicCard.addCard("Was President Nixon impeached from office?", "Yes");




 var newClozecard = new ClozeCard("[hidden] was our first President", "george washington");
 newClozecard.addOne("[hidden] was a Democrat", "bill clinton");
 newClozecard.addOne("There was originally [hidden] colonies","13");
 newClozecard.addOne("[hidden] was impeached from office", "president nixon");
// create a for loop that loops through the flashcards and calls the function repeatedly



// var askClozeQuestion = function(){

// 	if (count < 5) {
// 		 inquirer.prompt([
// 	      {
// 	        name: "name",
// 	        message: newClozecard.Clozecardarray[count].front,
// 	      }, 
// 	    ]).then(function(answers) {
// 	        if (answers.name === newClozecard.Clozecardarray[count].back) {
// 	        	console.log("correct!");
	        	
// 	        }else{
// 	        	console.log("Incorrect!");
// 	        }
// 	        count++;
// 	        console.log(count);
// 	        console.log()
// 	    	askClozeQuestion();

// 	 	 });
//     }
// }
// askClozeQuestion();


var askQuestion = function(){

	if (count < 5) {
		 inquirer.prompt([
	      {
	        name: "name",
	        message: newBasicCard.BasicCardArray[count].front,
	      }, 
	    ]).then(function(answers) {
	        if (answers.name === newBasicCard.BasicCardArray[count].back) {
	        	console.log("correct!");
	        	
	        }else{
	        	console.log("Incorrect!");
	        }
	        count++;
	        console.log(count);
	        console.log()
	    	askQuestion();

	 	 });
    }
}
switch(type){
	case "Basic-Card": 
	askQuestion();
    break;
    case "Partial-Card": 
	askClozeQuestion();
    break;
}


// create a user generated conditional that stops the for loop

// store those inputs to two separate arrays one for cloze flashcards one for Basic flashcards 

// output the clozecards to an external clozecards text file

// output the basic cards to an external basic cards text file

// require the external log files 

// create a new js file that is the flashcard game

// make the user input call a flashcard at random from either the clozecards file or the array

// they will use process argv [2] as the type of flashcard to pull









