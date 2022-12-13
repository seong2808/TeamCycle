import React, { useEffect, useState, useRef } from "react";
import { Map, MapTypeId, MapMarker, ZoomControl, MapTypeControl } from "react-kakao-maps-sdk";

const Mapcontainer = ({ searchPlace, portPlace }) => {

  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [portP, setPortp] = useState([])

  const [mapTypeIds, setMapTypeIds] = useState([])

  const mapRef = useRef()

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
      var infowindow = new window.kakao.maps.InfoWindow({})
      if (!map) return
      const ps = new window.kakao.maps.services.Places()
      
      ps.keywordSearch(searchPlace, placesSearchCB)

      function placesSearchCB(data, status, pagination) {
        if (status === window.kakao.maps.services.Status.OK) {
          let bounds = new window.kakao.maps.LatLngBounds()
  
          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i])
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
          }
          map.setBounds(bounds)
        }
      }
      function displayMarker(place) {
        let marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        })
  
        // 마커에 클릭이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'click', function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
          infowindow.open(map, marker)
        })
      }

    }, [searchPlace])

    useEffect(() => {
      var infowindow = new window.kakao.maps.InfoWindow({})
      if (!map) return
      
      placesSearch(portPlace)

      function placesSearch(portPlace) {
        setPortp(portPlace)
          let bounds = new window.kakao.maps.LatLngBounds()

            displayMarkers(portP)
            bounds.extend(new window.kakao.maps.LatLng(portP.latitude, portP.longitude))

          map.setBounds(bounds)
        
      }
      function displayMarkers(place) {
        let marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
        })
  
        // 마커에 클릭이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'click', function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.portname + '</div>')
          infowindow.open(map, marker)
        })
      }

    }, [portPlace])

  return (
    <>
      <div className={`map_wrap`}>
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
            position: "relative",
            overflow: "hidden",
          }}
          level={7} // 지도의 확대 레벨
          onCreate={setMap}
          ref={mapRef}
        >
          <MapTypeControl position={window.kakao.maps.ControlPosition.TOPLEFT}/>
          <ZoomControl position={window.kakao.maps.ControlPosition.TOPRIGHT}/>
          
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
      </div>
      <div className="checkbox_con">
      <span>
        <input
        type="checkbox"
        onChange={({ target }) => Handler(target, window.kakao.maps.MapTypeId.TERRAIN)}
      />
      <div>
      지형정보
      </div>
      </span>
      <span>
        <input
        type="checkbox"
        onChange={({ target }) => Handler(target, window.kakao.maps.MapTypeId.BICYCLE)}
      />
      <div>
      자전거도로
      </div>
      </span>
      <span>
        <input
        type="checkbox"
        onChange={({ target }) => Handler(target, window.kakao.maps.MapTypeId.USE_DISTRICT)}
      />
      <div>
      지적편집도
      </div>
      </span>
      </div>
    </>
  )
}
export default Mapcontainer