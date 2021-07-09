import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "./shops-and-parlors-store";
import "./shops-and-parlors.scss";
import { ShopName } from './constants';

import { Payment } from '../payment/payment';
import { Items } from "./components/items";
import { Colors } from "./components/colors";
import { Sections } from "./components/sections";

export const ShopsAndParlors = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window;
    const { setShow, setMoney, setData, clearActives } = store;
    em.addHandler("shops-and-parlors.show", setShow);
    em.addHandler("shops-and-parlors.money", setMoney);
    em.addHandler("shops-and-parlors.data", setData);
    em.addHandler("shops-and-parlors.clear-actives", clearActives);
    return () => {
      em.removeHandler("shops-and-parlors.show", setShow);
      em.removeHandler("shops-and-parlors.money", setMoney);
      em.removeHandler("shops-and-parlors.data", setData);
      em.removeHandler("shops-and-parlors.clear-actives", clearActives);
    };
  }, []);
  const { businessId, businessType, itemsList } = store.state.data;
  const { money } = store.state;
  const { section, item, color, hand } = store.state.actives;

  const SHOP_NAME = businessType > 0 ? ShopName[businessType].toLowerCase() : null;

  const ShowPaymentWindow = () => {
    if(section !== -1 && item !== -1 && (color !== -1 || businessType === 3) && (hand !== -1 || businessType !== 2)){
      return true;
    }
    return false;
  }

  return store.state.show ? (
    <div className="shops-wrapper">
      <div className="business-info">
        <span className="business-info__id">#{businessId}</span>
        <span className="business-info__name">{businessType !== -1 ? ShopName[businessType] : "Error"}</span>
      </div>
      <div className='business-items'>
        <div className='section-position'>
          <Sections />
        </div>
        {
          section !== -1 ? <div className='items-and-colors'>
          <Items />
          <Colors />
          </div> : <div className='welcome'>
            <span>Добро пожаловать в {SHOP_NAME}</span>
            <span>Для начала выбора одежды воспользууйтесь навигационным меню и выберите категорию одежды, которая Вас интересует.</span>
          </div>
        }
      </div>
      <div className='business-other'>
        {
          ShowPaymentWindow() &&
          <Payment
            money={money}
            price={itemsList[section][item].price || 0}
            payAction={store.payAction}
          />
        }
      </div>
    </div>
  ) : null;
});
