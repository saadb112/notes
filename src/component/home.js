import React from 'react'
import AddNote from './AddNote';
import Notes from "./Notes"
const Home = () => {

  return (
    <div className="container">
<AddNote/>
<Notes key={121}/>
    </div>
  )
}
export default Home;
