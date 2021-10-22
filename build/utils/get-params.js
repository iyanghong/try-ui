function resolveParamKey(key) {
    if (key.indexOf('--') === 0) {
        return key.slice(2);
    } else if (key.indexOf('-') === 0) {
        return key.slice(1);
    }
    return key

}

module.exports = function getParams(processArgv, startIndex = 2, clearFormat = true) {
    if (typeof processArgv !== 'object') return {};
    let argv = JSON.parse(JSON.stringify(processArgv)).splice(startIndex)
    let args = {};
    for (let argString of argv) {
        let arg = argString.split('=');
        let key = arg.length > 0 ? arg[0] : '';
        let value = arg.length > 1 ? arg[1] : true
        if (key) {
            clearFormat ? args[resolveParamKey(key)] = value : args[key] = value;
        }
    }
    return args;
};
