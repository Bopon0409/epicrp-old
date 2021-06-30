import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { priceFormat } from '../../../services/services';
import { store } from '../business-stats-store';

import hoverEffect from "../img/hoverEffect.svg";
import Warehouse_3lvl from '../img/warehouse_3lvl.svg';

export const Advance = observer(() => {
    const { advance } = store.state;
    const rgtMouseClick = (e:any) => {
        if(e.button === 2 && advance.activeBlock >= 0){
          store.setAdvanceActiveBlock(-1)
        }
      }

    const Timer = {
    status: false,
    time: 2000
    }
    const buyAdvance = () => {
    if(!Timer.status){
        Timer.status = !Timer.status;
        setTimeout(() => {
        store.buyAdvance(advance.activeBlock)
        }, Timer.time);
    }
    }
    return(
        <div className="advance">
      <div className="advance__items_list">
        <div className="block-name">Общая статистика</div>
        <div className="items-list">
          {advance.items.map((item, i) => {
            return (
              <div
                className={cn("item", 
                {'item--active': advance.activeBlock === i})}
                key={i}
                onClick={() => store.setAdvanceActiveBlock(i)}
                onMouseDown={rgtMouseClick}
              >
                <div className="item__name">{item.name}</div>
                <img src={Warehouse_3lvl} className="item__image" alt="" />
                {advance.activeBlock === i && (
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
                    <span>Наличие</span>
                    <span>{ 
                    item.status ? 
                        <span className='green'>Приобретено</span> :
                        <span className='grey'>Не приобретено</span>
                    }
                    </span>
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
      </div>

      <div className="advance__item_edit">
        <div className="block-name">Информация</div>
        {advance.activeBlock === -1 && (
          <div className="state--passive">Для получения информации и приобретения улучшения, выберите интересующее Вас улучшение.</div>
        )}
        {advance.activeBlock >= 0 && (
        <div className="state--active">
          <div className='info'>
              <div className='image'>
                <img src={Warehouse_3lvl} className="image" alt="" />
              </div>
              <div className='block-name'>
                  <span>Улучшение</span>
                  <span>{advance.items[advance.activeBlock].name}</span>
              </div>
          </div>
          <div className='about'>
          Данное улучшение подходил для бизнесменов, которые не хотят проводить несколько часов сидя в очередях, чтобы оплатить налог на свой собственный бизнес. <br />Персональный менеджер самостоятельно будет делать это без Вашего участия, но при условии того, что на Вашем бизнесе будет достаточная сумма для оплаты налога.
          </div>
          <div className='price'>
              <span>Стоимость</span>
              <span className='yellow'>
                  ${priceFormat(advance.items[advance.activeBlock].price)}
              </span>
          </div>
          <div className='btnBuy'
          onClick={() => buyAdvance()}>ПРИОБРЕСТИ</div>
        </div>
        )}
      </div>
    </div>
    )
})