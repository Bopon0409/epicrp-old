import { observer } from "mobx-react-lite";
import { store } from "../business-stats-store";

export const StaffPrize = observer(() => {
  const { staff, staffPrizeAmount } = store.state;
  const inputHandler = (event: any) => {
    const { value } = event.target;
    if (value.length <= 5) store.changePrizeAmount(value);
  };
  return (
    <>
      <div className="employees">ВЫДАЧА ПРЕМИИ</div>
      <div className="prize-box">
        <div className="text">
          Выдача премии {staff.staffList[0][store.state.staffPrizeId].name}
        </div>
        <div className="input-box">
          <input
            type="number"
            placeholder="Введите сумму премии"
            onChange={inputHandler}
            value={staffPrizeAmount ? staffPrizeAmount : ""}
          />
        </div>
        <div className="buttons">
          <div
            className="cancel"
            onClick={() => store.changeStaffModalWindow(-1)}
          >
            Отмена
          </div>
          <div
            className="give-prize"
            onClick={() => store.staffPrize(store.state.staffPrizeId)}
          >
            Выдать премию
          </div>
        </div>
      </div>
    </>
  );
});
