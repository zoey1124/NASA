// ######## Eyetracking Canvas Initialization ########
var eyeCvs = document.getElementById("eyeCanvas");
var eyeCtx = eyeCvs.getContext("2d");
var ctxWid = 1256;
var ctxHei = 809;

trackerQueue = [];

function drawTracking() {
	var object_being_viewed = raw_memory[data_index]["\"PGaze_Object_ID\""];
	var confidence = parseFloat(raw_memory[data_index]["\"Gaze_Confidence\""]);
	var x = parseFloat(raw_memory[data_index]["\"PGaze_X_Intersection\""]);
	var y = parseFloat(raw_memory[data_index]["\"PGaze_Y_Intersection\""]);

	//Reset
	resetBorders();
	eyeCtx.clearRect(0, 0, ctxWid, ctxHei);

	if (object_being_viewed === "0") {
		console.log("Pilot Is Viewing: Off AOI");
		$(".offAOIDiv").css("border", "6px solid #ff0000");
	} else if (confidence < 0.85) {
		console.log("Pilot Is Viewing: NoData");
		$(".noDataDiv").css("border", "6px solid #ff0000");
	} else if (object_being_viewed === "1003") {
		console.log("Pilot Is Viewing: PFD");
		origin = {id: "1003", x: 851, y: 715, wid: 400, hei: 400, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === "1004") {
		console.log("Pilot Is Viewing: ND");
		origin = {id: "1004", x: 445, y: 715, wid: 400, hei: 400, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === "1005") {
		console.log("Pilot Is Viewing: OTW");
		origin = {id: "1005", x: 2, y: 151, wid: 1060, hei: 150, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === ("1006")) {
		console.log("Pilot Is Viewing: Upper EICAS");
		origin = {id: "1006", x: 2, y: 556, wid: 250, hei: 243, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === ("1007")) {
		console.log("Pilot Is Viewing: EFIS");
		origin = {id: "1007", x: 970, y: 307, wid: 200, hei: 150, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === ("1008")) {
		console.log("Pilot Is Viewing: FMS");
		origin = {id: "1008", x: 260, y: 807, wid: 182, hei: 306, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === ("1009")) {
		console.log("Pilot Is Viewing: MCP");
		origin = {id: "1009", x: 2, y: 306, wid: 962, hei: 152, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	} else if (object_being_viewed === ("1010")) {
		console.log("Pilot Is Viewing: Lower EICAS");
		origin = {id: "1010", x: 2, y: 807, wid: 250, hei: 243, pgazeX: x, pgazeY: y};
		trackerQueue.push(origin);
	}

	drawTrackers();
}

function drawTrackers() {
	opacity = 0.9;
	radius = 40;
	tempStorage = [];
	while (trackerQueue.length > 0) {
		mostRecent = trackerQueue.pop();
		tempStorage.push(mostRecent);
		eyeCtx.fillStyle = "rgba(200, 0, 0, " + opacity + ")";

		var specX = mostRecent.x + (mostRecent.wid * mostRecent.pgazeX);
		var specY = mostRecent.y - (mostRecent.hei * mostRecent.pgazeY);

		eyeCtx.beginPath();
		eyeCtx.fillStyle = "rgba(200, 0, 0, " + opacity + ")";
		eyeCtx.arc(specX, specY, radius, 0, 2*Math.PI);
		eyeCtx.fill();

		/*eyeCtx.beginPath();
		eyeCtx.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
		eyeCtx.arc(specX, specY, 3, 0, 2*Math.PI);
		eyeCtx.fill();*/

		opacity = parseFloat(opacity) * 0.7;
		radius = radius * 0.7;
	}
	while (tempStorage.length >= 10) {
		tempStorage.pop();
	}
	if (tempStorage.length >= 2) {
		fromLine = tempStorage[0];
		toLine = tempStorage[1];
		eyeCtx.strokeStyle = "rgb(200, 0, 0)";
		eyeCtx.lineWidth = 4;
		eyeCtx.beginPath();
		eyeCtx.moveTo(fromLine.x + (fromLine.wid * fromLine.pgazeX), fromLine.y - (fromLine.wid * fromLine.pgazeY));
		eyeCtx.lineTo(toLine.x + (toLine.wid * toLine.pgazeX), toLine.y - (toLine.wid * toLine.pgazeY));
		eyeCtx.stroke();
		eyeCtx.lineWidth = 1;
		/*for (i = 0; i < (tempStorage.length - 1); i++) {
			fromLine = tempStorage[i];
			toLine = tempStorage[i+1];
			eyeCtx.strokeStyle = "rgb(200, 0, 0)";
			eyeCtx.lineWidth = 3;
			eyeCtx.beginPath();
			eyeCtx.moveTo(fromLine.x + (fromLine.wid * fromLine.pgazeX), fromLine.y - (fromLine.wid * fromLine.pgazeY));
			eyeCtx.lineTo(toLine.x + (toLine.wid * toLine.pgazeX), toLine.y - (toLine.wid * toLine.pgazeY));
			eyeCtx.stroke();
			eyeCtx.lineWidth = 1;
		}*/
	}

	trackerQueue = tempStorage.reverse();
}

function resetBorders() {
	$(".noDataDiv").css("border", "2px solid black");
	$(".offAOIDiv").css("border", "2px solid black");
}