const camelToHyphens = function(name) {
    return name.replace(/([a-z])([A-Z])/g, '$2-$1').toLowerCase();
};

module.exports = camelToHyphens;
