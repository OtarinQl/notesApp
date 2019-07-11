const fs = require('fs') 
const chalk = require('chalk')

const showNotes = ()=>{
    //Va a retornar una lista de notas en JSON.
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const data = dataBuffer.toString()
        const notes = JSON.parse(data)
        return notes
    }
    catch(e) {
        return []
    }
}

const readNote = (title)=>{
    const noteList = showNotes()
    const noteFound = noteList.find((note)=>{return note.title === title})
    
    debugger

    if(!noteFound){
        console.log(chalk.bgRed('The note ' + title + ' wasn\'t found.'))
    } else {
        console.log(chalk.bgCyan.bold(noteFound.title + ': ' + noteFound.body))    
    }
}

const addNote = (title,body)=>{
    const noteList = showNotes()
    const secondList = noteList.find((note)=>{return note.title === title})
    
    if(!secondList){
        noteList.push({
            title: title,
            body: body
        })
        fs.writeFileSync('data.json',JSON.stringify(noteList))
        console.log(chalk.bgGreen.white.bold('Nota ' + title + ' guardada.'))
    } else {
        console.log(chalk.bgRed.white.bold('Ya existe una nota llamada así.'))
    }
    
}

const removeNote = (title)=>{
    var noteList = showNotes()
    const searcher = noteList.find((note)=>{return note.title === title})
    
    if(!searcher){
        console.log(chalk.bgCyan.white.bold('No se ha encontrado la nota.'))
    } else {
        noteList.splice(noteList.indexOf(searcher),1)
        fs.writeFileSync('data.json',JSON.stringify(noteList))
        console.log(chalk.bgBlue.white.bold('Se ha eliminado con éxito.'))
    }
}

const listNotes = ()=>{
    const noteList = showNotes()
    if(noteList.length === 0){
        console.log(chalk.bgRed.bold('You have no notes.')) 
    } else {
        console.log(chalk.bold.bgBlue('Your notes are:'))
        noteList.forEach((note)=>{console.log(chalk.bgGreen.bold(note.title + ': ' + note.body))})
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
