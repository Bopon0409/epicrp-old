import { observer } from "mobx-react-lite";
import { StateAgencyStore } from "../state-agency-store";
import cn from "classnames";
import { priceFormat } from "../../../services/services";

export const House = observer(() => {
  const { activeHouse, marginTop, houses } = StateAgencyStore.state;
  const { setNewActiveHouse, triggerHouseMoves } = StateAgencyStore;

  const StateAgencyButtons = [
    ["BACKSPACE", "ВЕРНУТЬСЯ НАЗАД"],
    ["Q", "ПРЕДЫДУЮЩИЙ ДОМ"],
    ["E", "СЛЕДУЮЩИЙ ДОМ"],
    ["ENTER", "ПРИОБРЕСТИ ДОМ"],
  ];

  const HouseMouseClick = (id: number) => {
    const Different = activeHouse - id;
    if (Different === 1) setNewActiveHouse("prevent");
    if (Different === 2) {
      setNewActiveHouse("prevent");
      setNewActiveHouse("prevent");
    }
    if (Different === -1) setNewActiveHouse("next");
    if (Different === -2) {
      setNewActiveHouse("next");
      setNewActiveHouse("next");
    }
  };
  return houses.length > 0 ? (
    <div className="state-agency-house">
      <div className="house-info_and_scroll">
        <div className="house-scroll">
          <div
            className="house-scroll-line"
            style={{ marginTop: marginTop + "px" }}
          >
            {houses.map((house, id) => {
              return (
                <div key={id} className="one_house_block">
                  <div
                    className={cn("house_block", {
                      "house_block--active": id === activeHouse,
                    })}
                    onClick={() => HouseMouseClick(id)}
                  >
                    {house.number}
                  </div>
                  {id >= 0 && id < houses.length - 1 ? (
                    <div className="points">
                      {" "}
                      <div />
                      <div />{" "}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="house-info">
          <div className="lines-info">
            <div className="rooms">
              <div className="name_block">
                <span>Комнат</span>
                <span>10</span>
              </div>
              <div className="line">
                {ReturnEmptySticks()}
                {ReturnFullSticks(houses[activeHouse].rooms, 10)}
              </div>
            </div>

            <div className="garages">
              <div className="name_block">
                <span>Гаражных мест</span>
                <span>10</span>
              </div>
              <div className="line">
                {ReturnEmptySticks()}
                {ReturnFullSticks(houses[activeHouse].garageSpaces, 10)}
              </div>
            </div>

            <div className="invites">
              <div className="name_block">
                <span>Можно подселить</span>
                <span>10</span>
              </div>
              <div className="line">
                {ReturnEmptySticks()}
                {ReturnFullSticks(houses[activeHouse].seats, 10)}
              </div>
            </div>
          </div>
          <div className="tax">
            <span>Налог</span>
            <span>${priceFormat(houses[activeHouse].tax)}</span>
          </div>
          <div className="position">
            <span>Расположение:</span>
            <span>{houses[activeHouse].position}</span>
          </div>
          <div className="price">
            <span>Цена:</span>
            <span>${priceFormat(houses[activeHouse].price)}</span>
          </div>
          <div
            className="watch-house"
            onClick={() =>
              triggerHouseMoves(+houses[activeHouse].number, "watch")
            }
          >
            СМОТРЕТЬ ДОМ
          </div>
        </div>
      </div>
      <div className="other-buttons">
        <div className="move-buttons">
          {StateAgencyButtons.map((btn, id) => {
            return (
              <div className="button" key={id}>
                <div className="button-key">{btn[0]}</div>
                <div className="button-move">{btn[1]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="not-houses">
        <span>К СОЖАЛЕНИЮ, НА ДАННЫЙ МОМЕНТ НЕТ ИМУЩЕСТВА,</span>
        <span>КОТОРОЕ ВЫ МОЖЕТЕ ПРЕОБРЕСТИ В ДАННОЙ КАТЕГОРИИ</span>
      </div>
      <div className="buttons">
        <div className="button">
          <div className="button-key">{StateAgencyButtons[0][0]}</div>
          <div className="button-move">{StateAgencyButtons[0][1]}</div>
        </div>
      </div>
    </>
  );
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////// STICKS //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const ReturnEmptySticks = () => {
  return (
    <>
      <div className='empty-stick'/>
      <div className='empty-stick'/>
      <div className='empty-stick'/>
      <div className='empty-stick'/>
      <div className='empty-stick'/>
      <div className='empty-stick'/>
    </>
  );
};
const _StripLength = 35;
const _StripsAmount = 6;
const _StripsLength = _StripLength * _StripsAmount;

const ReturnFullSticks = (now: number, max: number) => {
  const percents = now / max;
  let stripLength = _StripsLength * percents;
  const StripLengthStyle = [
    { width: "0px", borderRadius: "2px" },
    { width: "0px", borderRadius: "2px" },
    { width: "0px", borderRadius: "2px" },
    { width: "0px", borderRadius: "2px" },
    { width: "0px", borderRadius: "2px" },
    { width: "0px", borderRadius: "2px" },
  ];
  StripLengthStyle.map((strip, id) => {
    if (stripLength >= 35) {
      StripLengthStyle[id].width = "35px";
      stripLength -= 35;
    } else if (stripLength > 0 && stripLength < 35) {
      StripLengthStyle[id].width = stripLength + "px";
      StripLengthStyle[id].borderRadius = "2px 0px 0px 2px";
      stripLength = 0;
    } else {
      StripLengthStyle[id].width = stripLength + "px";
    }
    return 0;
  });
  return (
    <div className="full-line">
      {CreateFieldStrip(StripLengthStyle[0])}
      {CreateFieldStrip(StripLengthStyle[1])}
      {CreateFieldStrip(StripLengthStyle[2])}
      {CreateFieldStrip(StripLengthStyle[3])}
      {CreateFieldStrip(StripLengthStyle[4])}
      {CreateFieldStrip(StripLengthStyle[5])}
    </div>
  );
};

const CreateFieldStrip = (stripStyle: {}) => {
  return (
    <div className="strip">
      <div className="field-strip" style={stripStyle} />
    </div>
  );
};
