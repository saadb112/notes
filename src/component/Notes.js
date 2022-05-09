import React from 'react'
import { useContext } from 'react'
import Context from "../context/notes/noteContext"
import NoteItem from "./NoteItem"
export const Notes = () => {
  const Note = useContext(Context)
  const { state } = Note
  return (
    <div className='row'>
      {state.map((e) => {
        return <NoteItem key={state.__v} note={e}></NoteItem>
      })
      }
      </div>
  )
}
export default Notes
