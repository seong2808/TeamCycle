import axios from "axios";
import { useEffect, useState, useRef } from 'react';
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
import "./css/safety.css"
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
  const portId = useRef(0);
  const [port, setPort] = useState([]);
  const [searchPort, setSearchPort] = useState([]);

  const getData = (search) => {
    console.log("getData:",search)

    if(search !== "") {
      portNameCompare(search);
    }
    
  }

  const portNameCompare = (search) => {
    const filtered = port.filter((itemList) => {
      return itemList.portname.includes(search)
    })
    setSearchPort(filtered)
    console.log("portNameCompare:",searchPort)
  }


  const callApi = async () => {
    const response = await fetch('api/bike_port');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
    callApi()
      .then(res => setPort(res))
      .catch(err => console.log(err));
    console.log(port)
  },[])
  
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
            <Search getData={getData}
                    sendport={searchPort}
            />
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
