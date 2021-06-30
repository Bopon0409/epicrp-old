import { observer } from "mobx-react-lite";
import { priceFormat } from "../../../services/services";
import { store } from '../business-stats-store';

export const StatiticsDeafult = observer(() => {
  return(
    <div className='business_balance statistics-block'>
      <div className='block_name'>БАЛАНС БИЗНЕСА</div>
      <div className='balance'>
        $ {priceFormat(store.state.stats?.businessBalance)}
      </div>
      <div className='buttons'>
        <div className='withdraw' 
        onClick={() => store.setStatsOperationType(1)}>ВЫВЕСТИ</div>
        <div className='deposit' 
        onClick={() => store.setStatsOperationType(2)}>ПОПОЛНИТЬ</div>
      </div>
    </div>
  )
})