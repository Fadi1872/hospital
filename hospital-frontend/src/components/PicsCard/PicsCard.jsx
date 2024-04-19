import "./PicsCard.css";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IoMdOpen } from "react-icons/io";

function PicsCard({ pic_info }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <>
      <CardWrapper>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0 sub_title">{pic_info.title}</p>
            <p className="mb-0 sub_title">{pic_info.created_at}</p>
          </div>
          <div
            className="pic_container position-relative overflow-hiddev"
            onClick={() => setShow(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ "--img": `url(${pic_info.img})` }}
          >
            <div className={`opacity-0 pics-overlay d-flex justify-content-center align-items-center ${hover && 'opacity-100'}`}>
                <IoMdOpen className="fs-1" />
            </div>
          </div>
        </div>
      </CardWrapper>
      {show && (
        <div className="overlay_pics px-5 py-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center background_exit p-3">
            <IoIosClose className="fs-1" onClick={() => setShow(false)} />
            <p className="mb-0 title">{pic_info.title}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-3 flex-grow-1">
            <TransformWrapper className="h-100">
              <TransformComponent>
                <img src={pic_info.img} alt="img" className="xoomed_img" />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
    </>
  );
}

export default PicsCard;
