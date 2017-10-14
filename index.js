#!/usr/bin/env node

const commander = require('commander');

const addCommand = require('./commands/add');
const buildCommand = require('./commands/build');
const startCommand = require('./commands/start');
const openCommand = require('./commands/open');

commander.version('0.1.0');

commander.
    command('add').
    description('adds scaffold of sovetnik componet').
    action(addCommand);

commander.
    command('build [name]').
    option('-o, --open', 'open component page after build').
    description('build all components or provided component').
    action(buildCommand);

commander.
    command('start <name>').
    description('starts dev-server watching sovetnik component').
    action(startCommand);

commander.
    command('open [name]').
    description('opens component in browser').
    action(openCommand);

commander.parse(process.argv);
