import React, { useState } from "react";
import Search_Button from "./Search_Button";
import Map from "./Map";
import Map_info from "./Map_info";


export default function Search() {

  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const highFunction = (text) => {
    console.log(text);
    setPlace(text); 
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
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "360px", zIndex: "10" }}
            searchPlace={ Place }
          >
            
          </Map>
          </div>
          <Map_info />
        </div>
      </div>
    );
  }