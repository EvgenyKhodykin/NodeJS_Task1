const yargs = require('yargs')
const chalk = require('chalk')
const { addNote, printNotes, removeNote } = require('./notes.controller')

yargs.command({
    command: 'add',
    describe: 'Add a new note to the list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler() {
        printNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note by id',
    handler({ id }) {
        removeNote(id)
    }
})

yargs.parse()
