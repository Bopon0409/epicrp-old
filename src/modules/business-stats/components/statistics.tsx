import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../business-stats-store";
import { priceFormat } from "../../../services/services";
import { IDaily } from "../model";

import { StatiticsDeafult } from "./statistics-default";
import { StatisticsWithdraw } from "./statistics-withdraw";
import { StatisticsDeposit } from "./statistics-deposit";
import { Graphics } from "./graphics";

const GraphicsTypes = [
  "Выручка за товар",
  "Продано единиц товара",
  "Потрачено за покупку",
];

export const Statistics = observer(() => {
  return (
    <div className="statistics">
      <div className="statistics-left_block">
        {changeStatsOperationBlock()}
        <div className="daily_сonsumption statistics-block">
          <div className="block_name">
            <span>СУТОЧНЫЕ РАСХОДЫ</span>
            <span className="red">
              {CountSum(store.state.stats?.dailyConsumption)}
            </span>
          </div>
          <div className="consumption_list">
            {store.state.stats?.dailyConsumption.map((consumption, i) => (
              <div className="consumption" key={i}>
                <span>{consumption.reason}</span>
                <span className="red">-$ {priceFormat(consumption.price)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="daily_income statistics-block">
          <div className="block_name">
            <span>СУТОЧНЫЙ ДОХОД</span>
            <span className="green">
              {CountSum(store.state.stats?.dailyIncome)}
            </span>
          </div>
          <div className="dailyIncome_list">
            {store.state.stats?.dailyIncome.map((income, i) => (
              <div className="dailyIncome" key={i}>
                <span>{income.reason}</span>
                <span className="green">+$ {priceFormat(income.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="statistics-right_block">
        <div className="graphics">
          <div className="graphics__upper-block">
            <div className="name">СТАТИСТИКА ЗА НЕДЕЛЮ</div>
            <div className="graphics_block">
              {GraphicsTypes.map((type, i) => (
                <div
                  className="block"
                  key={i}
                  onClick={() => store.setActiveTypeGraphics(i)}
                >
                  <div className="block__content">{type}</div>
                  <div
                    className={
                      store.state?.activeTypeGraphics === i
                        ? "block__line--active"
                        : "block__line"
                    }
                  />
                </div>
              ))}
              <div className="graphics_block-line" />
            </div>
          </div>
          <Graphics />
        </div>
        <div className="other">
          <div className="often_buy statistics-block">
            <div className="block_name">
              <span>ЧАСТО ПОКУПАЮТ</span>
              <span />
            </div>
            <div className="oftenBuy_List">
              {store.state.stats?.oftenBuy.map((oftenBuy, i) => (
                <div className="oftenBuy" key={i}>
                  <span>{oftenBuy.name}</span>
                  <span className="blue">$ {priceFormat(oftenBuy.price)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="buttons">
            <div className="sell_business_in_nation btn">
              ПРОДАТЬ БИЗНЕС ГОСУДАРСТВУ
            </div>
            <div
              className="open_business btn"
              onClick={() => store.changeBusinessStatus()}
            >
              {store.state.stats?.businessStatus
                ? "ЗАКРЫТЬ БИЗНС"
                : "ОТКРЫТЬ БИЗНЕС"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const CountSum = (arr: IDaily[] | undefined) => {
  let sum = 0;
  if (arr) {
    arr.map((v) => {
      sum += v.price;
      return sum;
    });
  }
  return `$ ${priceFormat(sum)}`;
};

const changeStatsOperationBlock = () => {
  switch (store.state.statsOperationType) {
    case 0:
      return <StatiticsDeafult />;
    case 1:
      return <StatisticsWithdraw />;
    case 2:
      return <StatisticsDeposit />;

    default:
      break;
  }
};
