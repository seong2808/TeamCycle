import { Link } from "react-router-dom";
import Login from "./Login";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Header(props) {

    let [modal, setModal] = useState(false);

    return (
        <div className="header">
        <div className="con1">
            <Link to="/Home">
                <img id="logo" src="./logo.png" />
            </Link>

            <div className="menu">
            <nav id="main_menu" className="main_menu">
                <Link to="/Intro">소개 및 사용법</Link>
                <Link to="/Ro">자전거 정책</Link>
                <Link to="/Safety">자전거 안전교육</Link>
                <Link to="/Search">검색</Link>
            </nav>
                <button className="login" onClick={() => setModal(!modal)}>
                    로그인
                    {modal && (
                        <Modal closeModal={() => setModal(!modal)}>
                            <Login />
                        </Modal>
                    )}
                </button>
            </div>

            <div className="more-btn">
            <i className="icon"></i>
            </div>
        </div>
        <div className="con1_space"></div>
        </div>
    );
  }