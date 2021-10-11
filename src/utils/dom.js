const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g; //eslint-disable-line
const MOZ_HACK_REGEXP = /^moz([A-Z])/; //eslint-disable-line
const ieVersion = Number(document.documentMode);

const trim = function(string) {
	return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, ''); //eslint-disable-line
};

const camelCase = function(name) {
	return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
		return offset ? letter.toUpperCase() : letter;
	}).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

export function hasClass(el, cls) {
	if (!el || !cls) return false;
	if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	if (el.classList) {
		return el.classList.contains(cls);
	} else {
		return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
}

export function removeClass(el, cls) {
	if (!el || !cls) return;
	var classes = cls.split(' ');
	var curClass = ' ' + el.className + ' ';

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else if (hasClass(el, clsName)) {
			curClass = curClass.replace(' ' + clsName + ' ', ' ');
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
}

export function addClass(el, cls) {
	if (!el) return;
	var curClass = el.className;
	var classes = (cls || '').split(' ');

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.add(clsName);
		} else if (!hasClass(el, clsName)) {
			curClass += ' ' + clsName;
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
}


export const getStyle = ieVersion < 9 ? function(element, styleName) {
	// if (isServer) return;
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'styleFloat';
	}
	try {
		switch (styleName) {
			case 'opacity':
				try {
					return element.filters.item('alpha').opacity / 100;
				} catch (e) {
					return 1.0;
				}
			default:
				return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
		}
	} catch (e) {
		return element.style[styleName];
	}
} : function(element, styleName) {
	// if (isServer) return;
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		var computed = document.defaultView.getComputedStyle(element, '');
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch (e) {
		return element.style[styleName];
	}
};


export function getDomChildren(curEle,tagName){
	let nodeList = curEle.childNodes;
	let ary = [];
	if(/MSIE(6|7|8)/.test(navigator.userAgent)){
		for(let i=0;i<nodeList.length;i++){
			let curNode = nodeList[i];
			if(curNode.nodeType ===1){
				ary[ary.length] = curNode;
			}
		}
	}else{
		ary = Array.prototype.slice.call(curEle.children);
	}

	// 获取指定子元素
	if(typeof tagName === "string"){
		for(let k=0;k<ary.length;k++){
			let curTag = ary[k];
			if(curTag.nodeName.toLowerCase() !== tagName.toLowerCase()){
				ary.splice(k,1);
				k--;
			}
		}
	}

	return ary;
}
