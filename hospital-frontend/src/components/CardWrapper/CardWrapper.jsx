import { useRef, useState } from "react";
import "./CardWrapper.css";

function CardWrapper({ children }) {
  const [menu, setMenu] = useState(false);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const card = useRef(0);
  const handleClick = (e) => {
    event.preventDefault();
    setX(e.clientX - card.current.getBoundingClientRect().left);
    setY(e.clientY - card.current.getBoundingClientRect().top);
    setMenu(!menu);
  };

  return (
    <div
      className="card_back"
      onContextMenu={(e) => handleClick(e)}
      ref={card}
      onClick={() => setMenu(false)}
      onMouseLeave={() => setMenu(false)}
    >
      {children}
      {menu && (
        <div
          className="menu"
          style={{
            "--x": X + "px",
            "--y": Y + "px",
          }}
        >
          <p className="mb-0 px-3 py-2 pb-0 sub_title">تعديل</p>
          <p className="mb-0 px-3 py-2 pt-0 sub_title">حذف</p>
        </div>
      )}
    </div>
  );
}

export default CardWrapper;
