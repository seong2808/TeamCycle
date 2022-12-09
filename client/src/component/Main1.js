import Search_Button from "./Search_Button";
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Main1() { 
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // 슬라이드 변경 시간
    speed: 300,
    // 자동 재생 유지 시간
    autoplaySpeed: 7000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="main1">
      <div className="ride">
        <img src="./mainimg03.jpg" width="100%" height="100%" />
      </div>
      <div className="con2">
        <div className="search_text">
            <h1>자전거이용자를 위한 검색, Re-Cycle</h1>
        </div>
        <Search_Button />
      </div>
      <div className="con3">
        <div className="bicyclepath">

          <div className="domestic_info">
            <div className="domeinfo-tit">
              <h1>주요 자전거 정보</h1>
              <h4>국내 주요 자전거길에 대해 안내해드립니다.</h4>
            </div>
            
            <ul className="dome_list">
              <li className="dome_item">
                <a id="dome_item_01">
                  <div className="cont">
                    <span className="iconbox">
                      <img src="./icon03.png" alt></img>
                    </span>
                    국토종주
                    <br/>
                    자전거길
                  </div>
                </a>
              </li>
              <li className="dome_item">
                <a id="dome_item_02">
                  <div className="cont">
                    <span className="iconbox">
                      <img src="./icon02.png" alt></img>
                    </span>
                    지자체 명품
                    <br/>
                    자전거길
                  </div>
                </a>
              </li>
              <li className="dome_item">
                <a id="dome_item_03">
                  <div className="cont">
                    <span className="iconbox">
                      <img src="./icon01.png" alt></img>
                    </span>
                    바다를 품은
                    <br/>
                    섬 자전거길
                  </div>
                </a>
              </li>
            </ul>
            
            
          </div>

          <div className="domestic_certify">           
            <div className="certify-tit">
              <h1>국토 종주 인증안내</h1>
              <h4>국토종주 자전거길을 달린 뿌듯함과 추억을 간직하세요</h4>
            </div>
            
            <ul className="certify_list">
              <li className="certify_item">
                <a id="certify_item_01">
                  <div className="cont">
                    인증 센터
                    <span className="iconbox">
                      <img src="./icon04.png" alt></img>
                    </span>
                  </div>
                </a>
              </li>
              <li className="certify_item">
                <a id="certify_item_02">
                  <div className="cont">
                    인증 수첩
                    <span className="iconbox">
                      <img src="./icon05.png" alt></img>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
                
      </div>
      <div className="con4">
        <Slider {...settings}>
          <div>
            <img src="./slide01.jpg"/> 
          </div>
          <div>
            <img src="./slide02.jpg" />
          </div>
          <div>
            <img src="./slide03.jpg" />
          </div>
          <div>
            <img src="./slide04.jpg" />
          </div>
          <div>
            <img src="./slide01.jpg" />
          </div>
          <div>
            <img src="./slide02.jpg" />
          </div>
        </Slider> 
      </div>
      <div className="con5">빈 공간</div>
    </div>
  );
}
