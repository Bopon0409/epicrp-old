import { observer } from 'mobx-react-lite';
import '../faq-components.scss';

const Text = observer((props: {text: string}) => {
  return <span className='player-menu_faq-text'>{props.text}</span>
});

export default Text;