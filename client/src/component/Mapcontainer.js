import React, { useEffect, useState } from "react";
import { Map, MapTypeId, MapMarker } from "react-kakao-maps-sdk";

const Mapcontainer = () => {

  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()

  const [mapTypeIds, setMapTypeIds] = useState([])

  const Handler = (target, type) => {
    if (target.checked) {
      return setMapTypeIds([...mapTypeIds, type])
    }
    setMapTypeIds(
      mapTypeIds.filter(
        (mapTypeId) => mapTypeId !== type
      )
    )
  }
    useEffect(() => {
      if (!map) return
      const ps = new window.kakao.maps.services.Places()
  
      ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new window.kakao.maps.LatLngBounds()
          let markers = []
  
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            })
            // @ts-ignore
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setMarkers(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
      })
    }, [map])

  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 	37.516132,
          lng: 	127.130282,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={7} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {mapTypeIds.map(mapTypeId => <MapTypeId type={mapTypeId} />)}
        {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"#000"}}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
      </Map>
      <input
        type="checkbox"
        onChange={({ target }) => Handler(target, window.kakao.maps.MapTypeId.TERRAIN)}
      />
      지형정보 보기
      <input
        type="checkbox"
        onChange={({ target }) => Handler(target, window.kakao.maps.MapTypeId.BICYCLE)}
      />
      자전거도로 보기
      
    </>
  )
}
export default Mapcontainer