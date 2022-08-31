import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import './App.css';
import NodeLists from './components/NodeLists';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const[notes,setNotes]=useState([
    {
    id:nanoid(),
    text:'this is my first note',
    date:'8/30/2022'
    },
    {
      id:nanoid(),
      text:'this is my second note',
      date:'8/30/2022'
    },
    {
        id:nanoid(),
        text:'this is my third note',
        date:'8/30/2022'
       }
])
const[searchText,setSearchText]=useState('')

const[darkmode,setDarkmode]=useState(false)

const addNote=(text)=>{
     const date=new Date();
     const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
     }
     const newNotes= [...notes,newNote];
     setNotes(newNotes)
}

const deleteNote=(id)=>{
 const newNotes = notes.filter((note)=> note.id !== id);
 setNotes(newNotes)
}
  return (
    <div className={`${darkmode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleMode={setDarkmode}/>
      <Search handleSearchNote={setSearchText}/>
         <NodeLists notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
    </div>
  </div>
  );
}

export default App;
