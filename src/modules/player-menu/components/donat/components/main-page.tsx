import { useState } from "react";
import { observer } from "mobx-react-lite";
import { donatStore } from "../donat-store";
import EpicLogoSVG from "../../../img/EpicLogo.svg";
import { TypesOfShadow } from "../constants";
import cn from "classnames";

export const MainPage = observer(() => {
  const [convertInput, setConvertInput] = useState("");
  const { playerName, operationsHistry, donatProducts } = donatStore.state;
  const {
    setPage,
    setActiveStoreProduct,
    convertDonatToMoney,
    coinCourse,
    setConfirmWindowData
  } = donatStore;

  // покупка продукта, если это кейс, то перебросит на 1-ую страницу
  const BuyProduct = (itemId: number) => {
    setActiveStoreProduct(itemId);
    if (donatProducts[itemId].content) {
      setPage(1);
    } else {
      const ITEM = donatProducts[itemId];
      setConfirmWindowData(ITEM.name, ITEM.price.toString(), "buy");
    }
  };
  // попытка ковертации денег
  const tryConvertMoney = () => {
    if (+convertInput > 0) convertDonatToMoney(+convertInput);
  };
  // возвращает +money, 0, или -money
  const transformMoneyToString = (money: number) => {
    let newMoney = "0";
    if (money > 0) newMoney = `+${money}`;
    else if (money < 0) newMoney = `${money}`;
    return newMoney;
  };
  // депозит
  const deposit = () => {
    console.log("deposit-btn");
  };

  return (
    <div className="main-page">
      <div className="donat-profile">
        <div className="player_name">{playerName}</div>
        <div className="player_balance">
          <span>Ваш баланс</span>
          <div>
            <span>{donatStore.state.coins}</span>
            <img src={EpicLogoSVG} alt="" />
          </div>
        </div>
        <div className="top_up-btn" onClick={() => deposit()}>
          Пополнить
        </div>
        <div className="coins-history-block">
          <span>История ECoin</span>
          <div className="coins-history">
            {operationsHistry.map((operation, id) => {
              return (
                <div className="history-el" key={id}>
                  <span className="history-el__type">{operation.type}</span>
                  <span
                    className={cn(
                      "history-el__amount",
                      { red: operation.amount < 0 },
                      { green: operation.amount > 0 }
                    )}
                  >
                    {" "}
                    {transformMoneyToString(operation.amount)}{" "}
                  </span>
                  <span className="history-el__date">{operation.date}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-coins">
          <div className="about-coins__logo" />
          <span className="about-coins__text">
            Epic Coin - валюта, позволяющая приобрести игровые привелегии или же
            какие - то бонусы.
          </span>
        </div>
      </div>

      <div className="line" />

      <div className="donat-operations">
        <div className="operation-name">Конвертация валюты</div>
        <div className="convert-and-btn">
          <div className="convert-block">
            <div className="convert">
              <input
                type="number"
                name=""
                id=""
                value={convertInput}
                onChange={(e) => setConvertInput(e.target.value)}
                className="convert__input"
                placeholder="Введите сумму"
              />
              <span className="convert__rate">
                Курс обмена: 1ECoin = ${coinCourse}
              </span>
            </div>
            <div className="convert-btn" onClick={() => tryConvertMoney()}>
              Конвертировать
            </div>
          </div>
          <div className="moves-block">
            <div className="donat-warehouse-btn" onClick={() => setPage(4)}>
              Склад выйгрыша
            </div>
          </div>
        </div>
        <div className="other-services">
          <div className="operation-name">Прочие услуги</div>
          <div className="services-list">
            {donatProducts.map((product, id) => {
              return (
                <div className="product" key={id}>
                  <span>{product.name}</span>
                  <div className="product__img">
                    <div className="product__img-img"></div>
                    <div
                      className="product__img-bg"
                      style={TypesOfShadow[product.color]}
                    />
                  </div>
                  <div className="product__price-and-buy">
                    <div className="product__price">
                      <div className="product__price-text">Стоимость</div>
                      <div className="product__price-coinsPrice">
                        <span>{product.price}</span>
                        <img
                          src={EpicLogoSVG}
                          alt=""
                          className="product-price-logo"
                        />
                      </div>
                    </div>
                    <div
                      className="product__buy"
                      onClick={() => BuyProduct(id)}
                    >
                      Приобрести
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
