import { get } from './cookies.js';

const months = document.querySelector('h1'),
	weeks = document.querySelector('h2'),
	days = document.querySelector('h3'),
	hours = document.querySelector('h4'),
	minutes = document.querySelector('h5'),
	seconds = document.querySelector('h6');

const d1 = Date.now();

let c = get('date'),
	d2 = new Date();

if (c == null) d2.setFullYear(d2.getFullYear() + 1);
else d2 = new Date(c);
console.log(d2);

const secondsDiff = (d1, d2) => {
	return Math.floor(Math.abs(d1 - d2) / 1000);
};

const minutesDiff = (d1, d2) => {
	return Math.floor(secondsDiff(d1, d2) / 60);
};

const hoursDiff = (d1, d2) => {
	return Math.floor(minutesDiff(d1, d2) / 60);
};

const daysDiff = (d1, d2) => {
	return Math.floor(hoursDiff(d1, d2) / 24);
};

const weeksDiff = (d1, d2) => {
	return Math.floor(daysDiff(d1, d2) / 7);
};

const yearsDiff = (d1, d2) => {
	return new Date(d1).getFullYear() - new Date(d2).getFullYear();
};

const monthsDiff = (d1, d2) => {
	return (daysDiff(d1, d2) / 30).toFixed(1);
};

months.innerHTML = `${monthsDiff(d1, d2)} <span class='grey'>MONTHS</span>`;
weeks.innerHTML = `${weeksDiff(d1, d2)} <span class='grey'>WEEKS</span>`;
days.innerHTML = `${daysDiff(d1, d2)} <span class='grey'>DAYS</span>`;
hours.innerHTML = `${hoursDiff(d1, d2)} <span class='grey'>HOURS</span>`;
minutes.innerHTML = `${minutesDiff(d1, d2)} <span class='grey'>MINUTES</span>`;
seconds.innerHTML = `${secondsDiff(d1, d2)} <span class='grey'>SECONDS</span>`;

setInterval(() => {
	months.innerHTML = `${monthsDiff(Date.now(), d2)} <span class='grey'>MONTHS</span>`;
	weeks.innerHTML = `${weeksDiff(Date.now(), d2)} <span class='grey'>WEEKS</span>`;
	days.innerHTML = `${daysDiff(Date.now(), d2)} <span class='grey'>DAYS</span>`;
	hours.innerHTML = `${hoursDiff(Date.now(), d2)} <span class='grey'>HOURS</span>`;
	minutes.innerHTML = `${minutesDiff(Date.now(), d2)} <span class='grey'>MINUTES</span>`;
	seconds.innerHTML = `${secondsDiff(Date.now(), d2)} <span class='grey'>SECONDS</span>`;
}, 1000);
