import { observer } from "mobx-react-lite";
import { donatStore } from "../donat-store";
import { ItemTiers } from "../constants";
import { BackgroundTier } from "../constants";
import cn from "classnames";

export const DonateWarehouse = observer(() => {
  const { prizeWarehouse } = donatStore.state;
  const { setWarehouseActiveItem, warehouseActiveItem, prizeMove, setPage } =
    donatStore;

  console.log(prizeWarehouse);
  return (
    <div className="donat-warehouse-wrapper">
      <div className="player-menu_btn-back" onClick={() => setPage(0)}>
        Вернуться в меню{" "}
      </div>
      <div className="donat-warehouse">
        <span className="page-name">Склад выйгрыша</span>
        <span className="your-prizes">Ваши выйгранные призы</span>
        <div className="items-item_img-about">
          <div className="warehouse-items">
            {prizeWarehouse.map((item, id) => {
              return (
                <div
                  className={cn("warehouse-items__item", {
                    "warehouse-item--active": id === warehouseActiveItem,
                  })}
                  key={id}
                  onClick={() => setWarehouseActiveItem(id)}
                >
                  <div
                    className="donatItem-bg"
                    style={BackgroundTier[item.tier]}
                  />
                  <div className="donatItem-img"></div>
                  <span className="donatItem-name">
                    Элемент одежды “Майка LGBT”
                  </span>
                </div>
              );
            })}
          </div>

          <div className="warehouse-item_img">
            {warehouseActiveItem >= 0 &&
              warehouseActiveItem < prizeWarehouse.length - 1 && (
                <div className="item_img__bg">
                  <img src={prizeWarehouse[warehouseActiveItem].img} alt="" />
                </div>
              )}
          </div>

          {warehouseActiveItem >= 0 &&
            warehouseActiveItem < prizeWarehouse.length && (
              <div className="warehouse-about">
                <span className="warehouse-about__name">
                  {prizeWarehouse[warehouseActiveItem].name}
                </span>
                <span className="warehouse-about__comment">
                  {prizeWarehouse[warehouseActiveItem].comment}
                </span>
                <div className="warehouse-about__tier">
                  <span className="tier">Редкость</span>
                  <span>
                    {ItemTiers[prizeWarehouse[warehouseActiveItem].tier]}
                  </span>
                </div>
                <div className="warehouse-about__buttons">
                  <div className="take_prize" onClick={() => prizeMove("take")}>
                    Забарть приз
                  </div>
                  <div className="sell_prize" onClick={() => prizeMove("sell")}>
                    Продать приз
                  </div>
                </div>
              </div>
            )}
        </div>
        <div className="warehouse-info">
          Вы можете забрать свой приз сразу, или же спустя какое - то время.Так
          же Вы можете продать свой приз обратно в кейс, за небольшую плату. При
          продаже своего приза, вы получите 20% от стоимости кейса обратно.
        </div>
      </div>
    </div>
  );
});
