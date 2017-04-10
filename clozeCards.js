// create constructor function for basic flashcards in main.js
// create constructor function for clozecards
var ClozeCard = function(text, cloze){
	this.Clozecardarray = [];
	this.text = text;
	this.cloze = cloze;
	this.addOne = function(p, c) {
    	this.Clozecardarray.push(new ClozeCard(p, c));
  };
}

module.exports = ClozeCard;