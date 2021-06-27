import { observer } from "mobx-react-lite";
// import React from 'react'
import cn from "classnames";

import { store } from "../business-stats-store";
import { priceFormat } from "../../../services/services";

import Plus from "../img/plus.svg";
import Minus from "../img/minus.svg";

export const Warehouse = observer(() => {
  const { setWarehouseOrderAmount, setOrdersList } = store;
  const { warehouse, resultPrice, stats } = store.state;
  const { purchaseItems } = warehouse;

  const changeOrderAmount = (event: any) => {
    if (event.target.value.length < 6 && event.target.value >= 0) {
      setWarehouseOrderAmount(event.target.value);
    }
    store.setWarehouseResultPrice();
  };
  const changeOrderAmountAfterClick = (type: string) => {
    if (type === "minus") setWarehouseOrderAmount(store.state.orderAmount - 1);
    else setWarehouseOrderAmount(store.state.orderAmount + 1);
    store.setWarehouseResultPrice();
  };

  const inputActiveBG = {
    width: (warehouse.stockWorkload.now / warehouse.stockWorkload.max) * 746,
  };
  const inputActiveThumb = {
    marginLeft:
      (warehouse.stockWorkload.now / warehouse.stockWorkload.max) * 746 - 10,
  };

  return (
    <div className="warehouse">
      {store.state.stats?.businessName[0] !== "ЗАПРАВКА" ? (
        <div className="warehouse-left_block">
          <div className="block_name">ТОВАРЫ НА СКЛАДЕ</div>
          <div className="items_list">
            {store.state.warehouse?.itemsInStock.map((item, i) => (
              <div className="item" key={i}>
                <div className="item-name">{item.name}</div>
                <div
                  className={cn("item-amount", {
                    red: item.amount === 0,
                    yellow: item.amount < 50 && item.amount > 0,
                    blue: item.amount > 50,
                  })}
                >
                  {item.amount > 0 ? item.amount + " шт" : "закончился"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="warehouse-left_block">
          <div className="left_block-upper medium-block">
            <div className="block-name">ТОВАРЫ НА СКЛАДЕ</div>
            <div className="list">
              {warehouse?.itemsInStock.map((item, i) => {
                if (i < 4){
                  return (
                    <div className="item" key={i}>
                      <span>{item.name}</span>
                      <span>
                        {item.amount > 0 ? (
                          <span className="green">В НАЛИЧИИ</span>
                        ) : (
                          <span className="red">НЕ В НАЛИЧИИ</span>
                        )}
                      </span>
                    </div>
                  )}
                  return null;
              })}
            </div>
          </div>
          <div className="left_block-lower medium-block">
            <div className="block-name">ЭКВИВАЛЕНТ ТОПЛИВА</div>
            <div className="list">
              {warehouse?.fuelEquivalent.map((item, i) => {
                if (i < 4){
                  return (
                    <div className="item" key={i}>
                      <span>{item.name}</span>
                      <span>{item.equivalent}</span>
                    </div>
                  )}
                  return null;
              })}
            </div>
          </div>
        </div>
      )}

      <div className="warehouse-right_block">
        <div className="warehouse_workload">
          <div className="name">ЗАГРУЖЕННОСТЬ СКЛАДА</div>
          <div className="input-block">
            <span>Количество единиц товаров на складе</span>
            <div className="input-block_line">
              <span>0</span>
              <div className="input">
                <div className="input__bg">
                  <div className="input__bg--active" style={inputActiveBG} />
                  <div
                    className="input__bg--active_warehouse"
                    style={inputActiveBG}
                  >
                    {priceFormat(warehouse.stockWorkload.now)}
                  </div>
                  <div
                    className="input__bg--active_thumb"
                    style={inputActiveThumb}
                  />
                </div>
              </div>
              <span>{priceFormat(warehouse.stockWorkload.max)}</span>
            </div>
          </div>
        </div>
        <div className="purchase">
          <div className="purchase-items_list">
            <div className="block-name">ВЫБЕРИТЕ ТОВАР ДЛЯ ЗАКУПКИ</div>
            <div className={cn('block-list', 
            {'block-list-scroll' : stats?.businessName[0] !== "ЗАПРАВКА"} )}>
              {warehouse?.purchaseItems.map((item, i) => {
                const MAX = stats?.businessName[0] !== "ЗАПРАВКА" ? 
                purchaseItems.length : 4;
                if(i < MAX){
                const CHECK = store.state.oredersId.indexOf(i);
                return (
                  <div
                    className={cn("item", {
                      "item--active": i === store.state.oredersId[CHECK],
                    })}
                    key={i}
                    onClick={() => setOrdersList(i)}
                  >
                    <span>{item.name}</span>
                    <div className="price-and-changes">
                      <div>
                        <span className="price-change__text">
                          {item.priceChanges >= 0 ? (
                            <span>+${item.priceChanges}</span>
                          ) : (
                            <span>-${item.priceChanges * -1}</span>
                          )}
                        </span>
                        <div className="price-change__img">
                          <img
                            src={item.priceChanges >= 0 ? Plus : Minus}
                            alt="changed price"
                          />
                        </div>
                      </div>
                      <span>${priceFormat(item.price)} шт.</span>
                    </div>
                  </div>
                );
              }
              return null;
              })}
            </div>
          </div>
          <div className="purchase-line"></div>
          <div className="purchase-order_block">
            <div className="name">
              ВЫ ВЫБРАЛИ ({store.state.oredersId.length}){" "}
              {checkNumber(store.state.oredersId.length)} ТОВАРА
            </div>
            <div className="about">
              Введите количество автомобилей для закупки
            </div>
            <div className="order">
              <div
                className="operation-block"
                onClick={() => {
                  changeOrderAmountAfterClick("minus");
                }}
              >
                -
              </div>
              <input
                type="number"
                value={store.state.orderAmount}
                onChange={changeOrderAmount}
              />
              <div
                className="operation-block"
                onClick={() => changeOrderAmountAfterClick("plus")}
              >
                +
              </div>
            </div>
            <div className="result-price">
              <span>Общая стоимость</span>
              <span className="yellow">${resultPrice}</span>
            </div>
            <div className="btnBuy"
            // onClick = {() => clearOrdersList()}
            >Оплатить</div>
          </div>
        </div>
      </div>
    </div>
  );
});

const checkNumber = (num: number) => {
  if (num === 0 || (num >= 5 && num <= 20)) return "ЕДИНИЦ";
  else if (num === 1) return "ЕДИНИЦУ";
  else if (num === 2 || num === 3 || num === 4) return "ЕДИНИЦЫ";
  else if (num % 10 === 0) return "ЕДИНИЦ";
  else if (num % 10 === 1) return "ЕДИНИЦА";
  else return "ЕДИНИЦЫ";
};
