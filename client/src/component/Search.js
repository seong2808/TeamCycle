import React, { useState } from "react";
import Search_Button from "./Search_Button";
import Mapcontainer from "./Mapcontainer";
import Map_info from "./Map_info";



export default function Search({getData, searchPlace}) {

  const [searchcate, setSearchCate] = useState('');
  const [Place, setPlace] = useState('');
  const [portdata, setPortdata] = useState([{
    portname : "",
		latitude : 0,
		longitude : 0,
		portnum : "",
		port_type : "",
		sunscreen : "",
		airinjector : "",
		manage_num : ""
}]);

  const highFunction = (text) => {
    console.log(text);
    if(searchcate==='지도 검색') {
      setPlace(text); 
    } else {
      getData(text)
      portFunc();
    }
  }

  const onSearchcate = (text) => {
    setSearchCate(text)
    console.log(text)
  }

  const portFunc = () => {
    setPortdata(searchPlace)
    console.log(portdata)
  }
  console.log(portdata)



    return (
      <div className="Search">
        <div className="con2">
          <div className="search_text">
              <h1>자전거이용자를 위한 검색, Re-Cycle</h1>
          </div>
          <Search_Button highFunction={highFunction} onSearchcate={onSearchcate}/>
        </div>
        <div className="map_space">
          <div className="Kakaomap_road">
          <Mapcontainer
            style={{ width: "100%", height: "450px", zIndex: "10" }}
            searchPlace={ Place }
            portPlace={searchPlace}
          >
          </Mapcontainer>
          </div>
          <Map_info />
        </div>
      </div>
    );
  }