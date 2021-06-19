import React from 'react';
import { observer } from 'mobx-react-lite';
import { store } from './clothes-shop-store';
import './clothes-shop.scss';


export const ClothesShop = observer(() => {
    console.log(store);
    store.setActive(true);
    return(
        <div>

        </div>
    )
})