import React        from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../player-menu-store';
import { Questions } from '../constants';

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

      </div>
    </div>
  )
})