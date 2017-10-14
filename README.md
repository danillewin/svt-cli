# svt-cli
# Установка
Ставим глобально.
```
npm install -g svt-cli
```
# Команды
Для доступа к описанию команд из терминала:
```
svt -h
```

Для проверки версии:
```
svt -V
```
## build
Собирает все компоненты.
#### _Формат_
```
svt build [options] [name]
```
#### _Параметры_
```name``` - опциональный параметр, при наличии которого, осуществляется сборка только указанного компонента.

#### _Опции_
```-o, --open``` - открыть компонент в браузере после сборки, работает только при наличии парметра ```name```.

#### _Примеры использования_
Cобрать все компоненты:
```
svt build
```
Cобрать компоненты поискового оффера:
```
svt build search-offer
```
Cобрать и открыть в браузере компонент попапа модели:
```
svt build -o model-popup
```

### open
Открывает собранный компонент в Яндекс.Браузере.
#### _Формат_
```
svt open <name>
```
#### _Параметры_
```name``` - обязательный параметр, имя компонента, который хотим открыть в браузере.
## add
* создает в _components/desktop/new_ папку с именем компонента
* создает в ней _.js_ файл с шаблоном описания класса
```(javascript)
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

```
* папку _data_ и файл _full.js_, данные компонента


```
svt add
Добавляет заготовку для нового компонента:
```
## start
```
svt start <name>
```
