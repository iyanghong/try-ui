const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

export function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}


export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

export function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isHtmlElement(node) {
    return node && node.nodeType === Node.ELEMENT_NODE;
}

export const isFunction = (fn) => {
    let checkType = Object.prototype.toString.call(fn);
    return fn && (checkType === '[object Function]' || checkType === '[object AsyncFunction]');
};

export const isUndefined = (val) => {
    return val === void 0;
};

export const isDefined = (val) => {
    return val !== undefined && val !== null;
};

export function isPromise(obj) {

    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

}