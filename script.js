function myFunction() {
	
	var x = document.getElementById('demo');
    if (x.style.color === 'yellow') {
        x.style.color = 'blue';
    } else {
		document.getElementById("demo").style.color = "yellow";
    }
}

//Task 2
function Event(name,date,timeRange) {
    this.name = name;
    this.date = date;
    this.timeRange = timeRange;
};

var events = [];

var events.push(new Event("Interview at The Portal", [2, 23, 2017],[15,16.50]));
var events.push(new Event("Lunch with Cindy", [2, 25, 2017],[12,13]));
var events.push(new Event("Dinner with John", [2, 24, 2017],[17,17.50]));
var events.push(new Event("Conference", [2, 24, 2017],[11,17.50]));

var events.push(new Event("Study with friend", [3,25,2017],[12, 13]));
var events.push(new Event("Buy food for the week", [2,25, 2017],[12, 13]));
var events.push(new Event("Go to Breakfest", [4,26, 2017],[7, 12]));
var events.push(new Event("Important meeting", [2,23,2017],[15,17]));

function CalanderEvents(events) {
	this.events = events; //list of events
	
	this.compare = function(event1, event2) {
		if (event1.date === event2.date) {
			if((event1.timeRange[0] < event2.timeRange[0] && event1.timeRange[0] > event2.timeRange[1]) && (event1.timeRange[1] > event2.timeRange[0] && event1.timeRange[1] < event2.timeRange[0])) {
				return false;
			} else {
				return true;
			}
		}
		return false;
	};
	
	this.eventNotIn = function(list, event1) {
		for (var num = 0; num < list.length; num++) {
			if (list[num] === event1) {
				return false;
			}
		}
		return true;
	};
	
	this.findConflict = function() {
		var conflictsList = [];
		for(var num = 0; num < this.events.length; num++) {
			for(var num2 = 0; num2 < this.events.length; num2++) { 
				if (num != num2 && this.compare(this.events[num],this.events[num2])) {
					if (eventNotIn(conflictsList,event[num])) {
						conflictsList.push(events[num]);
					}
				}
			}
		}
		return conflictsList;
	};
}

var calander = new CalanderEvents(events);
var conflicts = calander.findConflicts;




