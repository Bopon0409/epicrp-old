import { observer } from 'mobx-react-lite';
import { store } from '../player-menu-store';
import { Questions } from '../constants';

import { HowToStart } from './faq-components/pages/howToStart';

export const Faq = observer(() => {
  const { setActiveFAQ } = store;
  return (
    <div className='faq'>
      <div className='questions'>
        <span>Часто задаваемые вопросы</span>
        <div className='questions-list'>
          { Questions.map((question, id) => (
            <div className='question' key={id} onClick={() => setActiveFAQ(id)}>
              {question}
            </div>
          )) }
        </div>
      </div>

      <div className="line" />

      <div className='answers'>
          <HowToStart />
      </div>
    </div>
  )
})