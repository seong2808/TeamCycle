import React, { useEffect, useState, useRef } from "react";
import { Map, MapTypeId, MapMarker } from "react-kakao-maps-sdk";

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

  const setMapType = (maptype) => {
    const map = mapRef.current
    const roadmapControl = document.getElementById("btnRoadmap")
    const skyviewControl = document.getElementById("btnSkyview")
    if (maptype === "roadmap") {
      map.setMapTypeId(window.kakao.maps.MapTypeId.ROADMAP)
      roadmapControl.className = "selected_btn"
      skyviewControl.className = "btn"
    } else {
      map.setMapTypeId(window.kakao.maps.MapTypeId.HYBRID)
      skyviewControl.className = "selected_btn"
      roadmapControl.className = "btn"
    }
  }

  const zoomIn = () => {
    const map = mapRef.current
    map.setLevel(map.getLevel() - 1)
  }
  const zoomOut = () => {
    const map = mapRef.current
    map.setLevel(map.getLevel() + 1)
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
        {/* 지도타입 컨트롤 div 입니다 */}
        <div className="custom_typecontrol radius_border">
              <span
                id="btnRoadmap"
                className="selected_btn"
                onClick={() => setMapType("roadmap")}
              >
                지도
              </span>
              <span
                id="btnSkyview"
                className="btn"
                onClick={() => {
                  setMapType("skyview")
                }}
              >
                스카이뷰
              </span>
            </div>
            {/* 지도 확대, 축소 컨트롤 div 입니다 */}
            <div className="custom_zoomcontrol radius_border">
              <span onClick={zoomIn}>
                <img
                  src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
                  alt="확대"
                />
              </span>
              <span onClick={zoomOut}>
                <img
                  src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
                  alt="축소"
                />
              </span>
          </div>
        </div>
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
      <input
        type="checkbox"
        onChange={({ target }) => Handler(target, window.kakao.maps.MapTypeId.USE_DISTRICT)}
      />
      지적편집도 보기
      
    </>
  )
}
export default Mapcontainer