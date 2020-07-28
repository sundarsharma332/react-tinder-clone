import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import TinderCards from "./Tindercards";
import SwipeButtons from "./SwipeButtons";
import './App.css';
import Chats from "./Chats"

function App() {
  return (
    <div className="App">
    
      <Router>
       <Switch>
         <Route path="/chat/">
         <Header backButton="/"/>
          <Chats/>
         </Route>
         <Route path = "/">
          <Header/>
           <TinderCards/>
           <SwipeButtons/>
         </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
