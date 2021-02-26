const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

const addNote = (title, body) => {
    debugger;
    const notes = loadNotes();
    const duplicateNotes = notes.filter(x => x.title == title);

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
    }
    else{
        console.log('Note already added');
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
}

const deleteNote = (title) => {
    const notes = loadNotes();
    const exists = notes.filter(x => x.title !== title);
    if(notes.length != exists.length){
        saveNotes(exists);
        console.log('note deleted');
    } else {
        console.log('Key not found');
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    deleteNote
};