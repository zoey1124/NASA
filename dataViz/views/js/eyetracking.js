function drawTracking() {
	var object_being_viewed = raw_eyetracking[eyetracking_index]["DAS Object Name"];

	//Reset
	resetBorders();

	if (object_being_viewed.includes("Unknown")) {
		console.log("Pilot Is Viewing: NoData");
		$(".noDataDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1003")) {
		console.log("Pilot Is Viewing: PFD");
		$(".pfdDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1004")) {
		console.log("Pilot Is Viewing: ND");
		$(".ndDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1005")) {
		console.log("Pilot Is Viewing: OTW");
		$(".otwDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1006")) {
		console.log("Pilot Is Viewing: Upper EICAS");
		$(".upperEICASDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1007")) {
		console.log("Pilot Is Viewing: EFIS");
		$(".efisDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1008")) {
		console.log("Pilot Is Viewing: FMS");
		$(".fmsDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1009")) {
		console.log("Pilot Is Viewing: MCP");
		$(".mcpDiv").css("border", "5px solid #ff0000");
	} else if (object_being_viewed.includes("1010")) {
		console.log("Pilot Is Viewing: Lower EICAS");
		$(".lowerEICASDiv").css("border", "5px solid #ff0000");
	}
}

function resetBorders() {
	$(".noDataDiv").css("border", "2px solid black");
	$(".pfdDiv").css("border", "2px solid black");
	$(".ndDiv").css("border", "2px solid black");
	$(".otwDiv").css("border", "2px solid black");
	$(".upperEICASDiv").css("border", "2px solid black");
	$(".efisDiv").css("border", "2px solid black");
	$(".fmsDiv").css("border", "2px solid black");
	$(".mcpDiv").css("border", "0px solid black");
	$(".lowerEICASDiv").css("border", "2px solid black");
}