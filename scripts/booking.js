/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numDaysSelected = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');

const calculatedCostEl = document.getElementById('calculated-cost');
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function resetAndSetButtonStates(element) {
    if (element == mondayButton) {
        mondayButton.classList.remove('blue-hover');
    }
    else if (element == tuesdayButton) {
        tuesdayButton.classList.remove('blue-hover');
    }
    else if (element == wednesdayButton) {
        wednesdayButton.classList.remove('blue-hover');
    }
    else if (element == thursdayButton) {
        thursdayButton.classList.remove('blue-hover');
    }
    else {
        fridayButton.classList.remove('blue-hover');
    }
    element.classList.add('clicked');
}

function resetDays() {
    mondayButton.classList.remove('clicked');
    mondayButton.classList.add('blue-hover');
    tuesdayButton.classList.remove('clicked');
    tuesdayButton.classList.add('blue-hover');
    wednesdayButton.classList.remove('clicked');
    wednesdayButton.classList.add('blue-hover');
    thursdayButton.classList.remove('clicked');
    thursdayButton.classList.add('blue-hover');
    fridayButton.classList.remove('clicked');
    fridayButton.classList.add('blue-hover');
}

function onDayofWeekButtonClicked(e) {
    e.preventDefault();
    const { target } = e;
    if (target.classList.contains('blue-hover')) {
        numDaysSelected += 1;
    }
    resetAndSetButtonStates(target);
}

mondayButton.onclick = onDayofWeekButtonClicked;
tuesdayButton.onclick = onDayofWeekButtonClicked;
wednesdayButton.onclick = onDayofWeekButtonClicked;
thursdayButton.onclick = onDayofWeekButtonClicked;
fridayButton.onclick = onDayofWeekButtonClicked;

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.onclick = function(e) {
    e.preventDefault();
    resetDays();
    halfButton.classList.remove('clicked');
    fullButton.classList.add('clicked');
    calculatedCostEl.textContent = 0;
    numDaysSelected = 0;
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.onclick = function(e) {
    e.preventDefault();
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    costPerDay = 20;
    recalculate();
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.onclick = function(e) {
    e.preventDefault();
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costPerDay = 35;
    recalculate();
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    calculatedCostEl.textContent = costPerDay * numDaysSelected;
}
