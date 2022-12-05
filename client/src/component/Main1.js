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
    speed: 2000,
    // 자동 재생 유지 시간
    autoplaySpeed: 3000,
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
      <div className="con3">빈공간</div>
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
