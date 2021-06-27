import { observer } from "mobx-react-lite";
import cn from 'classnames';
import { store } from "../business-stats-store";
import { PConst } from "../constants";


export const ProductsItemsEdit = observer(() => {
    const { products } = store.state;

    const items = products.type === 0 ? products.items : products.irlItems;
    const Timer = {
      status: false,
      time: 2000
    }

    // сохранение изменённых данных с задержкой
    const saveData = () => {
      if(!Timer.status){
        Timer.status = !Timer.status;
        setTimeout(() => {
          store.saveProductData();
          Timer.status = !Timer.status;
        }, Timer.time);
      }
    }

    const inputHandler = (event: any) => {
        const { value } = event.target;
        if (value.length <= 5) 
        store.setProductPrice(products.type, products.activeBlock, +value);
      }

      
    return(
        <div className="products__item_edit">
        <div className="block-name">{PConst.RightBlock.blockName}</div>
        {products.activeBlock === -1 && (
          <div className="state--passive">{PConst.RightBlock.passiveState}</div>
        )}
        {products.activeBlock >= 0 && (
        <div className="state--active">
          <div className="name">{items[products.activeBlock].name}</div>
          <div className="price">Цена</div>
          <div className='inputBlock'>
            <input type="number" 
            placeholder='Введите новую цену на товар...'  
            onChange={inputHandler}
            value={products.type === 0 ? 
              products.irlItems[products.activeBlock].price :
              products.items[products.activeBlock].price
            }
            />
          </div>
          <div className='state-text'>Доступ к покупке</div>
          <div className='buttons'>
            <div 
            className={cn('active-btn', 
            {'active': items[products.activeBlock].status})}
            onClick={() => store.setProductStatus(products.activeBlock, true)}
            >Доступен для покупки</div>
            <div className={cn('passive-btn', 
            {'active': !items[products.activeBlock].status})}
            onClick={() => store.setProductStatus(products.activeBlock, false)}
            >Не доступен для покупки</div>
          </div>
          <div className='save-changes'
          onClick={ () => saveData() }
          >Сохранить</div>
        </div>
        )}
      </div>
    )
})