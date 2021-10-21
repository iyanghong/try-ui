/**
 * Created by yh on 2021/7/16
 */
let loadingList = {};

export function loadJs(url, type = 'text/javascript') {
	return new Promise((resolve, reject) => {
		let checkScript = document.querySelector('script[src="' + url + '"]');
		//检查是否存在该链接资源
		if (checkScript) {
			let checkScriptGuid = checkScript.getAttribute('load-guid');
			//判断该链接是不是异步载入
			if (checkScriptGuid) {
				//为了防止多次同时请求而上一次未加载完成，导致本次找不到资源问题,写个计时器去判断是否加载成功
				let timer = setInterval(() => {
					if (!loadingList[checkScriptGuid]) {
						clearInterval(timer);
						resolve();
					}
				}, 50)
			} else {
				resolve();
			}
			return;
		}
		let guid = getGuid();
		let script = document.createElement('script')
		script.type = type;
		script.src = url;
		script.setAttribute('asyn-load', new Date().getTime());
		script.setAttribute('load-guid', guid);
		script.onload = () => {
			loadingList[guid] = false;
			resolve();
		}
		script.onerror = () => {
			reject();
		}
		loadingList[guid] = true;
		document.body.appendChild(script);

	})
}

export function loadCss(url) {
	return new Promise((resolve, reject) => {
		let hasCss = document.querySelector('link[rel="stylesheet"][type="text/css"][href="' + url + '"]');
		if (hasCss) {
			resolve();
			return;
		}
		let css = document.createElement('link');
		css.href = url;
		css.rel = 'stylesheet';
		css.type = 'text/css';
		css.onload = () => {
			resolve();
		}
		css.onerror = () => {
			reject();
		}
		document.head.appendChild(css);
	});
}

export function getGuid(format) {
	let guid = "";
	for (let i = 1; i <= 32; i++) {
		let n = Math.floor(Math.random() * 16.0).toString(16);
		guid += n;
		if (format && (i === 8 || i === 12 || i === 16 || i === 20)) guid += "-";
	}
	return guid;
}
