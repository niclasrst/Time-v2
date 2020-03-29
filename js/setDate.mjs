// date stuff
import { set, get } from './cookies.js';

let dayDict = { 0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thur', 5: 'Fri', 6: 'Sat' };
let monthDict = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'June', 6: 'July', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' };

const func = () => {
	let day = document.getElementById('day'),
		month = document.getElementById('month'),
		year = document.getElementById('year'),
		dl = document.getElementById('dayL'),
		ml = document.getElementById('monthL'),
		yl = document.getElementById('yearL');

	let cookie = get('date');
	if (cookie == null) {
		var date = new Date();
		date.setFullYear(date.getFullYear() + 1);

		day.value = date.getDate();
		dl.innerHTML = dayDict[date.getDay()];

		month.value = date.getMonth() + 1;
		ml.innerHTML = monthDict[month.value - 1];

		year.value = date.getFullYear();
		yl.innerHTML = year.value;
	} else {
		var date = new Date(cookie);
		day.value = date.getDate();
		dl.innerHTML = dayDict[date.getDay()];

		month.value = date.getMonth() + 1;
		ml.innerHTML = monthDict[month.value - 1];

		year.value = date.getFullYear();
		yl.innerHTML = year.value;
	}

	day.addEventListener('input', (e) => {
		var date = new Date('' + month.value + ',' + day.value + ',' + year.value);
		dl.innerHTML = dayDict[date.getDay()];
	});

	month.addEventListener('input', (e) => {
		var date = new Date('' + month.value + ',' + day.value + ',' + year.value);
		dl.innerHTML = dayDict[date.getDay()];
		ml.innerHTML = monthDict[date.getMonth()];
	});

	year.addEventListener('input', (e) => {
		yl.innerHTML = year.value;
	});

	document.querySelector('.button').addEventListener('click', (e) => {
		set('date', new Date('' + month.value + ',' + day.value + ',' + year.value));
		setTimeout(() => {
			location.reload();
		}, 3000);
	});
};

const ready = (fn) => {
	if (document.readyState != 'loading') fn();
	else document.addEventListener('DOMContentLoaded', fn);
};

ready(func);
