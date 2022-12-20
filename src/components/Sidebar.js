import React from 'react'

const Sidebar = (props) => {
  const {add,select,selected,notes}=props

  return (
    <div className='editor column column-25'>
      <button className='button button-clear' onClick={add}>+ new note</button>
      <dl className='list'>
        {notes.map((note) =>
          {
            return <li key={note.id} onClick={()=>{select(note)}} className={note.id===selected.id?'selected':''}>
              {note.body}
            </li>
          }
        )}
      </dl>
    </div>
  )
}

export default Sidebar
