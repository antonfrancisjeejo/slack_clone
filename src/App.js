import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/ContextApi/StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
