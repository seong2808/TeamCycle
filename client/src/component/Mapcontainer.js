import React, { useEffect, useState } from "react";
import { Map, MapTypeId } from "react-kakao-maps-sdk";



const Mapcontainer = () => {

  const [mapTypeIds, setMapTypeIds] = useState([])

  const handler = (target, type) => {
    if (target.checked) {
      return setMapTypeIds([...mapTypeIds, type])
    }
    setMapTypeIds(
      mapTypeIds.filter(
        (mapTypeId) => mapTypeId !== type
      )
    )
  }

  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {mapTypeIds.map(mapTypeId => <MapTypeId type={mapTypeId} />)}
      </Map>
      <input
        type="checkbox"
        onChange={({ target }) => handler(target, kakao.maps.MapTypeId.TERRAIN)}
      />
      지형정보 보기
      <input
        type="checkbox"
        onChange={({ target }) => handler(target, kakao.maps.MapTypeId.BICYCLE)}
      />
      자전거도로 보기
      
    </>
  )
}
export default Mapcontainer