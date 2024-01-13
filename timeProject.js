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
    
function updateYearProgress() {
    var currentDate = new Date().getTime();
    var startDate = new Date("2024-01-01T00:00:00").getTime();
    var targetDate = new Date("2025-01-01T00:00:00").getTime();

    const total = targetDate - startDate;
    const startToCurrent = currentDate - startDate;

    // Check if it's beyond the target date (2025)
    if (startToCurrent >= total) {
        // Reset targetDate to the next year
        targetDate = new Date(targetDate).setFullYear(new Date(targetDate).getFullYear() + 1);
        startDate = currentDate;
    }

    var yearProgress = (472 - ((startToCurrent / total) * 472));
    var yearProgressPct = (((startToCurrent / total) * 100)).toFixed(2);
    yearProgressPercent.innerHTML = yearProgressPct + "%";
    yearProgressPercent2.innerHTML = yearProgressPct + "%";
    
    // Set the custom property to update the CSS animation dynamically
    myYearCircle.style.setProperty('--yearProgressAnim', yearProgress);
}

setInterval(updateYearProgress, 1000);

updateYearProgress();

var myMonthCircle = document.getElementById('myMonthCircle');
var monthProgressPercent = document.getElementById('monthProgressPct');
var monthProgressPercent2 = document.getElementById('monthProgressPct2');

// Set initial start and target months
var startMonth = new Date("2024-01-01T00:00:00").getTime();
var targetMonth = new Date("2024-02-01T00:00:00").getTime();

function updateMonthProgress() {
    var currentDate = new Date().getTime();
    const total = targetMonth - startMonth;
    const startToCurrent = currentDate - startMonth;

    // Check if it's beyond the target month (January 2025)
    if (startToCurrent >= total) {
        targetMonth = new Date(targetMonth).setMonth(new Date(targetMonth).getMonth() + 1);
        startMonth = currentDate;
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

