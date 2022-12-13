import React, { useState } from "react";

export default function Category({getData}) {
  const [cate, setCate] = useState('카테고리 선택')

  const all = '지도 검색';
  const btn1 = '보관소 검색';
  const btn2 = '대여소 검색';
  
  const onCategoryall = () => {
    const newCate = all;
    setCate(newCate);
  }
  
  const onCategorybtn2 = () => {
    const newCate = btn1;
    setCate(newCate);
  }
  const onCategorybtn3 = () => {
    const newCate = btn2;
    setCate(newCate);
  }
  const onCateGoryChange = () => {
    getData(cate);
  }

  return (
    <div className="Category">

      <h2 id="catechoice">{ cate }</h2>

      <div className="Cate_all">
        <button onClick={onCategoryall}>{ all }</button>
      </div>
      <div className="Cate_bnt2">
      <button onClick={onCategorybtn2}>{ btn1 }</button>
      </div>
      <div className="Cate_bnt3">
      <button onClick={onCategorybtn3}>{ btn2 }</button>
      </div>

      <div className="Cate_choice">
      <button onClick={onCateGoryChange}>선택완료</button>
      </div>

    </div>
  );
}