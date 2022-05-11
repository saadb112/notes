import React from "react";
import { useContext, useState } from "react";
import Context from "../context/notes/noteContext";
export const NoteItem = (props) => {
  const Note = useContext(Context);
  const { Delete } = Note;
  const { note } = props;
  return (
    <div
      className="card col-md-3 mx-2 bg-dark text-white my-3 mx-3"
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.desc}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            Delete(note._id);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};
export default NoteItem;
