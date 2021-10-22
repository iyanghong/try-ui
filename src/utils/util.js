export const extend = function (to, _from) {
	for (let key in _from) {
		to[key] = _from[key];
	}
	return to;
}

export const generateId = function () {
	return Math.floor(Math.random() * 10000);
}
export const generateUuid = function (min = 32, max = 32) {
	min = min || 32;
	max = max || min;
	let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	let maxPos = $chars.length;
	let result = '';
	let range = min;
	if (min !== max) {
		range = Math.round(Math.random() * (max - min)) + min;
	}
	for (let i = 0; i < range; i++) {
		result += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return result;
}

export const valueEquals = (a, b) => {
	// see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
	if (a === b) return true;
	if (!(a instanceof Array)) return false;
	if (!(b instanceof Array)) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i !== a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

export const autoprefixer = function (style) {
	if (typeof style !== 'object') return style;
	const rules = ['transform', 'transition', 'animation'];
	const prefixes = ['ms-', 'webkit-'];
	rules.forEach(rule => {
		const value = style[rule];
		if (rule && value) {
			prefixes.forEach(prefix => {
				style[prefix + rule] = value;
			});
		}
	});
	return style;
};


export const isEmpty = function (val) {
	// null or undefined
	if (val == null) return true;

	if (typeof val === 'boolean') return false;

	if (typeof val === 'number') return !val;

	if (val instanceof Error) return val.message === '';

	switch (Object.prototype.toString.call(val)) {
		// String or Array
		case '[object String]':
		case '[object Array]':
			return !val.length;

		// Map or Set or File
		case '[object File]':
		case '[object Map]':
		case '[object Set]': {
			return !val.size;
		}
		// Plain Object
		case '[object Object]': {
			return !Object.keys(val).length;
		}
	}

	return false;
};


export const EventListener = {
	/**
	 * Listen to DOM events during the bubble phase.
	 *
	 * @param {DOMEventTarget|Element|Document} target DOM element to register listener on.
	 * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	 * @param {function} callback Callback function.
	 * @return {object} Object with a `remove` method.
	 */
	listen(target, eventType, callback) {
		if (target.addEventListener) {
			target.addEventListener(eventType, callback, false);
			return {
				remove() {
					target.removeEventListener(eventType, callback, false);
				}
			};
		} else if (target.attachEvent) {
			target.attachEvent('on' + eventType, callback);
			return {
				remove() {
					target.detachEvent('on' + eventType, callback);
				}
			};
		}
	}
};

/**
 * 首字母大写
 * @param str
 * @returns {string|*}
 */
export const firstToUpperCase = function (str) {
	if (str) {
		str = str.toString();
		return str.charAt(0).toUpperCase() + str.slice(1)
	}
	return str;
}


