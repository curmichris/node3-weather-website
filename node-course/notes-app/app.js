// const validator = require('validator');
// const chalk = require('chalk');
// const { isEmail } = require('validator/validator');
// const getNotes = require('./notes');
// console.log(getNotes());
// console.log(chalk.inverse.green(isEmail('curmi@f.acco')));
// console.log(process.argv[2]);

const { notStrictEqual } = require('assert');
const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const {getNotes, addNote, deleteNote} = require('./notes');



yargs.version('1.0.0');

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: "Note to Remove",
            demandOption: true,
        }
    },
    handler(argv) {
        deleteNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading the notes',
    handler() {
        console.log('Read notes')
    }
})

yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler() {
        console.log('Notes Listed')
    }
})

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);

