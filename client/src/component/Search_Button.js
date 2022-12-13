import React, { useState } from "react";
import Modal from "./Modal";
import Category from "./Category";

export default function Search_Button({highFunction, onSearchcate}) {

  const [loca, setLoca] = useState('전체');


  const getData = (text) => {
    setLoca(text);
    sendCate(text);
  }

  const sendCate = (loca) => {
    onSearchcate(loca)
    console.log(loca)
  }

  let [modal, setModal] = useState(false);
  const [text, setText] = useState("");

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  }
  
  const submitText = () => {
    highFunction(text)
  }


  const onKeyPress = (e) => {
    if(e.key == 'Enter') {
      submitText();
    }
  }

  return (
      <div className="search_bor">
          <button className="location" onClick={() => setModal(!modal)}>
            <img className="loca_icon" src="./loca_icon.png"></img>
            <div className="area">                
              <div className="loca_info">{loca}</div>
            </div>
            {modal && (
              <Modal closeModal={() => setModal(!modal)}>
                <Category getData={getData}/>
              </Modal>
            )}
          </button>
          <div className="divide_y"></div>
          <input className="search_space" type="text" placeholder="자전거 도로 및 편의시설 검색" onChange={textChangeHandler} onKeyDown={onKeyPress}/>
          <button className="search_button" onClick={submitText} >
            <img src="./search_icon.png"></img>
          </button>
      </div>
  );
}