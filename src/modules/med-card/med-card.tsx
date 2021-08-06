import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "./med-card-store";
import "./med-card.scss";

import { History } from "./components/history";

const InformationText = [
  `Данный документ является официальным документом, 
занесенным в перечень зарегестрированных документов учреждения здравохранения 
“Первая городская клиническая больница города Лос - Сантос”. 
Утеря/Уничтожение/Хищение и подделка данного документа является прямым 
нарушением законодательства штата San - Andreas.`,
];

export const MedCard = observer(() => {
  const { page } = store.state;
  const { firstName, secondName, age, nationality, medicalHistory } =
    store.state.medCard;
  useEffect(() => {
    const { EventManager: em } = window;
    const { setActive, setData } = store;
    em.addHandler("med-card.active", setActive);
    em.addHandler("med-card.data", setData);
    return () => {
      em.removeHandler("med-card.active", setActive);
      em.removeHandler("med-card.data", setData);
    };
  }, []);
  return store.state.active ? (
    <div className="med-card">
      <div className="wrapper">
        <div className="med-card-window">
          <div className="left-block">
            {page === 0 ? (
              <div className="info">
                <div className="info__med-book">Медицинская книга</div>
                <div className="info__block">
                  <div className="picture" />
                  <div className="text-info">
                    <div>
                      <span>Имя:</span>
                      <span>{firstName}</span>
                    </div>

                    <div>
                      <span>Фамилия:</span>
                      <span>{secondName}</span>
                    </div>

                    <div>
                      <span>Возраст:</span>
                      <span>{age}</span>
                    </div>

                    <div>
                      <span>Гражданство:</span>
                      <span>{nationality}</span>
                    </div>
                  </div>
                </div>
                <div className="information--text">Информация</div>
                <div className="information--content">{InformationText}</div>
              </div>
            ) : (
              <History type={"right"} />
            )}
            {medicalHistory.length > 0 && page > 0 ? (
              <div className="buttons">
                <div
                  className="one-arrow"
                  onClick={() => store.setPage("back")}
                />
                <div
                  className="two-arrow"
                  onClick={() => store.setPage("start")}
                />
              </div>
            ) : null}
          </div>

          <div className="right-block">
            <History type={"left"} />
            {medicalHistory.length > 0 &&
            page < store.state.medicalHistoryRight.length - 1 ? (
              <div className="buttons">
                <div
                  className="one-arrow"
                  onClick={() => store.setPage("next")}
                />
                <div
                  className="two-arrow"
                  onClick={() => store.setPage("end")}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
});
