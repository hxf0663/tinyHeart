var dataObj = function () {
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}
dataObj.prototype.draw = function () {
	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'white';
	// ctx1.fillText('num ' + this.fruitNum, canWidth * 0.5, canHeight - 50);
	// ctx1.fillText('double ' + this.double, canWidth * 0.5, canHeight - 80);
	ctx1.fillText('SCORE: ' + this.score, canWidth * 0.5, canHeight - 20);
	if(this.gameOver){
		this.alpha += deltaTime * 0.0005;
		this.alpha = this.alpha >1 ? 1 : this.alpha;
		ctx1.fillStyle = 'rgba(255, 255, 255, ' + this.alpha +')';
		ctx1.fillText('GAME OVER', canWidth * 0.5, canHeight * 0.5);
	}
	ctx1.restore();
}
dataObj.prototype.addScore = function () {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}