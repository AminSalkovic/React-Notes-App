import React from 'react'
import AddNote from './AddNote';
import Note from './Note'

const NodeLists = ({notes,handleAddNote,handleDeleteNote}) => {
  return (
    <div className='notes-lists'>
        {notes.map(note=> 
        <Note id={note.id}
         text={note.text}
         date={note.date} 
         handleDeleteNote={handleDeleteNote}/>
        )}
       <AddNote handleAddNote={handleAddNote}/>

    </div>
  )
}

export default NodeLists;