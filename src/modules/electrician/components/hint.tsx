import React        from 'react'
import { observer } from 'mobx-react-lite'
import classNames   from 'classnames'
import hintImg      from '../img/hint.svg'
import { store }    from '../electrician-store'

export const Hint = observer((props: { type: 'small' | 'big' }) => {
  const isSmall = props.type === 'small'
  const classes = classNames('hint', isSmall && 'hint--small')

  return (
    <div className={classes}>
      <div className='hint__container'>
        <img className='hint__img' src={hintImg} alt='' />
        <div className='hint__text'>
          В данной мини - игре Вам предстоит вращать фигуры при
          помощи левой кнопки мыши так, чтобы все они были замкнуты между собой,
          и ток прошёл из одного электрощита к другому. На выполнение этой
          задачи у Вас будет {store.initTimer} секунд. Если Вы не сможете
          справиться за {store.initTimer} секунд, игра будет окончена.
        </div>
      </div>

      {!isSmall ? (
        <div className='hint__button-container'>
          <div className='hint__button' onClick={() => store.start()}>
            <div className='text'>Играть</div>
          </div>
        </div>
      ) : null}
    </div>
  )
})