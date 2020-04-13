function MiscSim() {
	var self = this;
	self.memory = {

	}

	this.draw = function(ctx, ctxWid, ctxHei) {
		//Full Reset
		ctx.clearRect(0, 0, ctxWid, ctxHei);
		ctx.fillStyle = 'black';

		ctx.arc(ctxWid/2, 125, ctxWid/3.5, 0, Math.PI, true);
		ctx.fill();

		ctx.lineWidth = 10;
		ctx.strokeStyle = 'black';
		ctx.moveTo(ctxWid/2, 120);
		var r = 80;
		var angle = 28;
		var theta = angle * (Math.PI/180)
		var rX = (ctxWid/2) - r*Math.cos(theta);
		var rY = 125 - r*Math.sin(theta);
		ctx.lineTo(rX, rY);
		ctx.stroke();
	}
}