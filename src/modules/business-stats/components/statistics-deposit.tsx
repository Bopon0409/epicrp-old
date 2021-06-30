import { useCallback, useState } from "react";

import { observer } from "mobx-react-lite";
import { store } from '../business-stats-store';

import { priceFormat } from "../../../services/services";

export const StatisticsDeposit = observer(() => {
    const [inpValue, setInpValue] = useState(0);
    const { state } = store;
    const inputHandler = useCallback((event: any) => {
        const { value } = event.target;
        if (value.length <= 5) 
        setInpValue(value);
    }, [setInpValue]);
    return(
        <>
            <div className='business-operations'>
                <div className='text'>ВВЕДИТЕ ЖЕЛАЕМУЮ СУММУ ПОПОЛНЕНИЯ</div>
                <div className='money'>На вашем счету 
                    <span className='yellow'>
                        {" "}${priceFormat(state.stats?.playerMoney)}
                    </span>
                </div>
                <input type="number" placeholder='Введите сумму' 
                onChange={inputHandler} value={inpValue ? inpValue : ''} />
                <div className='buttons'>
                    <div className='cancel'
                    onClick={() => store.setStatsOperationType(0)}>ОТМЕНА</div>
                    <div className='operation'
                    onClick={() => store.statsDepositMoney(inpValue)}>ПОПОЛНИТЬ</div>
                </div>
            </div>
        </>
    )
})