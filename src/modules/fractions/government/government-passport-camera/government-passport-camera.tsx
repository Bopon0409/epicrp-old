import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from './government-passport-camera-store';
import cn from 'classnames';

import './government-passport-camera.scss'
import CameraFocus from './img/CameraFocus.svg';
import CameraBattery from './img/CameraBattery.svg';

export const GovernmentPassportCamera = observer(() => {
// gov-passport-camera
useEffect(() => {
 // @ts-ignore
 const { EventManager: em } = window
 const { setShow } = store

 em.addHandler('gov-passport-camera.show', setShow)
 return () => {
  em.removeHandler('gov-passport-camera.show', setShow)
 }
}, [])
const { activeKey } = store.state;

const Buttons = [
 ["Q", "Предыдущая эмиоция"],
 ["Enter", "Сделать снимок"],
 ["E", "Следующая эмоция"]
]

const keyClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
 switch (e.keyCode) {
   case 81:
     return store.makePreviousEmotion();
   case 69:
     return store.makeNextEmotion();
   case 13: 
     return store.makeScreenShot();
   default:
     return
 }
}

 return store.state.show ? (
  <div className='government-passport-camera-wrapper' onKeyUp={keyClick} tabIndex={0}>
   <div className="government-passport-camera">
   <div className='esc-line'>
      <div>Нажмите чтобы выйти</div>
      <div>ESC</div>
    </div>
    <div className='main-window'>
     <div className='camera-line'>
      <div className='upper-left line-block'>
       <span>HD 16:9 60 FPS</span>
      </div>
      <div className='upper-right line-block'>
       <div className="content">
        <div>99%</div>
        <img src={CameraBattery} alt="" className='camera-battery' />
       </div>
      </div>
     </div>
     <img src={CameraFocus} alt="" />
     <div className='camera-line'>
      <div className='lowwer-left line-block'> <span>ISO 200 F3.5</span></div>
      <div className='camera-line__buttons'>
       {
        Buttons.map((button, id) => (
         <div className={cn('btn_block', {'btn_block--active': id === activeKey})} key={id}>
          <div className='btn'>{button[0]}</div>
          <div className='btn-comment'>{button[1]}</div>
         </div>
        ))
       }
      </div>
      <div className='lowwer-right line-block'></div>
     </div>
    </div>
    </div>
  </div>
 ) : null
})