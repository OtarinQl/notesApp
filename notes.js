const fs = require('fs') 

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

const getNotes = ()=>{
    console.log('Your notes are... ')
    //Luego añadir algo que obtenga la lista de notas
}

const addNote = (title,body)=>{
    const noteList = showNotes()
    noteList.push({
        title: title,
        body: body
    })
    fs.writeFileSync('data.json',JSON.stringify(noteList))
    console.log('Saved note ' + title + '.')
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}