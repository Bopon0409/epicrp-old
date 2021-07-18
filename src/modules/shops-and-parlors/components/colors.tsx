import { observer } from "mobx-react-lite";
import { store } from '../shops-and-parlors-store';
import cn from 'classnames';

export const Colors = observer(() => {
    const { businessType, itemsList } = store.state.data;
    const { section, item, color } = store.state.actives;
    return (businessType !== 3 && item !== -1) ? (
        <div className='colors'>
            <div>Расцветка</div>
            <div className="colors-list">
                {
                    itemsList[section][item].colors.map((vColor, id) => {
                        return (
                        <div className={cn(
                        'color', 
                        {'color--active' : color === id})}
                        key={id}
                        onClick={() => store.setActiveColor(id)}
                        >
                            <span>Вариант {id+1}</span>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    ) : null
})