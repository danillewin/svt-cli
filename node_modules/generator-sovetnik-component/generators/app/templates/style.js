const SovetnikStyle = require('./../../../../sovetnik-style/sovetnik-style');

module.exports = new SovetnikStyle([
    require('./../../../../styles/desktop/css-new/common.css'),
    require('./../../../../styles/desktop/css-new/<%= cssName %>.css')
]);
