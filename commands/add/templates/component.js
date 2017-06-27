const ViewComponent = require('./../../../view-component');
const template = require('./<%= fsName %>.mustache');

/**
 * <%= description %>
 */
class <%= className %> extends ViewComponent {

    /**
     * @constructor
     * @param {ViewComponent} parentComponent
     * @param {Object} data
     * @param {HTMLElement} elementToRender
     * @param {HTMLElement} [nextElement]
     */

    constructor(parentComponent, data, elementToRender, nextElement) {
        super(parentComponent, data, elementToRender, nextElement);

        this._el = this.renderTemplate(template, data);
        this._style = require('./style');

        this.render();
    }
}

module.exports = <%= className %>;
