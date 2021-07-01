import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "./passport-store";
import "./passport.scss";

export const Passport = observer(() => {
  const { uuid, name, nationality, married, gender,
  id, date } = store.state.passportInfo;
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window;
    const { setActive, setData } = store;

    em.addHandler("passport.active", setActive);
    em.addHandler("passport.data", setData);

    return () => {
      em.removeHandler("passport.active", setActive);
      em.removeHandler("passport.name", setData);
    };
  }, []);
  const AVATAR = { background: store.state.passportInfo.photo };
  const ChooseGender = () => {
    return gender ? "Мужской" : "Женский";
  };
  const ChooseMarried = () => {
      if(gender){
          switch(married){
              case 0: return "Холост";
              case 1: return "Женат";
              case 2: return "Замужем"; 
              default: return;
          }
      } else {
          switch(married){
            case 0: return "Холост";
            case 1: return "Жената";
            case 2: return "Замужем";
            default: return;
          }
      }
  }
  // const marriedStatus = gender ? ( married ? 'Женат' : 'Холост' )
  console.log(store);
  return (
    <div className="window">
      <div className="passport">
        <div className="passport-text_1">UNITED STATES OF AMERICA</div>
        <div className="passport-text_2">IDENTEFICATION CARD</div>
        <div className="passport-info-block">
          <div className="left">
            <div className="avatar">
              <div className="avatar-img" ></div>
              <div className="avatar-uuid">{uuid}</div>
              <div className="avatar-usa">
                <span>USA</span>
                <span>USA</span>
              </div>
            </div>
            <div className="player-info">
              <div className="info-block">
                <div className="text">Имя Фамилия</div>
                <div>{name}</div>
              </div>
              <div className="info-block nationality">
                <div className="text">Национальность</div>
                <div>{nationality}</div>
              </div>
              <div className="other-info">
                <div className="USA-TEXT">USA</div>
                <div className="text-block">
                  <div className="info-block">
                    <div className="text">Пол</div>
                    <div>{ChooseGender()}</div>
                  </div>
                  <div className="info-block married">
                    <div className="text">Семейное положение</div>
                    <div>{ChooseMarried()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className='seal'>
                <div className='seal-img'></div>
            </div>
            <div className='get-date'>
                <div className='water-symbol'></div>
                <div className='date'>
                    <div>Дата получения</div>
                    <div>{date}</div>
                </div>
            </div>
          </div>
        </div>
        <div className='passport-id-block'>
            <div className='id-text'>ID - ИДЕНТИФИКТОР</div>
            <div className='id'>{id}</div>
        </div>
        <div className='gov-ls-text'>GOVERNMENT OF LOS SANTOS</div>
      </div>
    </div>
  );
});
