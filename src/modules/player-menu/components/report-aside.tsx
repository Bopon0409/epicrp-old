import { observer } from 'mobx-react-lite'
import { store }    from '../player-menu-store'
import smallStar    from '../img/small-star.svg'

export const ReportAside = observer(() => {
  const { reportRatings } = store.stats
  return (
    <div className='aside'>
      <div className='aside__question'>Что такое репорт?</div>
      <div className='aside__text'>
        Репорт - это способ связи с администрацией сервера, если у Вас
        произошла какая-либо проблема или появился вопрос. Напишите сюда и
        один из администраторов Вам обязательно поможет. Обращаем Ваше
        внимание, дабы не отвлекать администрацию сервера от работы и не
        получать плохой рейтинг, подавайте только, когда действительно
        невозможно разобраться без участия администратора.
      </div>
      <div className='rating'>
        <div className='aside__text'>Ваша оценка по репортам</div>
        <div className='rating__value'>
          <img src={smallStar} alt='' className='rating__icon' />
          <div className='aside__text'>{reportRatings}</div>
        </div>
      </div>
      <div className='aside__question'>Что такое “Низкий приоритет”?</div>
      {reportRatings < 3 ? (
        <div className='aside__text'>
          Одна из ваших оценок обращения к администрации достигла низкого
          уровня (менее 3).
          <br />
          Теперь Ваши репорты попадают в низкий приоритет.
        </div>
      ) : (
        <div className='aside__text'>
          Если одна из ваших оценок обращения к администрации достигнет
          низкого уровня (менее 3), ваши обращения попадут в низкий приоритет.
        </div>
      )}
      <div className='aside__question'>Что такое “Низкий приоритет”?</div>
      <div className='aside__text'>
        Низкий приоритет - это система наказания для неадекватных игроков,
        которые мешают работе администрации. Репорты и вопросы игроков с
        “Низким приоритетом” попадают в самый конец списка репортов, тем
        самым, время на ожидание рассмотрения такого увеличивается.
      </div>
    </div>
  )
})