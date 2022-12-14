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
  const [port, setPort] = useState([]);
  const [rental, setRental] = useState([]);
  const [searchPort, setSearchPort] = useState([]);
  const [searchRental, setSearchRental] = useState([]);
  const [cate, setCate] = useState('전체');

  const onCate = (text) => {
    setCate(text)
    console.log("cate:",cate)
  }

  const getData = (search) => {
    console.log("getData:",search)

      if(cate === '보관소 검색'){
        portNameCompare(search);
      } else if(cate === '대여소 검색'){
        rentalNameCompare(search);
      }
    }

  const portNameCompare = (search) => {
    const filteredport = port.filter((itemList) => {
      return itemList.portname.includes(search)
    })
    setSearchPort(filteredport)
    console.log("searchPort:",searchPort)
  }

  const rentalNameCompare = (search) => {
    const filteredrental = rental.filter((itemList) => {
      return itemList.rental_name.includes(search)
    })
    setSearchRental(filteredrental)
    console.log("searchRental:",searchRental)
  }


  const callApiport = async () => {
    const response = await fetch('api/bike_port');
    const body = await response.json();
    return body;
  }

  const callApirental = async () => {
    const response = await fetch('api/bike_rental');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
      callApiport()
        .then(res => setPort(res))
        .catch(err => console.log(err));
      console.log("po",port)
      callApirental()
        .then(res => setRental(res))
        .catch(err => console.log(err));
      console.log("po",port)
      console.log("re",rental)
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
                    onCate = {onCate}
                    onPort = {port}
                    onRental = {rental}
                    // portname = {searchPort.portname}
                    // latitude = {searchPort.latitude}
                    // longitude = {searchPort.longitude}
                    // portnum = {searchPort.portnum}
                    // port_type = {searchPort.port_type}
                    // sunscreen = {searchPort.sunscreen}
                    // airinjector = {searchPort.airinjector}
                    // manage_num = {searchPort.manage_num}
                    
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
