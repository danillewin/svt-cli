#!/usr/bin/env node

const commander = require('commander');

const addCommand = require('./commands/add');
const buildCommand = require('./commands/build');
const startCommand = require('./commands/start');

commander.version('0.1.0');

commander.
    command('add').
    description('adds scaffold of sovetnik componet').
    action(addCommand);

commander.
    command('build [name]').
    description('build all components or provided component').
    action(buildCommand);

commander.
    command('start <name>').
    description('starts dev-server watching sovetnik component').
    action(startCommand);

commander.parse(process.argv);
