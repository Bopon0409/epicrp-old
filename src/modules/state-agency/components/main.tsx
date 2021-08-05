import { useState } from 'react';
import { observer } from "mobx-react-lite";
import { StateAgencyStore } from "../state-agency-store";

const HouseTypeText = "ВЫБЕРИТЕ ИНТЕРЕСУЮЩИЙ КЛАСС НЕДВИЖИМОСТИ";

export const Main = observer(() => {
  const { setHouseType, setPage } = StateAgencyStore;
  const { houseClasses } = StateAgencyStore.state.data;
  const [hoverCategory, setHoverCategory] = useState(0);

  const ChangeHouseType = (typeNumber: number) => {
    const temp = houseClasses[typeNumber].name;
    setHouseType(temp);
    setPage("house");
  };

  return (houseClasses.length > 0) ? (
    
    <div className="state-agency-main">
      <div className='state-agency-main_bg' />
      <div className="house_type-text">{HouseTypeText}</div>
      <div className="house_type-blocks">
        {houseClasses.map((type, id) => {
          return (
            <div
              className="house_block"
              key={id}
              onClick={() => ChangeHouseType(id)}
              onMouseEnter={() => setHoverCategory(id)}
            >
              <span>
                Дома <span>{type.name}</span> класса
              </span>
            </div>
          );
        })}
      </div>
      <div className="hints">
        <div className="yellow">Подсказка</div>
        <div>{houseClasses[hoverCategory].hint}</div>
      </div>
    </div>
  ) : null;
});
