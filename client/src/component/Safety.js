
export default function Safety() {
  return (
  <div className='sa_main'>
     <div className="fs_snb_contents">
           <div className="fs_snb_box">
              <div className="sa_title">
                 <div className="po_title_text">
                       <h1>자전거 안전교육</h1><br />
                       <h3>자전거 이용시 안전 교육 자료</h3>
                 </div>
                 <div className="sa_title_image">
                    <img src="./sub_01.jpg" width="100%" height="100%"/>
                 </div>
                 <div class="fs_snb_box1">
                    <div class="snb_title">
                       <h3>자전거 안전교육</h3>
                 </div>
                    <nav class="snb_menu">
                    <h2 class="hide">좌측메뉴</h2>
                    <ul class="dep1">
                    <li class="">
                     <a target="_self" href="http://localhost:3000/Policy" class="deplink"><span>자전거 정책</span></a> 
                    </li>
                    <li class="">
                     <a target="_self" href="http://localhost:3000/Safety" class="deplink"><span>자전거 안전 이용수칙</span></a>
                    </li>                      
                    <li>
                     <a target="_self" href="http://localhost:3000/Bikesafe" class="deplink"><span>자전거 안전교육</span></a>                        
                    </li>
                 </ul>
              </nav>
           </div>
        </div>
     </div>
  </div>
<div className='sa_body'>
   <div className="Safety">
        <div className="safeT">
           <h1>자전거 이용 안전수칙 강의</h1>
        </div>
           <div className="safeN">
              <h1>성인 자전거 안전 강의</h1>
              <div className="yout" >
              <iframe width="560"  src="https://www.youtube.com/embed/ZfG-CIrbkzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h1>안전한 자전거 타기 강의</h1>
              <div className="yout">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qlOxBVN4YxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h1>어린이 자전거 안전 강의</h1>
              <div className="yout">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/gUZHzyjBXA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h1>어린이 안전한 자전거 생활 강의</h1>
              <div className="yout">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UvFnD_5Clvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
        </div>
     </div>
  </div>
</div>
);
}