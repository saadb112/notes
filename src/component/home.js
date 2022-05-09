import React from 'react'
import AddNote from './AddNote';
import Notes from "./Notes"
import Api from "./api"
const Home = () => {

  return (
    <div className="container">
      <Api/>
<AddNote/>
<Notes key={121}/>
    </div>
  )
}
export default Home;
