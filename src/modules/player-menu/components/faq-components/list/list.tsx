import { observer } from 'mobx-react-lite';
import '../faq-components.scss';
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const List = observer(( props: { textArray: string[] } ) => {
  return(
    <div className='player-menu_faq-list'>
      {
        props.textArray ? props.textArray.map((variant, id) => {
          const str = `${LETTERS[id]}. ${variant}`
          return(
            <div className='faq-list_variant'>
              {str}
            </div>
          )
        }) : null
      }
    </div>
  )
})

export default List;