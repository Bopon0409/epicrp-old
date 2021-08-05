import { observer } from "mobx-react-lite";
import { donatStore } from "../donat-store";
import EpicLogoSVG from "../../../img/EpicLogo.svg";

export const PrizePage = observer(() => {
  const { setPage, prize, warehouseActiveItem, setConfirmWindowData } = donatStore;
  const { coins, prizeWarehouse } = donatStore.state;

  const OpenAgain = () => {
    setPage(1);
  };
  const OpenMainMenu = () => {
    const ITEM = prizeWarehouse[warehouseActiveItem];
    setConfirmWindowData(ITEM.name, ITEM.sellPrice.toString(), 'sell')
  };

  return (
    <div className="donat-prize-page">
      <div className="player-menu_btn-back" onClick={() => setPage(0)}>
        Вернуться в меню{" "}
      </div>
      <div className="donat-prize-page-content">
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

        <span className="donat-prize_compliment">Поздравляем!</span>

        <div className="donat-prize_item">
          <div className="donat-prize_item-bg" />
          <div className="donat-prize_item-img">{/* [here will img] */}</div>

          <div className="donat-prize_item-about">
            <div className="donat-prize_item-about__your-prize">
              Ваш выйгрыш
            </div>
            <span className="donat-prize_item-about__item-name">
              {prize.name}
            </span>
            <span className="donat-prize_item-about__item-comment">
              {prize.comment}
            </span>
          </div>
        </div>

        <div className="donat-prize_buttons">
          <div
            className="donat-prize_buttons__sell"
            onClick={() => OpenMainMenu()}
          >
            Продать
          </div>
          <div
            className="donat-prize_buttons__openAgain"
            onClick={() => OpenAgain()}
          >
            Открыть ещё
          </div>
        </div>
      </div>
    </div>
  );
});
