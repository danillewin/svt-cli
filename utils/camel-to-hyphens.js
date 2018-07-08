const camelToHyphens = function(name) {
    return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

module.exports = camelToHyphens;
