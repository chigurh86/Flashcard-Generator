// create constructor function for basic flashcards in main.js
// create constructor function for clozecards
var ClozeCard = function(partial, cloze, full){
	this.Clozecardarray = [];
	this.partial = partial;
	this.cloze = cloze;
	this.full = full;
	this.addOne = function(p, c, f) {
    	this.Clozecardarray.push(new ClozeCard(p, c, f));
  };
}

module.exports = ClozeCard;