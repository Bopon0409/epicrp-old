import React from "react";

import transportBus1 from "../img/transport_bus_1.png";
import transportBus2 from "../img/transport_bus_2.png";
import transportBus3 from "../img/transport_bus_3.png";
import transportTaxi1 from "../img/transport_taxi_1.png";
import transportTaxi2 from "../img/transport_taxi_2.png";
import transportTaxi3 from "../img/transport_taxi_3.png";
import transportCarrier1 from "../img/transport_carrier_1.png";
import transportCarrier2 from "../img/transport_carrier_2.png";
import transportCarrier3 from "../img/transport_carrier_3.png";
import electricity1 from "../img/electricity1.png";
import electricity2 from "../img/electricity2.png";

export interface TransportImgProps {
  type: 0 | 1 | 2 | 3 | 4;
  num: number;
}

export const TransportImg = (props: TransportImgProps) => {
  const { type, num } = props;
  switch (true) {
    case type === 1 && num === 1:
      return <img src={transportTaxi1} alt="" className="transport__img" />;
    case type === 1 && num === 2:
      return <img src={transportTaxi2} alt="" className="transport__img" />;
    case type === 1 && num === 3:
      return <img src={transportTaxi3} alt="" className="transport__img" />;
    case type === 2 && num === 1:
      return <img src={transportBus1} alt="" className="transport__img" />;
    case type === 2 && num === 2:
      return <img src={transportBus2} alt="" className="transport__img" />;
    case type === 2 && num === 3:
      return <img src={transportBus3} alt="" className="transport__img" />;
    case type === 3 && num === 1:
      return <img src={transportCarrier1} alt="" className="transport__img" />;
    case type === 3 && num === 2:
      return <img src={transportCarrier2} alt="" className="transport__img" />;
    case type === 3 && num === 3:
      return <img src={transportCarrier3} alt="" className="transport__img" />;
    case type === 4 && num === 1:
      return <img src={electricity1} alt="" className="transport__img" />;
    case type === 4 && num === 2:
      return <img src={electricity2} alt="" className="transport__img" />;
    default:
      return null;
  }
};
