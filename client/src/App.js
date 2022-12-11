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

  const [search, setSearch] = useState('');
  const [port, setPort] = useState({
    portname : "",
		latitude : 37.5174,
		longitude : 126.8653,
		portnum : "",
		port_type : "",
		sunscreen : "",
		airinjector : "",
		manage_num : ""
});

  const getData = (search) => {
    setSearch(search);
  }

  const compareData = () => {
    // port.portname === search ? port.portnum

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
  },[])

  // const callbikeport = async()=>{
  //   axios.get(baseUrl+'/api/bike_port').then(res => console.log(res))
  // };

  // useEffect(()=>{
  //   awsTest()
  //   // callbikeport();
  // },[])
  
  // function awsTest(){
  //   axios.get('/api/bike_port')
  //   .then((response)=>{
  //     console.log("awsTest",response);
  //     })
  //   .catch((error)=>{
  //     console.log("error", error);
  //   })
  // }

  
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
                    // getport={port}
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
