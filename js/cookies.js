/**
 * cookie handler
 *
 * @param {string} n - name
 * @param {any} v - value
 * @param {integer} a - days to expire
 * @param {string} d - domain eg. myhome.me
 * @param {string} p - path default is '/'
 * @param {boolean} s - secure cookie?
 */

const set = (n, v, a, d, p, s) => {
	var c = n + '=' + unescape(v);
	c += d ? '; domain=' + d : '';
	c += a ? '; max-age=' + a * 24 * 60 * 60 : '';
	c += p ? '; path=' + p : '';
	c += s ? '; secure' : '';

	document.cookie = c;
	return document.cookie;
};

const del = (n, d, p) => {
	var c = n + '=; max-age=0';
	c += d ? '; domain=' + d : '';
	c += p ? '; path=' + p : '';

	document.cookie = c;
	return document.cookie;
};

const get = (n) => {
	const b = document.cookie.match('(^|;)\\s*' + n + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : undefined;
};

export { set, del, get };
