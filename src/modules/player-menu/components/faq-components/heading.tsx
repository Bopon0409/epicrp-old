import { observer } from 'mobx-react-lite';
import './faq-components.scss';

const Heading = observer((props: {text: string}) => {
  return <div className='player-menu_faq-heading'>{props.text}</div>
})

export default Heading;