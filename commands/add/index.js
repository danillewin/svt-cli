const inquirer = require('inquirer');
const path = require('path');
const memFs = require('mem-fs');
const editor = require('mem-fs-editor');

const store = memFs.create();
const fs = editor.create(store);

const camelToHyphens = require('./../../utils/camel-to-hyphens.js');
const checkCamelCase = require('./../../utils/check-camel-case.js');

const stylesPath = path.resolve('styles/desktop/css-new');
const componentsPath = path.resolve('components/desktop/new');
const templatesPath = path.resolve(__dirname, 'templates');

const validateComponentDescription = function(desc) {
    if (desc.length === 0) {
        return 'Description is required';
    }

    return true;
};

const validateComponentName = function(name) {
    if (!checkCamelCase(name)) {
        return 'Component\'s name must be CamelCased';
    }

    const fsName = camelToHyphens(name);
    const allreadyExist = fs.exists(`${componentsPath}/${fsName}/${fsName}.js`);

    if (allreadyExist) {
        return `${name}(${componentsPath}/${fsName}) allready exists`;
    }

    return true;
};

const addComponentScaffold = function(name, description) {
    const componentHtmlName = camelToHyphens(name);
    const componentCssName = camelToHyphens(name);
    const componentFsName = camelToHyphens(name);
    const componentJsName = name;

    fs.copyTpl(
        `${templatesPath}/component.js`,
        `${componentsPath}/${componentFsName}/${componentFsName}.js`,
        {
            className: componentJsName,
            fsName: componentFsName,
            description
        }
    );

    fs.copyTpl(
        `${templatesPath}/component.mustache`,
        `${componentsPath}/${componentFsName}/${componentFsName}.mustache`,
        {
            htmlName: componentHtmlName
        }
    );

    fs.copyTpl(
        `${templatesPath}/style.js`,
        `${componentsPath}/${componentFsName}/style.js`,
        {
            cssName: componentCssName
        }
    );

    fs.copyTpl(
        `${templatesPath}/data.js`,
        `${componentsPath}/${componentFsName}/data/full.js`,
        {
            description
        }
    );

    fs.copyTpl(
        `${templatesPath}/component.css`,
        `${stylesPath}/${componentFsName}.css`,
        {
            cssName: componentCssName
        }
    );

    fs.commit([], () => {
        console.log('\nYour component is done! \u{1F389}');
    });
};

const addComponent = function() {
    console.log('\nLet\'s ROCK! \u{1F918}\n');

    inquirer.prompt([
        {
            'type': 'input',
            'name': 'name',
            'message': 'Enter your new component\'s name',
            'validate': validateComponentName,
            'default': 'NewComponent'
        },
        {
            'type': 'input',
            'name': 'description',
            'message': 'Enter description',
            'validate': validateComponentDescription,
            'default': 'Компонент подуктовой штуки'
        }
    ]).then((answers) => {
        addComponentScaffold(answers.name, answers.description);
    });
};

module.exports = addComponent;
