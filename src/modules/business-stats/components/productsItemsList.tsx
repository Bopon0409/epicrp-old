import { observer } from "mobx-react-lite";
import cn from 'classnames';
import { store }         from "../business-stats-store";
import { rgtMouseClick } from "./products";
import { priceFormat }   from "../../../services/services";

import water from "../img/water.svg";
import hoverEffect from "../img/hoverEffect.svg";



export const ProductsItemsList = observer(() => {
    const { products } = store.state;
    const items = products.type === 0 ? products.irlItems : products.items;
    return(
        <div className="items-list">
          {items?.map((item, i) => {
            return (
              <div
                className={cn("item", 
                {'item--active': products.activeBlock === i})}
                key={i}
                onClick={() => store.setProductsActiveBlock(i)}
                onMouseDown={rgtMouseClick}
              >
                <div className="item__name">{item.name}</div>
                <img src={water} className="item__image" alt="" />
                {products.activeBlock === i && (
                  <div className="item__image-active">
                    <img
                      src={hoverEffect}
                      className="item__image-hover"
                      alt=""
                    />
                  </div>
                )}
                <div className="item__about">
                  <div className="item__about-warehouse">
                    <span>На складе</span>
                    <span className="yellow">{item.amount}шт.</span>
                  </div>
                  <div className="item__about-price">
                    <span>Цена:</span>
                    <span className="yellow">${priceFormat(item.price)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    )
})