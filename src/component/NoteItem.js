import React from 'react'

export const NoteItem = (props) => {
    const {note } = props
  return (
    <div className="card col-md-3 mx-2 bg-dark text-white" style={{width: "18rem"}}>

  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.desc}</p>
    <a href="#" className="btn btn-primary"><i className="far fa-trash-alt"></i></a>
  </div>
</div>
  )
}
export default NoteItem