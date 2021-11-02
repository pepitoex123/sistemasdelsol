import Login from "./components/Login"
import Register from "./components/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/dashboard">

                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
