// JavaScript for making the announcement editable
var announcement = document.getElementById('announcement');
var editButton = document.getElementById('editButton');

var initialText = announcement.textContent;

editButton.addEventListener('click', function() {
  var newText = prompt("Enter new announcement text:", initialText);
  if (newText !== null && newText !== "") {
    announcement.textContent = newText;
    initialText = newText;
  }
});
editButton.addEventListener("mouseover",()=>{
  editButton.innerHTML = 'Edit HeadLine &#9998;';
})
editButton.addEventListener("mouseout",()=>{
  editButton.innerHTML = '&#9998;';
})



// DOM elements
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var takeShortBreak = document.getElementById('takeShortBreak');
var takeLongBreak = document.getElementById('takeLongBreak');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var lbm = document.getElementById('l_minutes');
var lbs = document.getElementById('l_seconds');

var counter = document.getElementById('counter');


var startTimer;
var workDuration = 25; // in minutes
var breakDuration = 5; // in minutes
var longBreakDuration = 15; // in minutes
var currentPhase = 'work'; // current phase: 'work', 'break', 'longBreak'
var cycleCount = 0;

start.addEventListener('click', function() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener('click', function() {
  resetTimers();
});

stop.addEventListener('click', function() {
  stopInterval();
});

takeShortBreak.addEventListener('click', function() {
  if (currentPhase === 'work') {
    currentPhase = 'break';
    bm.innerText = breakDuration;
    bs.innerText = '00';
  }
});

takeLongBreak.addEventListener('click', function() {
  if (currentPhase === 'work') {
    currentPhase = 'longBreak';
    lbm.innerText = longBreakDuration;
    lbs.innerText = '00';
  }
});

// Start Timer Function
function timer() {
  if (currentPhase === 'work') {
    if (parseInt(ws.innerText) > 0) {
      ws.innerText = formatTime(parseInt(ws.innerText) - 1);
    } else if (parseInt(wm.innerText) > 0) {
      ws.innerText = '59';
      wm.innerText = formatTime(parseInt(wm.innerText) - 1);
    } else {
      switchPhase();
    }
  } else if (currentPhase === 'break') {
    if (parseInt(bs.innerText) > 0) {
      bs.innerText = formatTime(parseInt(bs.innerText) - 1);
    } else if (parseInt(bm.innerText) > 0) {
      bs.innerText = '59';
      bm.innerText = formatTime(parseInt(bm.innerText) - 1);
    } else {
      switchPhase();
    }
  } else if (currentPhase === 'longBreak') {
    if (parseInt(lbs.innerText) > 0) {
      lbs.innerText = formatTime(parseInt(lbs.innerText) - 1);
    } else if (parseInt(lbm.innerText) > 0) {
      lbs.innerText = '59';
      lbm.innerText = formatTime(parseInt(lbm.innerText) - 1);
    } else {
      switchPhase();
    }
  }
}

// Function to format time (add leading zero if necessary)
function formatTime(time) {
  return (time < 10) ? '0' + time : time;
}

// Function to switch between work, break, and long break phases
function switchPhase() {
  if (currentPhase === 'work') {
    if (cycleCount > 0 && cycleCount % 4 === 0) { // Every 4 Pomodoros, take a long break
      currentPhase = 'longBreak';
      lbm.innerText = longBreakDuration;
      lbs.innerText = '00';
    } else { // Regular short break after each Pomodoro
      currentPhase = 'break';
      bm.innerText = breakDuration;
      bs.innerText = '00';
    }
    cycleCount++;
    counter.innerText = cycleCount;
  } else if (currentPhase === 'break' || currentPhase === 'longBreak') {
    currentPhase = 'work';
    wm.innerText = workDuration;
    ws.innerText = '00';
  }
}

// Function to stop the timer
function stopInterval() {
  clearInterval(startTimer);
  startTimer = undefined;
}

// Function to reset all timers and counters
function resetTimers() {
  stopInterval();
  wm.innerText = workDuration;
  ws.innerText = '00';
  bm.innerText = breakDuration;
  bs.innerText = '00';
  lbm.innerText = longBreakDuration;
  lbs.innerText = '00';
  counter.innerText = '0';
  cycleCount = 0;
  currentPhase = 'work';
}

// Initialize the work timer display
wm.innerText = workDuration;


// floating emoji
const emojiButtons = document.querySelectorAll('.emoji-button');
    const emojiContainer = document.querySelector('.emoji-container');
    emojiButtons.forEach(button => {
        button.addEventListener('click', () => {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = button.textContent;
            // Set initial position to the top of the container
            emoji.style.top = `20px`;
            // Randomize the initial horizontal position
            const randomX = Math.random() * emojiContainer.clientWidth;
            emoji.style.left = `${randomX}px`;
            // Append the emoji to the container
            emojiContainer.appendChild(emoji);
            // Remove the emoji after the animation ends
            emoji.addEventListener('animationend', () => {
                emoji.remove();
            });
        });
    });




// -------------------------------



