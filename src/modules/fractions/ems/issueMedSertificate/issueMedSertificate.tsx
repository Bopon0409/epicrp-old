import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { store } from "./issueMedSertificate-store";
import "./issueMedSertificate.scss";
import cn from "classnames";
import { MedSrtTypes } from "../constants";

const IssueMedSrtText = "Форма выдачи медицинской справки";

export const IssueMedSertificate = observer(() => {
  const [doctorResult, setDoctorResult] = useState("");
  useEffect(() => {
    const { EventManager: em } = window;
    const { setActive } = store;
    em.addHandler("ems-issue-med-sertificate.active", setActive);
    return () => {
      em.removeHandler("ems-issue-med-sertificate.active", setActive);
    };
  }, []);

  const changeDoctorResult = useCallback(
    (e) => {
      setDoctorResult(e.target.value);
    },
    [setDoctorResult]
  );
  const clickSendData = () => {
    if (doctorResult) {
      const Data = {
        doctorResult,
        type: store.state.activeBlock,
      };
      store.sendData(Data);
    }
  };
  return store.state.active ? (
    <div className="issue_med_sertificate">
      <div className="wrapper">
        <div className="ems-issue_med_sertificate">
          <div className="issue_med_sertificate--text">{IssueMedSrtText}</div>
          <div className="issue_med_sertificate--other">
            <div className="med-srt-type">
              <div>Форма справки</div>
              {MedSrtTypes.map((type, id) => (
                <div
                  className={cn("med-srt-type", {
                    "med-srt-type--active": store.state.activeBlock === id,
                  })}
                  onClick={() => store.setActiveBlock(id)}
                  key={id}
                >
                  {type}
                </div>
              ))}
            </div>
            <div className="border" />
            <div className="med-srt-info">
              <div className="info--text">Информация</div>
              <div className="other-info--text">(Обязательно к заполнению)</div>
              <textarea
                name="p-com"
                rows={10}
                cols={45}
                className="tarea"
                maxLength={1134}
                onChange={changeDoctorResult}
              />
              <div
                className="issue-sertificate"
                onClick={() => clickSendData()}
              >
                {" "}
                Выдать справку{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
});
