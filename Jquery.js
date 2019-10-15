// Jquery code for Daily planner


// Pull saved content
// init();


// Array for time block propogation works but bootstrap is not allowing it to show
var timesEl = [ "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm" ];
var timeDiv = $(".container");
for (var i = 0; i < timesEl.length; i++) {
    var newDiv = $("<div>" + timesEl[i] + "</div>");
    timeDiv.append(newDiv);
};
// Time running function

// Current Day Generator

// Time block variables




// display date at top

// color blocks based on past present and future

// saving function

// event listener for save content

// generate saved content function