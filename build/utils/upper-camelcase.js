module.exports = function upperCamelcase(str, formatter = '_') {
    if (!str) return '';
    let strArray = str.split(formatter);
    let result = [];
    for (let i = 0; i < strArray.length; i++) {
        let item = strArray[i].toString();
        result.push(item.charAt(0).toUpperCase() + item.slice(1))
    }
    return result.join('');
}
