import { observer } from "mobx-react-lite";
import { donatStore } from "../donat-store";
import EpicLogoSVG from "../../../img/EpicLogo.svg";
import { BackgroundTier } from "../constants";
import { useState } from "react";

export const LuckyCase = observer(() => {
  const { activeStoreProduct } = donatStore;
  const { donatProducts, coins } = donatStore.state;
  const [buyCase, setBuyCase] = useState(false);

  return (
    <div className="lucky-case">
      <div className="upper-block">
        <span>Кейс "Удачи"</span>
        <div className="donat_and_warehouse">
          <div className="donat__warehouse">Мои выйгрыши</div>
          <div className="donat__balance">
            <span>Ваш баланс</span>
            <div>
              <span>{coins}</span>
              <img src={EpicLogoSVG} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="open-lucky-case">
        {buyCase ? (
          <div className="donat-roulette"></div>
        ) : (
          <div className="buy-case">
            <div className="buy-case--btn" onClick={() => setBuyCase(true)}>
              Открыть кейс
            </div>
            <span>
              Стоимость одного открытия -{" "}
              {donatProducts[activeStoreProduct].price}
            </span>
          </div>
        )}
      </div>

      <div className="lucky-case-content">
        <span className="lucky-case-content--text">Содержимое кейса</span>
        <div className="items-list">
          {donatProducts[activeStoreProduct].content &&
            donatProducts[activeStoreProduct].content?.map((item, id) => (
              <div className="items-list__item" key={id}>
                <div
                  className="donatItem-bg"
                  style={BackgroundTier[item.tier]}
                />
                <div className="donatItem-img"></div>
                <span className='donatItem-name'>
                  Элемент одежды “Майка LGBT”
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
});
