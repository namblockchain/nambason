import React, { useState } from "react";
import HomeMenu from "../components/HomeMenu";
import { NavLink, useNavigate } from "react-router-dom";
import { Carousel } from "antd";

const Index = () => {
  const navigate = useNavigate();

  // Text tương ứng cho từng slide
  const slideTexts = [
    "BẤT ĐỘNG SẢN HẠNG SANG TẠI TRUNG TÂM SÀI GÒN",
    "CHUYÊN NGHIỆP & ĐẲNG CẤP VƯỢT TRỘI",
    "CƠ HỘI ĐẦU TƯ SINH LỜI BỀN VỮNG",
    "DỊCH VỤ CHĂM SÓC TẬN TÂM 24/7",
    "KIẾN TẠO GIÁ TRỊ BỀN VỮNG, TĂNG TRƯỞNG VƯỢT THỜI GIAN",
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div id="index">
      <HomeMenu />

      <div className="banner">
        <Carousel autoplay beforeChange={(from, to) => setCurrent(to)}>
          <div>
            <img
              src="./img/b1.jpg"
              alt=""
              onClick={() => navigate("/portfolio")}
            />
          </div>
          <div>
            <img
              src="./img/b2.jpg"
              alt=""
              onClick={() => navigate("/portfolio")}
            />
          </div>
          <div>
            <img
              src="./img/b3.jpg"
              alt=""
              onClick={() => navigate("/portfolio")}
            />
          </div>
          <div>
            <img
              src="./img/b4.jpg"
              alt=""
              onClick={() => navigate("/portfolio")}
            />
          </div>
          <div>
            <img
              src="./img/b5.jpg"
              alt=""
              onClick={() => navigate("/portfolio")}
            />
          </div>
        </Carousel>
      </div>

      {/* Text đổi theo slide */}
      <div className="banner-text">{slideTexts[current]}</div>

      <div className="welcome">
        <p>welcome to</p>
        <h1>NAM BA SON</h1>
        <button type="button">
          <p>
            <NavLink to={"/portfolio"}>
              View our work
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </NavLink>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Index;



