import React from 'react'
import { useContext, useState } from 'react'
import Context from "../context/notes/noteContext"
const AddNote = () => {
    const Note = useContext(Context)
    const {addNote } = Note
   const [note, setnote] = useState({})

    const handleClick = (e)=>{
      e.preventDefault()
      addNote(note.title, note.desc)
    }


     const onchange = (e)=>{
setnote({title : e.target.value, desc : e.target.value})
     }
       return (
    <div><h1>ADD A NOTE</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" name='desc' id="desc" onChange={onchange}/>
  </div>
  <button type='button' className="btn-primary btn" onClick={handleClick}>Submit</button>
</form>
<h1>YOUR NOTES</h1></div>
  )
}

export default AddNote