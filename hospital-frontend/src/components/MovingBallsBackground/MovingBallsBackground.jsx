import { useEffect, useRef } from "react";
import "./MovingBallsBackground.css";

function MovingBallsBackground({ children }) {
  const circle_1 = useRef(null);
  const circle_2 = useRef(null);
  const main_container = useRef(null);

  const move = (circle, container_boundaries) => {
    let dx = Math.random() < 0.5 ? -1 : 1;
    let dy = Math.random() < 0.5 ? -1 : 1;

    setInterval(() => {
      let circle_boundaries = circle.getBoundingClientRect();
      let middleX = (circle_boundaries.left + circle_boundaries.right)/2
      let middleY = (circle_boundaries.top + circle_boundaries.bottom)/2
      if (
        middleX <= container_boundaries.left ||
        middleX >= container_boundaries.right
      )
        dx = -dx;
      if (
        middleY <= container_boundaries.top ||
        middleY >= container_boundaries.bottom
      )
        dy = -dy;

      circle.style.top = circle_boundaries.top + dy + "px";
      circle.style.left = circle_boundaries.left + dx + "px";
    }, 100);
  };

  useEffect(() => {
    move(circle_1.current, main_container.current.getBoundingClientRect());
    move(circle_2.current, main_container.current.getBoundingClientRect());
  }, []);

  return (
    <div className="main-container overflow-hidden">
      <div className="position-relative blend vh-100" ref={main_container}>
        <div className="circle" ref={circle_1}></div>
        <div className="circle" ref={circle_2}></div>
      </div>
      <div className="vh-100 backdrop-blur">{children}</div>
      <svg className="filterSvg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default MovingBallsBackground;
