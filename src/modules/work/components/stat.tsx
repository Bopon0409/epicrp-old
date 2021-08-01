import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../work-store";

export const Stat = observer(() => {
  const {
    content: { progressName },
    state: { lvl, nextLvl, progress, rentStatus, car, dayEarned, weekEarned },
  } = store;

  return (
    <div className="stat-block">
      <div className="stat__title">Ваша статистика</div>

      <div className="stat__container">
        <div className="item item--big">
          <div className="item__title">Уровень мастерства</div>
          <div className="item__value">{lvl}</div>
        </div>

        <div className="item">
          <div className="item__title">До повышения навыка</div>
          <div className="item__value">{nextLvl}</div>
        </div>

        <div className="item">
          <div className="item__title">{progressName}</div>
          <div className="item__value">
            {progress} / <span className="item__progress">{nextLvl}</span>
          </div>
        </div>

        <div className="item">
          <div className="item__title">Аренда автомобиля</div>
          <div className="item__value">
            {rentStatus ? (
              <div className="item__value--rent">Арендован</div>
            ) : (
              <div className="item__value--rent--none">Не арендован</div>
            )}
          </div>
        </div>

        <div className="item">
          <div className="item__title">Автомобиль</div>
          <div className="item__value">{car}</div>
        </div>

        <div className="item">
          <div className="item__title">Заработано за сегодня</div>
          <div className="item__value">${dayEarned}</div>
        </div>

        <div className="item">
          <div className="item__title">Заработано за неделю</div>
          <div className="item__value">${weekEarned}</div>
        </div>
      </div>
    </div>
  );
});
