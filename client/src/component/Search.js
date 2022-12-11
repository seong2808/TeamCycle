import React, { useState } from "react";
import Search_Button from "./Search_Button";
import Mapcontainer from "./Mapcontainer";
import Map_info from "./Map_info";



export default function Search({getData, getport}) {

  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [portdata, setPortdata] = useState({
    portname : "",
		latitude : 37.5174,
		longitude : 126.8653,
		portnum : "",
		port_type : "",
		sunscreen : "",
		airinjector : "",
		manage_num : ""
});

  const highFunction = (text) => {
    console.log(text);
    setPlace(text); 
  }

  const portFunc = () => {
    setPortdata(getport)
  }

    return (
      <div className="Search">
        <div className="con2">
          <div className="search_text">
              <h1>자전거이용자를 위한 검색, Re-Cycle</h1>
          </div>
          <Search_Button propFunction={highFunction}/>
        </div>
        <div className="map_space">
          <div className="Kakaomap_road">
          <Mapcontainer
            style={{ width: "100%", height: "450px", zIndex: "10" }}
            searchPlace={ Place }
            // portPlace={portdata}
          >
          </Mapcontainer>
          </div>
          <Map_info />
        </div>
      </div>
    );
  }