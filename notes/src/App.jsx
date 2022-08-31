import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import './App.css';
import NodeLists from './components/NodeLists';

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
  return (
    <div className="container">
         <NodeLists notes={notes}  handleAddNote={addNote}  />
    </div>
  );
}

export default App;
