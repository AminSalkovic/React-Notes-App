import React,{useState} from 'react'

const AddNote = ({handleAddNote}) => {
    const[noteText,setNoteText]=useState('')

    const handleChange=(event)=>{
        if(characterLimit-event.target.value.length >=0){
            setNoteText(event.target.value)
        }
    }
    const characterLimit=200;
    const handleSaveClick=()=>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }
  return (
    <div className='note new'>
        <textarea  cols="8" rows="10" placeholder='Type to add a note...' 
        value={noteText}
         onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length}Reamining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote