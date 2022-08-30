import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
const Note = () => {
  return (
    <div className='note'>
        <span>hello</span>
        <div className="note-footer">
            <small>13/04/22</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note;