import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { StateAgencyStore } from "./state-agency-store";
import "./state-agency.scss";

import { Main } from "./components/main";
import { House } from "./components/house";
import StateAgencyLogo from "./img/logo.svg";

export const StateAgency = observer(() => {
  const { name } = StateAgencyStore.state.data;
  const { show, page, activeHouse, houses } = StateAgencyStore.state;
  const { setPage, setNewActiveHouse, setActiveHouse, triggerHouseMoves, setMarginTop } =
    StateAgencyStore;

  const keyClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.keyCode) {
      case 81:
        return setNewActiveHouse("prevent");
      case 69:
        return setNewActiveHouse("next");
      case 8: {
        if (page === "house") setPage("main");
        setActiveHouse(0);
        setMarginTop(0);
        return;
      }
      case 13: {
        if(page === "house") 
          triggerHouseMoves(+houses[activeHouse].number, 'buy');
          return;
      }
      default:
        return;
    }
  };

  useEffect(() => {
    const { EventManager: em } = window;
    const { setShow, setData } = StateAgencyStore;
    em.addHandler("state-agency.show", setShow);
    em.addHandler("state-agency.data", setData);

    return () => {
      em.removeHandler("state-agency.show", setShow);
      em.removeHandler("state-agency.data", setData);
    };
  }, []);

  return show ? (
    <div className="state-agency" onKeyUp={keyClick} tabIndex={0}>
      <div className="wrapper-bg" />
      <div className="wrapper">
        <div className="upper_block">
          <div className="upper_block-logo">
            <img src={StateAgencyLogo} alt="" />
          </div>
          {page === "house" && houses.length > 0 && (
            <div className="upper_block-number">
              <div className="content-center">{houses[activeHouse].number}</div>
              <div className="content-center">НОМЕР НЕДВИЖИМОСТИ</div>
            </div>
          )}
          <div className="upper_block-exit">
            <div>ESC</div>
            <div>ЗАКРЫТЬ</div>
          </div>
        </div>

        <div className="small_info_window">
          {page === "main" ? (
            <div>
              <div>
                <span>Рады приветствовать Вас</span>
                <span className="player-name"> {name}</span>
              </div>
              <div>
                <span>в агенстве недвижимости</span>
                <span className="agency-name"> DYNASTI 8</span>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <span>Просим вас выбрать</span>
                <span className="yellow-text"> недвижимости</span>
              </div>
              <div>
                <span>из нашего списка</span>
              </div>
            </div>
          )}
        </div>

        {page === "main" ? <Main /> : <House />}
      </div>
    </div>
  ) : null;
});
