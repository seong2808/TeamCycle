import Search_Button from "./Search_Button";
import Map from "./Map";
import Map_info from "./Map_info";


export default function Search() {
    return (
      <div className="Search">
        <div className="con2">
          <div className="search_text">
              <h1>자전거이용자를 위한 검색, Re-Cycle</h1>
          </div>
          <Search_Button />
        </div>
        <div className="map_space">
          <div className="Kakaomap_road">
            <Map />
          </div>
          <Map_info />
        </div>
      </div>
    );
  }