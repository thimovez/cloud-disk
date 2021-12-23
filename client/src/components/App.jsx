import Navbar from "./navbar/Navbar";
import './app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from '../components/registration/Registration';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className="wrap">
        <Switch>
        <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
    

    </div>
    </BrowserRouter>
  )
}

export default App;
