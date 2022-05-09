import React from 'react'
import { useContext } from 'react'
import Context from "../context/notes/noteContext"
const AddNote = () => {
    const Note = useContext(Context)
    const {addNote } = Note
  return (
    <div><h1>ADD A NOTE</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type='button' className="" onClick={addNote}>Submit</button>
</form>
<h1>YOUR NOTES</h1></div>
  )
}

export default AddNote