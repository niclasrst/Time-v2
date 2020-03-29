// modal
const modal = () => {
	let elems = [
		document.querySelector('.modal'),
		document.querySelector('.date'),
		document.getElementById('day'),
		document.getElementById('month'),
		document.getElementById('year'),
		document.getElementById('dayL'),
		document.getElementById('monthL'),
		document.getElementById('yearL'),
		document.querySelector('.button')
	];

	if (elems[0].classList.contains('active')) {
		elems.forEach((e) => {
			e.classList.add('inactive');
			e.classList.remove('active');
		});
	} else {
		elems.forEach((e) => {
			e.classList.add('active');
			e.classList.remove('inactive');
		});
	}
};
