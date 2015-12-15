var forecasts  = {
	'10004': {
		temperature: 25,
		chanceRain: 80
	},
	'10012': {
		temperature: 65,
		chanceRain: 50
	},
	'10020': {
		temperature: 75,
		chanceRain: 30
	},
	'10022': {
		temperature: 85,
		chanceRain: 20
	}
};


var subways = {
	'N' : {
		issue: 'yes',
		asOfTime: '9:00am'
	},
	'Q' : {
		issue: 'no',
		asOfTime: '10:50am'
	},
	'R' : {
		issue: 'no',
		asOfTime: '8:30am'
	}
}

var classmates = {
	ameliak: 'Amelia Kaufman',
	bourquesue: 'Angela Scerbo',
	brooks: 'Brooks Swinnerton',
	etaymor: 'Emerson Taymor',
	angela_scerbo: 'Sue Bourque',
	cachung: 'Chris Poulos',
	chrispoulos: 'Caroline Chung',
	dgilroy: 'Dean Gilroy',
	gray: 'Gray Beltran',
	jmeyer: 'J.Meyer',
	karenlanci: 'Karen Lanci',
	tompastorello: 'Tom Pastorello'
}


var riddles = [
	"The eight of us go forth not back to protect our king from a foes attack.",
	"There are three men in a boat with four cigarettes but no matches. How do they manage to smoke?",
	"What is it that's always coming but never arrives?",
	"Tear one off and scratch my head what was red is black instead.",
	"Does a pound of gold or a pound of feathers weight more?",
	"What always goes to bed with its shoes on?",
	"Mary's mother had 4 daughters. May, June, July, and.....?",
	"What number do you get when you multiply all of the numbers on a telephone's number pad?",
	"What is brown and sticky?"
]

module.exports = function(robot) {



	robot.respond(/poncho subway (.*)$/i, function(msg) {
		var subwayLine = msg.match[1];
		var condition = subways[subwayLine];
		if (condition.issue === 'yes') {
			var warning = ':exclamation:';
			msg.send(warning + 'The '+ subwayLine + ' is experiencing issues as of ' + condition.asOfTime + '.');
		} else if(condition.issue === 'no') {
			var noWarning = ':ok_hand:';
			msg.send(noWarning + 'The '+ subwayLine + ' is running with no delays ' + condition.asOfTime + '.');
		}
	});
	
	robot.respond(/poncho (?!subway|weather)\w+/i, function(msg) {
		msg.send(msg.random(riddles));
	});

	robot.respond(/poncho weather (.*)/i, function(msg) {
		var zipCode = msg.match[1];
		var forecast = forecasts[zipCode];
		if (forecast.chanceRain >= 65 && forecast.temperature <= 28) {
			var sky = ':snow_cloud:';
			msg.send(sky + ' The temperature for ' + zipCode + ' is ' + forecast.temperature + 'C and the chance of show is ' + forecast.chanceRain + '%.');
		} else if (forecast.chanceRain <= 64 && forecast.chanceRain >= 45 && forecast.temperature <= 65 && forecast.temperature >= 29) {
			var sky = ':rain_cloud:';
			msg.send(sky + ' The temperature for ' + zipCode + ' is ' + forecast.temperature + 'C and the chance of rain is ' + forecast.chanceRain + '%.');
 
		} else if (forecast.chanceRain <= 44 && forecast.chanceRain >= 25 && forecast.temperature <= 75 && forecast.temperature >= 66 ) {
			var sky = ':sun_small_cloud:';
			msg.send(sky + ' The temperature for ' + zipCode + ' is ' + forecast.temperature + 'C and the chance of rain is ' + forecast.chanceRain + '%. Get out there it\'s beautiful!');

		} else if(forecast.chanceRain <= 24 && forecast.temperature >= 76) {
			var sky = ':sunny:'
			msg.send(sky + ' The temperature for ' + zipCode + ' is ' + forecast.temperature + 'C and the chance of rain is ' + forecast.chanceRain + '%. Get out there, it\'s pretty much the perfect day.');
		}
	});

	robot.hear (/how will the weather affect my hair|hair|what will my hair be like in this weather|humidity/i, function(msg) {
			var hairWeather = "http://gabwhite.com/weather/";
			var hair = ':massage:';
			var userName = msg.message.user.name;
			var realName = classmates[userName];
	    	msg.send(hair + " Relax " + realName + ". We've got you covered! Head over to " + hairWeather + '.');
	});

};
