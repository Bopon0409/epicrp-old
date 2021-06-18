import React        from 'react'
import { observer } from 'mobx-react-lite'
import classNames   from 'classnames'
import hintImg      from '../img/hint.svg'
import { hintText } from '../config'
import { store }    from '../electrician-store'

export const Hint = observer((props: { type: 'small' | 'big' }) => {
  const isSmall = props.type === 'small'
  const classes = classNames('hint', isSmall && 'hint--small')

  return (
    <div className={classes}>
      <div className='hint__container'>
        <img className='hint__img' src={hintImg} alt='' />
        <div className='hint__text'>{hintText}</div>
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