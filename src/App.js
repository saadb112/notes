import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./component/home"
import About from "./component/about"
import Navbar from "./component/navbar"
import NoteState from "./context/notes/noteState"
function App() {
  return (


<NoteState>
<Router>
<Navbar />
  {/* <Home/> */}

  <Routes>
  <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
  </Routes>
</Router>
</NoteState>

  );
}

export default App;
