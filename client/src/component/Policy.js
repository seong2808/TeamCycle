import { Link } from 'react-router-dom';

export default function Policy() {
    return (
      <div className="sg_main">
        	<div className="fs_snb_contents">
				
				<div className="fs_snb_box">
					<div className="sg_title">
						<div className="po_title_text">
								<h1>자전거 정책</h1><br />
								<h3>자전거 통행방법 및 표시</h3>
						</div>
						<div className="sg_title_image">
							<img src="./po_title.jpg" width="100%" height="100%"/>
						</div>
						
						<div class="fs_snb_box1">
							<div class="snb_title">
								<h3>자전거 안전교육</h3>
							</div>
							<nav class="snb_menu">
							<h2 class="hide">좌측메뉴</h2>
							<ul class="dep1">
								<li class="">
								<a target="_self" class="deplink"><span>교육자료</span></a> 
								</li>
								<li class="">
								<a target="_self" class="deplink"><span>자전거 안전 이용수칙</span></a>
								</li>                      
								<li>
								<a target="_self" class="deplink"><span>교육일정</span></a>                        
								</li>
							</ul>
							</nav>
						</div>

						<div className="sg_body">
							<div className="sg_sbt_text">
								국내 자전거 정책 소개
								<div className="po_main_image2">
									<img src="./정책1.jpg" width="100%" height="100%"/>
								</div>
								<div className="po_main_image1">
									<img src="./정책2.jpg" width="100%" height="100%"/>
								</div>
								<div className="po_main_image1">
									<img src="./정책3.jpg" width="100%" height="100%"/>
								</div>
	                       </div>
						</div>
					</div>
				</div>
			</div>
      </div>
    );
  }
