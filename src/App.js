import Login from "./components/Login"
import Register from "./components/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Recover from "./components/Recover";
import {CounterProvider} from "./contexts/CounterContext";
import {CartProvider} from "./contexts/CartContext";

function App() {
  return (
      <CounterProvider>
          <CartProvider>
              <div className="App">
                  <BrowserRouter>
                      <Switch>
                          <Route exact path="/">
                              <Login/>
                          </Route>
                          <Route path="/register">
                              <Register/>
                          </Route>
                          <Route path="/dashboard">
                              <Dashboard/>
                          </Route>
                          <Route path="/recover">
                              <Recover/>
                          </Route>
                      </Switch>
                  </BrowserRouter>
              </div>
          </CartProvider>
      </CounterProvider>
  );
}

export default App;
