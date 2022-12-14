import React, { useState } from "react";
import Search_Button from "./Search_Button";
import Mapcontainer from "./Mapcontainer";
import Map_info from "./Map_info";



export default function Search({getData,onCate,onPort,onRental}) {

  const [searchcate, setSearchCate] = useState('전체');
  const [Place, setPlace] = useState('');
  const [portdata, setPortdata] = useState({

  });

  const highFunction = (text) => {
    
    if(searchcate==='지도 검색' || searchcate === '전체') {
      setPlace(text); 
    } else if (searchcate ==='보관소 검색'){
      getData(text)
      console.log("searchRe:",portdata);
    } else if( searchcate === '대여소 검색'){
      getData(text)
    } else {
      setPlace(text); 
    }
  }

  const onSearchcate = (text) => {
    setSearchCate(text)
    onCate(text)
    console.log("cate:",searchcate)
  }

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
            portPlace={ portdata }
          >
          </Mapcontainer>
          </div>
        </div>
      </div>
    );
  }