import React from 'react'
import Simplemde from 'react-simplemde-editor'

const Editor = (props) => {
  const {change,currentNote}=props

  return (
    <div className='editor column column-75'>
      <Simplemde onChange={change} value={currentNote.body} options={{autofocus: true}}/>
    </div>
  )
}

export default Editor
