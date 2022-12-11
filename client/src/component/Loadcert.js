import { Link } from 'react-router-dom';

export default function Loadcert() {
    return (
      <div className="sg_main">
        <div className="fs_snb_contents">
					<div className="fs_snb_box">
						
		<div className="sg_title">
      <div className="sg_title_text">
			  <h1>국토종주 자전거길 소개</h1><br />
			  <h3>자전거 행복나눔과 함께하는 행복 안전 라이딩</h3>
      </div>
      <div className="sg_title_image">
        <img src="./sg_title.jpg" width="100%" height="100%"/>
      </div>

	<div className="sg_sub_memu">
		<div className="sg_sub_image">
        <img src="./wave.jpg" width="100%" height="100%"/>
        </div>
		<div className="sg_sub_list">
		  <Link to="./LoadIntro">ㅁ 국토종주 자전거길 소개</Link>
		</div>
		<div className="sg_sub_list">
		  <Link to="./LoadInfo">ㅁ 국토종주 자전거길 정보</Link>
		</div>
		<div className="sg_sub_list">
		  <Link to="./Loadcert">ㅁ 국토종주 인증</Link>
		</div>
	</div>

    <div className="sg_body">
	<div className="sg_sbt_text">
	국토종주 자전거길 인증
	<div className="sg_main_image1">
	    <img src="./인증1.jpg" width="80%" height="80%"/>
	</div>
	<div className="sg_main_image">
	    <img src="./인증2.jpg" width="80%" height="80%"/>
	</div>
	<div className="sg_main_image">
	    <img src="./인증3.jpg" width="80%" height="80%"/>
	</div>
	                       </div>
						</div>
					</div>
				</div>
			</div>
      </div>
    );
  }
