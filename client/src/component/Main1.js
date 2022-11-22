import Search_Button from "./Search_Button";

export default function Main1() {
  return (
    <div className="main1">
      <div className="ride">
        <img src="./rideback.png" width="100%" height="100%" />
      </div>
      <div className="con2">
        <div className="search_text">
            <h1>자전거이용자를 위한 검색, Re-Cycle</h1>
        </div>
        <Search_Button />
      </div>

      <div className="con3">빈 공간</div>
      <div className="con4">빈 공간</div>
      <div className="con5">빈 공간</div>
    </div>
  );
}
