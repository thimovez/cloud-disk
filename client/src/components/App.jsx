import Navbar from "./navbar/Navbar";
import './app.scss';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    </div>
    </BrowserRouter>
  )
}

export default App;
