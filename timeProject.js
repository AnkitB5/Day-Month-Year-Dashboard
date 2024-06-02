//Date & Time in counter section
setInterval(function() {
    var currentTime = new Date();
    document.getElementById('date').innerHTML = currentTime.toLocaleDateString()
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    
  }, 1000);

 //Progress Bar 
 var myYearCircle = document.getElementById('myYearCircle');
var yearProgressPercent = document.getElementById('yearProgressPct');
var yearProgressPercent2 = document.getElementById('yearProgressPct2');

// Initialize the start and target dates dynamically based on the current date
var currentYear = new Date().getFullYear();
var startDate = new Date(currentYear, 0, 1).getTime(); // January 1st of the current year
var targetDate = new Date(currentYear + 1, 0, 1).getTime(); // January 1st of the next year

function updateYearProgress() {
    var currentDate = new Date().getTime();
    const total = targetDate - startDate;
    const startToCurrent = currentDate - startDate;

    // Reset start and target dates if the current date has surpassed the target date
    if (currentDate >= targetDate) {
        startDate = targetDate; // Start of the new year
        targetDate = new Date(currentDate.getFullYear() + 1, 0, 1).getTime(); // Start of the year after the next
    }

    var yearProgress = (472 - ((startToCurrent / total) * 472));
    var yearProgressPct = ((startToCurrent / total) * 100).toFixed(2);
    yearProgressPercent.innerHTML = yearProgressPct + "%";
    yearProgressPercent2.innerHTML = yearProgressPct + "%";
    
    // Set the custom property to update the CSS animation dynamically
    myYearCircle.style.setProperty('--yearProgressAnim', yearProgress);
}

// Update the progress every second
setInterval(updateYearProgress, 1000);
updateYearProgress(); // Initial call to set the progress on load


var myMonthCircle = document.getElementById('myMonthCircle');
var monthProgressPercent = document.getElementById('monthProgressPct');
var monthProgressPercent2 = document.getElementById('monthProgressPct2');

// Set initial start and target months
var currentDate = new Date();
var startMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getTime();
var targetMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1).getTime();

function updateMonthProgress() {
    var currentDate = new Date().getTime();
    const total = targetMonth - startMonth;
    const startToCurrent = currentDate - startMonth;

    // Check if it's beyond the target month (January 2025)
    if (currentDate >= targetMonth) {
        startMonth = targetMonth;
        targetMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1).getTime();
    }

    var monthProgress = (472 - ((startToCurrent / total) * 472));
    var monthProgressPct = (((startToCurrent / total) * 100)).toFixed(2);
    monthProgressPercent.innerHTML = monthProgressPct + "%";
    monthProgressPercent2.innerHTML = monthProgressPct + "%";
    
    // Set the custom property to update the CSS animation dynamically
    myMonthCircle.style.setProperty('--monthProgressAnim', monthProgress);
}
setInterval(updateMonthProgress, 1000);
updateMonthProgress();

var myDayCircle = document.getElementById('myDayCircle');
var dayProgressPercent = document.getElementById('dayProgressPct');
var dayProgressPercent2 = document.getElementById('dayProgressPct2');

// Set initial start and target days
var startDay = new Date();
startDay.setHours(0, 0, 0, 0); // Set to 12:00:00 AM

var targetDay = new Date(startDay);
targetDay.setDate(startDay.getDate() + 1);

function updateDayProgress() {
    var currentDay = new Date().getTime();
    const total = targetDay - startDay;
    const startToCurrent = currentDay - startDay;

    if (startToCurrent >= total) {
        targetDay.setDate(targetDay.getDate() + 1);
        startDay = new Date();
        startDay.setHours(0, 0, 0, 0);
    }

    var dayProgress = (472 - ((startToCurrent / total) * 472));
    var dayProgressPct = (((startToCurrent / total) * 100)).toFixed(2);
    dayProgressPercent.innerHTML = dayProgressPct + "%";
    dayProgressPercent2.innerHTML = dayProgressPct + "%";
    
    myDayCircle.style.setProperty('--dayProgressAnim', dayProgress);
}

setInterval(updateDayProgress, 1000);
updateDayProgress();

