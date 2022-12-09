import React, { useState } from "react";
import Modal from "./Modal";
import Category from "./Category";


export default function Search_Button(props) {

  let [modal, setModal] = useState(false);
  const [text, setText] = useState("");

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  }
  
  const submitText = () => {
    props.propFunction(text)
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
              <div className="loca_info">카카오</div>
            </div>
            {modal && (
              <Modal closeModal={() => setModal(!modal)}>
                <Category />
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