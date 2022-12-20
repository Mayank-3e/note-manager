import React, { useEffect, useState } from 'react'
import 'milligram'
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

function App() {
  const mkey=process.env.REACT_APP_MKEY
  const localnotes=JSON.parse(localStorage.getItem(mkey))
  const [notes,setnotes]=useState(localnotes?localnotes:[])
  const [selectednote,setSelectednote]=useState(localnotes?localnotes[0]:{})

  const addnote=()=>
  {
    const note={id: generateid(), body: "Start typing..."}
    notes.push(note)
    setnotes(notes)
    selectNote(note)
    save(notes)
  }
  const generateid=()=>{return Date.now()+Math.floor(Math.random()*1e7)}
  const selectNote=(note)=>
  {
    if(note===selectednote) return;
    setSelectednote(note)
  }
  const save=(notes)=>
  {
    localStorage.setItem(mkey,JSON.stringify(notes))
  }

  const updateNote=(body)=>
  {
    let curNote=selectednote
    curNote.body=body
    setSelectednote(curNote)
    let nIndex=notes.findIndex((n)=>{return n.id===curNote.id})
    notes[nIndex].body=curNote.body
    setnotes(JSON.parse(JSON.stringify(notes)))
    save(notes)
  }

  return (
    <div className="App container">
      <h1>Your Markdowns</h1>
      <div className='row'>
        <Sidebar add={addnote} select={selectNote} selected={selectednote} notes={notes}/>
        {notes.length? <Editor change={updateNote} currentNote={selectednote}/> :null}
      </div>
    </div>
  );
}

export default App;
