import { observer } from "mobx-react-lite";
import { donatStore } from "../donat-store";
import EpicLogoSVG from "../../../img/EpicLogo.svg";
import { BackgroundTier } from "../constants";
import { useState, useEffect, useCallback } from "react";

const STEP = -194; // шаг, задаётся в px
const SCROLL_START_TIME = 1 * 1000; // время до начала скролла
const SCROLL_TIME = 2 * 1000; // время самолго скролла
const TIME_FOR_WAIT_AFTER_OPEN = 1 * 1000; // время ожидания, после прокрутки

export const LuckyCase = observer(() => {
  const {
    activeStoreProduct,
    caseContent,
    setWinningIndex,
    winningIndex,
    setPage,
    setWinnerIndex,
    setPrize,
    checkPlayerDonatMoney,
    setTransactionResult,
    transactionResult,
  } = donatStore;
  const { donatProducts, coins } = donatStore.state;
  const [buyCase, setBuyCase] = useState(false);
  const [isMarginLeft, setIsMarginLeft] = useState(`${STEP * 2}px`);


  
  useEffect(() => {
    if (buyCase) {
      setIsMarginLeft(`${STEP * 2}px`); // стандартная позиция
      if(caseContent.length && winningIndex !== -1)
      setPrize(caseContent[winningIndex]); // данные для страницы с призом
      setTimeout(() => {
        setIsMarginLeft(`${(winningIndex - 1) * STEP}px`); // перемещаем до нужной позиции
      }, 1000);
    }

    if(transactionResult){
      setTransactionResult(false);
      setBuyCase(true);
      setWinningIndex();
      let timer = setTimeout(() => {
        setBuyCase(false);
        setPage(2);
        setWinnerIndex(-1);
        clearTimeout(timer);
      }, SCROLL_START_TIME + SCROLL_TIME + TIME_FOR_WAIT_AFTER_OPEN + 1000);
    }
  }, [buyCase, winningIndex, setIsMarginLeft, setTransactionResult, transactionResult]);

  const mainMenuBtn = () => {
    setPage(0);
    setBuyCase(false);
    setWinnerIndex(-1);
    setTransactionResult(false);
  };

  const BuyCaseClick = () => {
    if (!buyCase) {
      checkPlayerDonatMoney(activeStoreProduct)
    }
  };



  return (
    <div className="lucky-case">
      {buyCase ? null : (
        <div className="player-menu_btn-back" onClick={() => mainMenuBtn()}>
          Вернуться в меню
        </div>
      )}
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
        {buyCase && caseContent.length > 0 && winningIndex != -1 ? (
          <div className="donat-roulette">
            <div className="donat-roulette__zone">
              <div
                className={"roulette-header_zone"}
                style={{
                  marginLeft: isMarginLeft,
                  transition: `all ${SCROLL_TIME / 1000}s ease-out`,
                }}
              >
                {caseContent.map((item, id) => (
                  <div className="roulette-item" key={id}>
                    <div className="roulette-item_bg" 
                      style={BackgroundTier[item.tier]} />
                    <div className="roulette-item__img"></div>
                    <span className="roulette-item__text">
                      {item.name + " " + id}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="roulette-line" />
          </div>
        ) : (
          <div className="buy-case">
            <div className="buy-case--btn" onClick={() => BuyCaseClick()}>
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
                <span className="donatItem-name">
                  {item.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
});
