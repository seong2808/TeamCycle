import axios from "axios";
import { useEffect } from 'react';
import React from "react";
import "./App.css";
import "./banner.css";
import "./start_style.css";
import "./Search.css";
import "./Modal_style.css";
import "./Category_style.css";
import "./Sa_style.css";
import "./Login_style.css";
import Main1 from "./component/Main1";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./component/Intro";
import Header from "./component/Header";
import Search from "./component/Search";
import Safety from "./component/Safety";
import Policy from "./component/Policy";
import Login from "./component/Login";


function App() {
  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);
  
  return (
    <BrowserRouter>
    
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main1 />
          </Route>
          <Route path="/Home">
            <Main1 />
          </Route>
          <Route path="/Intro">
            <Intro />
          </Route>
          <Route path="/Safety">
            <Safety />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Policy">
            <Policy />
          </Route>

        
        </Switch>
        <div className="footer">빈 공간</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
