const notes = require('./notes.js')
const yargs = require('yargs')
//================================TODO================================
//Añade una nota.
yargs.command({
    command:'add',
    describe:'Add a new note.',
    builder: {
        title: {
            describe:'Note title to add..',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Body note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>notes.addNote(argv.title,argv.body)
})

//Elimina una nota.
yargs.command({
    command:'remove',
    describe:'Remove a note.',
    builder: {
        title: {
            describe:'Note name that gonna be removed.',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv)=>notes.removeNote(argv.title)
})

//Lee una nota.
yargs.command({
    command:'read',
    describe:'Read a note.',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: (argv)=>notes.readNote(argv.title)
})

//Enlista las notas.
yargs.command({
    command:'list',
    describe:'List all the notes.',
    handler: (argv)=>{
        notes.listNotes()
        }
    })

//Importante, de otra forma no se muestra en pantalla lo
//desarrollado en yargs.
yargs.parse()
//yargs.parse() es una alternativa a print(yargs.argv)
