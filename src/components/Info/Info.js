import React from "react";
import "./info.css";
import Button from "../Button/index";

const Info = () => {
  return (
    <div className="info">
      <div className="info-left">
        <div className="">
          <span>Welcome to </span>

          <Button />
        </div>
      </div>

      <div className="info-right">
        <div className="info-right-bg">

        </div>
        <div className="info-right-diamond">
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gae/yxdb_995UrIS6W9YIHMfMCRsdYRqcITlBvO5w7OoUx35rkClUeq9rPCvTMXdtw_zION07O_qRZSuNfZu6R6o8bI_KmbrfThhFtA4SBc?auto=format&w=128"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gae/hP4JJhiY5yXu1mCvNycTke2O_xbtgIFfkLTjfT7C9TNKinkGpP2COikt7cwn0xqzoATRNC21wsiwy_Fe-MQ3PPTgRjkbbCfJf__L?auto=format&w=128"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gae/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U?auto=format&w=1920"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gae/4k4hX_GGIDocSxc91M6Ak-2mqpqzW6T266r-LlivahH6pgNmT1MRy8_H6UZX8UPDODJ_HMvTXqE9P8DXIeLiuBp9t3m7NF-ck8Xn?auto=format&w=256"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          
  
        </div>
      </div>
    </div>
  );
};

export default Info;
