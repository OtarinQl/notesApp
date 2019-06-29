const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
const print = console.log 
//================================TODO================================
//Añade una nota.
yargs.command({
    command:'add',
    describe:'Add a new note.',
    builder: {
        title: {
            describe:'Title note.',
            demandOption: true,
            type: 'string',
            default: 'Default title'
        },
        body: {
            describe:'Body note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})

//Elimina una nota.
yargs.command({
    command:'remove',
    describe:'Remove a note.',
    builder: {
        name: {
            describe:'Name note that gonna be removed.',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv)=>{
        print(chalk.bgRed.white.bold('Delete the note: '+argv.name+'?'))
    }
})

//Edita una nota.
yargs.command({
    command:'edit',
    describe:'Edit a note.',
    handler: (argv)=>{
        print(chalk.bgBlue.bold('Editing a note.'))
    }
})

//Lee una nota.
yargs.command({
    command:'read',
    describe:'Read a note.',
    handler: (argv)=>{
        print(chalk.bgCyan.bold('Reading a note.'))
    }
})

//Enlista una nota.
yargs.command({
    command:'list',
    describe:'List a note.',
    handler: (argv)=>{
        print(chalk.bold.bgMagenta('Listing a note.'))
        }
    })

//Importante, de otra forma no se muestra en pantalla lo
//desarrollado en yargs.
yargs.parse()
//yargs.parse() es una alternativa a print(yargs.argv)