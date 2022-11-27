import React, { useEffect } from "react";
const { kakao } = window;

export default function Map() {

    useEffect(()=>{
        // 지도를 표시할 div
        const mapContainer = document.getElementById('map')

        // 지도의 옵션 설정
        let mapOption = {
            // 지도의 중심좌표
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            // 지도의 확대레벨
            level: 3
        };

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성
        const map = new kakao.maps.Map(mapContainer, mapOption);
        
    }, [])

    return(
        <div id="map" style={{width:"100%", height:"100%"}}></div>
    )
}