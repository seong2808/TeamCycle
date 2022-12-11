import axios from "axios";
import { useEffect } from 'react';
import React from "react";
import "./App.css";
import "./css/banner.css";
import "./css/Search.css";
import "./css/Modal_style.css";
import "./css/Category_style.css";
import "./css/Sa_style.css";
import "./css/Login_style.css";
import "./css/default.css";
import "./css/btn-search.css"
import "./css/footer.css"
import "./css/bikesafestyle.css"
import Main1 from "./component/Main1";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./component/Intro";
import Header from "./component/Header";
import Search from "./component/Search";
import Safety from "./component/Safety";
import Policy from "./component/Policy";
import Login from "./component/Login";
import Footer from "./component/Footer";
import Bikesafe from "./component/Bikesafe";
import LoadInfo from "./component/LoadInfo";
import LoadIntro from "./component/LoadIntro";
import Loadcert from "./component/Loadcert";


function App() {
  const baseUrl = "http://localhost:8080"

  const callbikeport = async()=>{
    axios.get(baseUrl+'/api/bike_port').then(res => console.log(res))
  };

  useEffect(()=>{
    callbikeport();
  }, []);


  const _dbTest = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data)
  }
  
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
          <Route path="/Bikesafe">
            <Bikesafe />
          </Route>
          <Route path="/LoadInfo">
            <LoadInfo />
          </Route>
          <Route path="/LoadIntro">
            <LoadIntro />
          </Route>
          <Route path="/Loadcert">
            <Loadcert />
          </Route>
        
        
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
