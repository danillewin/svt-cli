const checkCamelCase = function(name) {
    return /^([A-Z][a-z0-9]+)+$/.test(name);
};

module.exports = checkCamelCase;
