import React from 'react'

const Header = ({handleToggleMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>handleToggleMode((previousvalue)=> !previousvalue)}>Toggle mode</button>
    </div>
  )
}

export default Header