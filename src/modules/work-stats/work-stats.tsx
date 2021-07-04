import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "./work-stats-store";
import "./work-stats.scss";
import {
  buildStyles,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar'
import cn from 'classnames'


export const WorkStats = observer(() => {
  const { work, lvl, need, now, priceForOne, salary } = store.state.workStats;
  const { show } = store.state;
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window;
    const { setActive, setData } = store;
    em.addHandler("work-stats.active", setActive);
    em.addHandler("work-stats.data", setData);
    return () => {
      em.removeHandler("work-stats.active", setActive);
      em.removeHandler("work-stats.data", setData);
    };
  }, []);

  const circularStyles = buildStyles({
    pathColor: '#F2C94C',
    trailColor: 'transparent'
  })

  return store.state.active ? (
    <div className="wrapper">
      <div className={cn("stats-window", {"show": show})}>
        <div className="job-name">
          <div className="job-avatar" />
          <div className="job-profession">
            <span>ПРОФЕССИЯ</span>
            <span className="yellow">ЭЛЕКТРИК</span>
          </div>
          <div className="hidden--btn" onClick={() => store.changeShow()} />
        </div>
        <div className="job-stats">
          <div className="your-stats--text">Ваша статистика</div>

          <div className="your-lvl space-between">
            <div className="your-lvl__text">Ваш уровень навыка</div>
            <div className='your-lvl__circle'>
              <CircularProgressbarWithChildren value={now/(need + now) * 100 }
              className='work-progress-bar' 
              strokeWidth={5}
              styles={circularStyles}
              >
                <div className='lvl__value'>{lvl}</div>
              </CircularProgressbarWithChildren>  
            </div>
          </div>
          <div className="your-next-lvl space-between">
            <span>До следующего уровня</span>
            <span>{need} щитков</span>
          </div>
          <div className="your-now space-between">
            <span>Обслужено</span>
            <span>{now} щитков</span>
          </div>
          <div className="your-price-for-one space-between">
            <span>Цена за щиток</span>
            <span>${priceForOne}</span>
          </div>
          <div className="salary space-between">
            <span>ЗАРАБОТАНО</span>
            <span className="yellow">${salary}</span>
          </div>
        </div>
      </div>
      <div 
      className={cn("show-btn", {"hide": show})}
      onClick = {() => store.changeShow()}
      >
        <div className='left-arrow' />
        <div className='your-stats'>Ваша статистика</div>
      </div>
    </div>
  ) : null;
});
