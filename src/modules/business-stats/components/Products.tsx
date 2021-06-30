import cn from 'classnames';
import { observer } from "mobx-react-lite";
import { store } from "../business-stats-store";
import { PConst } from "../constants";
import { ProductsItemsList } from './productsItemsList';
import { ProductsItemsEdit } from './productsItemsEdit';

export const rgtMouseClick = (e:any) => {
  if(e.button === 2){
    store.setProductsActiveBlock(-1)
  }
}
export const Products = observer(() => {
  const { stats } = store.state;
  const { products } = store.state;

  return (
    <div className="products">
      <div className="products__items_list">
        {
          stats?.businessName[0] === "АВТОСАЛОН" ? (
          <div className="block-name">
          <div className='block-name_text'>{PConst.LeftBlock.blockName}</div>
          <div className='irl_no-block'>
            <div className='irl' onClick={() => store.setProductsType(0)}>
              <span>ИРЛ машины</span>
              <div className={cn('line', 
              {'line--active' : products.type === 0})}></div>
            </div>
            <div className='gta' onClick={() => store.setProductsType(1)}>
              <span>GTA машины</span>
              <div className={cn('line', 
              {'line--active' : products.type === 1})}></div>
            </div>
            <div className='grey-line'></div>
          </div>
        </div> ) : (
        <div className="block-name">
        Перечень товаров
        </div>)}
          <ProductsItemsList />
       </div>

          <ProductsItemsEdit />
    </div>
  );
});
