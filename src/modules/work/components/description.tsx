import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../work-store";
import carrierImg from "../img/title_carrier.png";
import busImg from "../img/title_bus.png";
import taxiImg from "../img/title_taxi.png";
import electricianImg from "../img/title_electrician.png";
import stepsImg from "../img/steps.svg";

export const Description = observer(() => {
  const {
    state: { type, workStatus, workShift },
    content,
    setWorkStatus,
    workShiftCancel,
  } = store;
  const { name, description, steps } = content;

  return (
    <div className="description-block">
      <div className="title">
        <TitleImg type={type} />
        <div className="title__text">
          <div className="first">Профессия</div>
          <div className="second">{name}</div>
        </div>
      </div>

      <div className="steps">
        <div className="steps__title">Как начать работать?</div>
        <div className="steps__container steps__container--center">
          <div className="step__item">{steps[1]}</div>
        </div>
        <img src={stepsImg} alt="" className="steps__img" />
        <div className="steps__container steps__container--space-between">
          <div className="step__item">{steps[0]}</div>
          <div className="step__item">{steps[2]}</div>
        </div>
      </div>

      <div className="description">
        <div className="description__title">Описание работы</div>
        <div className="description__container">
          <div className="description__text">{description}</div>
        </div>
      </div>

      <div className="button-container">
        {workShift ? (
          <div className="button button--no-active" onClick={workShiftCancel}>
            <div className="text">Закончить работу</div>
          </div>
        ) : null}

        {!workStatus ? (
          <div className="button button--active" onClick={setWorkStatus}>
            <div className="text">Устроиться</div>
          </div>
        ) : (
          <div className="button button--no-active" onClick={setWorkStatus}>
            <div className="text">Уволиться</div>
          </div>
        )}
      </div>
    </div>
  );
});

function TitleImg(props: { type: 0 | 1 | 2 | 3 | 4 }) {
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
