function HeadingDial(ctx, location, data) {
	this.ctx = ctx;
	this.data = data;
	this.loc = location;
	this.update = function(data) {
		this.data = data;
	}

	this.draw = function() {
		var x = this.loc.x;
		var y = this.loc.y;
		var wid = this.loc.width;
		var hei = this.loc.hei;

		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.arc(x, y + 50, wid + 50, 0, Math.PI, true);
		ctx.lineWidth = 3;
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(x,500);
		ctx.strokeStyle = 'white';
		var r = wid + 20;
		theta = (this.data.hdg_angle) * (Math.PI/180);
		var newX = x - (r*Math.cos(theta));
		var newY = y - (r*Math.sin(theta));
		console.log(newX, newY);
		ctx.lineTo(newX, newY);
		ctx.stroke();

		ctx.fillStyle = 'white';
		ctx.fillRect(x - 25, y - wid + 1, 50, 20);

		ctx.fillStyle = 'black';
		ctx.fillRect(x - 23, y - wid + 3, 46, 16);

		ctx.font = "15px Arial";
		ctx.fillStyle = 'white';
		var l = ctx.measureText(this.data.hdg_angle)['width'];
		ctx.fillText(this.data.hdg_angle, x - (l/2), y - wid + 17);

		ctx.font = "14px Arial";
		ctx.fillStyle = "#5afc03";
		var l = ctx.measureText(this.data.radio_alt)['width'];
		ctx.fillText(2400, x - (l/2), y-wid-4);

	}
}