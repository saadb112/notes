import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const s = [
    {
      _id: "626e7eab14812e2f9e5a547ab8",
      user: "626e79b04d163637229e1156",
      title: "title1",
      desc: "hello this desc",
      tag: "this is tag",
      date: "2022-05-01T12:20:36.666Z",
      __v: 5,
    },
    {
      _id: "626e83qbfd1e7bd700w8f9e58e",
      user: "626e79b04d163637229e1156",
      title: "title2",
      desc: "hello this desc updated",
      tag: "this is tag",
      date: "2022-05-01T12:57:35.345Z",
      __v: 4,
    },
    {
      _id: "627525fcdaw43d4167ccde61c3",
      user: "626e79b04d163637229e1156",
      title: "title 3",
      desc: "hello this desc",
      tag: "this is tag",
      date: "2022-05-06T13:43:24.961Z",
      __v: 3,
    },
    {
      _id: "627525qfcda1w434167ccde61c3",
      user: "626e79b04d163637229e1156",
      title: "title 3",
      desc: "hello this desc",
      tag: "this is tag",
      date: "2022-05-06T13:43:24.961Z",
      __v: 2,
    },
    {
      _id: "627525wfcdaw4334167ccde61c3",
      user: "626e79b04d163637229e1156",
      title: "title 3",
      desc: "hello this desc",
      tag: "this is tag",
      date: "2022-05-06T13:43:24.961Z",
      __v: 1,
    },
  ];
  const [state, setState] = useState(s);

  const addNote = (title, desc) => {
    const note = {
      _id: "62d7525wfcdaw4334167ccde61c3",
      user: "626e79b04d163637229e1156",
      title: title,
      desc: desc,
      tag: "this is tag",
      date: "2022-05-06T13:43:24.961Z",
      __v: 1,
    };
    setState(s.concat(note));
  };

  const Delete = (id)=>{
console.log(id)
  }
  return (
    <NoteContext.Provider value={{ state, addNote, Delete }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
