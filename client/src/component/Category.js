import React, { useState } from "react";

export default function Category({getData}) {
  const [cate, setCate] = useState('카테고리 선택')

  const btn1 = '자전거도로';
  const all = '전체';
  const btn2 = '정비소';
  const btn3 = '대여소';
  
  const onCategoryall = () => {
    const newCate = all;
    setCate(newCate);
  }

  const onCategorybtn1 = () => {
    const newCate = btn1;
    setCate(newCate);
  }
  
  const onCategorybtn2 = () => {
    const newCate = btn2;
    setCate(newCate);
  }
  const onCategorybtn3 = () => {
    const newCate = btn3;
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

      <div className="Cate_bnt1">
      <button onClick={onCategorybtn1}>{ btn1 }</button>
      </div>
      <div className="Cate_bnt2">
      <button onClick={onCategorybtn2}>{ btn2 }</button>
      </div>
      <div className="Cate_bnt3">
      <button onClick={onCategorybtn3}>{ btn3 }</button>
      </div>

      <div className="Cate_choice">
      <button onClick={onCateGoryChange}>선택완료</button>
      </div>

    </div>
  );
}