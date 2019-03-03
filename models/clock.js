

const sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true;

const h2 = document.getElementById('clock');

// display current time by the second
const currentTime = setInterval(function () {
	const date = new Date();

	const hours = (12 - (date.getHours()));
	// const hours = date.getHours();

	const minutes = date.getMinutes();

	const seconds = date.getSeconds();

	const ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


	//convert military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}


	h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

}, 1000);


/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {

	return (time < 10) ? "0" + time : time;

}

function hoursMenu() {

	const select = document.getElementById('alarmhrs');
	const hrs = 12

	for (i = 1; i <= hrs; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

	}
}
hoursMenu();

function minMenu() {

	const select = document.getElementById('alarmmins');
	const min = 59;

	for (i = 0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

function secMenu() {

	const select = document.getElementById('alarmsecs');
	const sec = 59;

	for (i = 0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();


function alarmSet() {

	const hr = document.getElementById('alarmhrs');

	const min = document.getElementById('alarmmins');

	const sec = document.getElementById('alarmsecs');

	const ap = document.getElementById('ampm');


	const selectedHour = hr.options[hr.selectedIndex].value;
	const selectedMin = min.options[min.selectedIndex].value;
	const selectedSec = sec.options[sec.selectedIndex].value;
	const selectedAP = ap.options[ap.selectedIndex].value;

	const alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
	console.log('alarmTime:' + alarmTime);

	document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;


	//when alarmtime is equal to currenttime then play a sound
	const h2 = document.getElementById('clock');

	/*function to calcutate the current time 
	then compare it to the alarmtime and play a sound when they are equal
	*/

	setInterval(function () {

		const date = new Date();

		const hours = (12 - (date.getHours()));
		// const hours = date.getHours();

		const minutes = date.getMinutes();

		const seconds = date.getSeconds();

		const ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


		//convert military time to standard time

		if (hours < 0) {
			hours = hours * -1;
		} else if (hours == 00) {
			hours = 12;
		} else {
			hours = hours;
		}

		const currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;


		if (alarmTime == currentTime) {
			sound.play();
		}

	}, 1000);


	// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
}
