import { observer } from "mobx-react-lite";
import { store } from "../shops-and-parlors-store";
import { SectionImages } from "../constants";
import cn from 'classnames';

import LeftPalm from '../img/left-palm.png';
import RightPalm from '../img/right-palm.png';
import TwoPalms from '../img/two-palms.png';

export const Items = observer(() => {
  const { businessType, itemsList } = store.state.data;
  const { section, hand } = store.state.actives;
  const { actives } = store.state;
  const { setActiveHand } = store;

  const SectionName = SectionImages[businessType][section].name.toUpperCase();

  return (
    <div className="items">
      <div>Выбранная категория</div>
      <div>{SectionName}</div>
      <div className="items-list">
        {itemsList[section].map((item, id) => {
          return (
            <div className={cn("item", {"item--active": actives.item === id})}
            key={id}
            onClick={() => store.setActiveItem(id)}
            >
              <span>{item.name}</span>
              <span>$ {item.price}</span>
            </div>
          );
        })}
      </div>
      {
          (businessType === 2 && (section === 0 || section === 1)) && (
              <div className='decor-position'>
                  <div className='one-hand'>
                      <div className={cn(
                          'left-hand', 
                          'hand', 
                          {'hand--active': hand === 0 } )}
                          onClick={() => setActiveHand(0)}
                        >
                      <img src={LeftPalm} alt="" />     
                      </div>
                      <div className={cn(
                          'right-hand', 
                          'hand', 
                          {'hand--active': hand === 1 } )}
                          onClick={() => setActiveHand(1)}
                        >
                        <img src={RightPalm} alt="" />     
                      </div>
                  </div>
                  <div className={cn(
                          'two-hands', 
                          'hand', 
                          {'hand--active': hand === 2 } )}
                          onClick={() => setActiveHand(2)}
                        >
                      <img src={TwoPalms} alt="" />
                  </div>
              </div>
          )
      }
    </div>
  );
});
