import React from "react";
import taxiImg from "../img/title_taxi.png";
import busImg from "../img/title_bus.png";
import carrierImg from "../img/title_carrier.png";
import electricianImg from "../img/title_electrician.png";

export function TitleImg(props: { type: 0 | 1 | 2 | 3 | 4 }) {
  const { type } = props;
  switch (true) {
    case type === 1:
      return <img src={taxiImg} alt="" className="title__img" />;
    case type === 2:
      return <img src={busImg} alt="" className="title__img" />;
    case type === 3:
      return <img src={carrierImg} alt="" className="title__img" />;
    case type === 4:
      return <img src={electricianImg} alt="" className="title__img" />;
    default:
      return null;
  }
}
