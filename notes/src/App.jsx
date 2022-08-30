import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import './App.css';
import NodeLists from './components/NodeLists';

function App() {
  const[notes,setNotes]=useState([{
    id:nanoid(),
    text:'this is my first note',
    date:'8/30/2022'
  }])
  return (
    <div className="container">
         <NodeLists/>
    </div>
  );
}

export default App;
