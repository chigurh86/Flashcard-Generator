var BasicCard = function(front, back){
	this.BasicCardArray = [];
	this.front = front;
	this.back = back;
	this.addCard = function(f, b) {
    	this.BasicCardArray.push(new BasicCard(f, b));
  };
}

module.exports = BasicCard;