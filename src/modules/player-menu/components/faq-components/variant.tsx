import { observer } from 'mobx-react-lite';
import './faq-components.scss';

const Variant = observer((props: {text: string}) => {
  return <span className='player-menu_faq-variant'>{props.text}</span>
})

export default Variant;