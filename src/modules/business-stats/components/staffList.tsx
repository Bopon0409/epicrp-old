import { observer } from "mobx-react-lite";
import { store } from "../business-stats-store";

import { priceFormat } from "../../../services/services";


export const StaffList = observer(() => {
    const { staff } = store.state;
    const { state } = store;
    return(
      <>
        <div className="employees">
          <div className="employees-name">{ state.staffModalWindow ? 
          'ВЫДАЧА ПРЕМИИ' : 'ОБЩАЯ СТАТИСТИКА' }</div>
          <div className="employees-time">
            <div>
              <div onClick={() => store.setStaffEmployeesDate(0)}>Сегодня</div>
              <div
                className={state.staffEmployeesDate === 0 ? "active-line" : ""}
              />
            </div>
            <div>
              <div onClick={() => store.setStaffEmployeesDate(1)}>Неделя</div>
              <div
                className={state.staffEmployeesDate === 1 ? "active-line" : ""}
              />
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="employees-info-text">
          <span>Имя</span>
          <span>Кол-во ремонтов</span>
          <span>Кол-во эвакуаций</span>
          <span>Прибыль</span>
          <span>Действие</span>
        </div>

        <div className="employees-list">
          {staff.staffList[state.staffEmployeesDate].map((emp, i) => {
            return (
              <div className="employee" key={i}>
                  <div className='employee-data'>
                    <span>{emp.name}</span>
                    <span>{emp.repairsAmount}</span>
                    <span>{emp.evacuationsAmount}</span>
                    <span className='green'>${priceFormat(emp.profit)}</span>
                    <div className='buttons'>
                        <div className='btn-prize'
                        onClick={() => store.changeStaffModalWindow(i)}>
                          Выдать премию</div>
                        <div className='btn-hoof'
                        onClick={() => store.staffHoof(i)}>X</div>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </>
    )
})