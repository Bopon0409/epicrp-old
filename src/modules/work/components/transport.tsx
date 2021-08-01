import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../work-store";
import { TransportImg } from "./transport-img";
import classNames from "classnames";

export const Transport = observer(() => {
  const {
    content: { transport },
    state: { type, lvl, workStatus, workShift, taxiRate },
    setTransport,
  } = store;

  const items = type === 4 ? [1, 2] : [1, 2, 3];
  const taxiRates = (num: number): string | undefined =>
    type === 1 ? `Тариф: $${taxiRate[num - 1]}/км` : transport[num - 1].str2;

  const isActive = (num: number): boolean =>
    num <= lvl && workStatus && !workShift;
  const buttonClasses = (num: number) =>
    classNames(
      "info__button",
      !isActive(num) ? "info__button--disabled" : null
    );

  const transportList = items.map((num) => (
    <div className="transport__item" key={num}>
      <TransportImg type={type} num={num} />
      <div className="info">
        <div className="info__title">Доступно с {num} LVL</div>
        {type === 4 ? (
          <div className="info__str">{transport[num - 1].str}</div>
        ) : (
          <>
            <div className="info__str">{transport[num - 1].str1}</div>
            <div className="info__str">{taxiRates(num)}</div>
          </>
        )}
        <div className={buttonClasses(num)} onClick={() => setTransport(num)}>
          <div className="text">
            {isActive(num) ? "Начать работу" : "Недоступно"}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="transport-block">
      <div className="transport__title">Выберите тип транспорта</div>
      <div className="transport__container">{transportList}</div>
    </div>
  );
});
