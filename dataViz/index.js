var express = require('express');
var path = require('path');
var fs = require('fs');
var ejs = require('ejs')
var app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/views/'));

app.get('/', function(req, res) {
	res.send("This is a tool developed by NASA and UC Berkeley in order to display key flight displays of a Boeing 737NG. In order to begin using the tool, load your input file into the 'data' folder." + 
		"\nPlease label the file 'raw.csv'. Then go to to localhost:3000/initialize to set up the simulation. In order to view your simulation please visit localhost:3000/simulation.");
});

app.get('/initialize', function(req, res) {
	console.log("Reading input data.");
	csvHandler(req, res);
});

app.get('/simulation', function(req, res) {
	fs.readFile('data/raw_formatted.txt', function(err, data) {
		var simList = data.toString();
		fs.readFile('data/eyetracking_formatted.txt', function(err, data) {
			if (err) return console.log(err);
			var eyeList = data.toString();
			res.render('framebuild.ejs', {simList:simList, eyeList: eyeList});
		})
	});
});

app.listen(app.get('port'), function() {
	console.log("Server started. Press Ctrl-C to terminate.");
});

function csvHandler(req, res) {
	fs.readFile('data/raw.csv', function(err, data){
		if (err) {
			return console.log(err);
		}
		var bufferString = data.toString();
		var arr = bufferString.split('\n');
		var jsonObj = [];
	    var headers = arr[0].split(',');
	    for(var i = 1; i < arr.length; i++) {
	      var data = arr[i].split(',');
	      var obj = {};
	      for(var j = 0; j < data.length; j++) {
	         obj[headers[j].trim()] = data[j].trim();
	      }
	      jsonObj.push(obj);
	    }

	    fs.writeFile('data/raw_formatted.txt', JSON.stringify(jsonObj), function(err) {
	    	if (err) throw err;
	    });
	});

	fs.readFile('data/eyetracking.csv', function(err, data){
		if (err) {
			return console.log(err);
		}
		var bufferString = data.toString();
		var arr = bufferString.split('\n');
		var jsonObj = [];
	    var headers = arr[0].split(',');
	    for(var i = 1; i < arr.length; i++) {
	      var data = arr[i].split(',');
	      var obj = {};
	      for(var j = 0; j < data.length; j++) {
	         obj[headers[j].trim()] = data[j].trim();
	      }
	      jsonObj.push(obj);
	    }

	    fs.writeFile('data/eyetracking_formatted.txt', JSON.stringify(jsonObj), function(err) {
	    	if (err) throw err;
	    	res.send("Parsing input data.");
	    });
	});

	console.log("Input data successfully parsed.")
}