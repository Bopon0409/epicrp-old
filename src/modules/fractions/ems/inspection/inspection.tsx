import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from './inspection-store';
import './inspection.scss';
import { useCallback } from 'react';


const BlockName = 'Добавление новой записи в медицинской книжке пациента';

export const Inspection = observer(() => {
  const [playerComment, setPlayerComment] = useState("");
  const [doctorComment, setDoctorComment] = useState("");

  const changePlayerComment = useCallback((e) => {
    setPlayerComment(e.target.value);
  }, [setPlayerComment]);
  const changeDoctorComment = useCallback((e) => {
    setDoctorComment(e.target.value);
  }, [setDoctorComment]);
  const AddBtnClick = () => {
    console.log('playerComment', playerComment);
    console.log('doctorComment', doctorComment);
    if(playerComment && doctorComment){
      const Data = {
        name: store.state.data.name,
        playerComment,
        doctorComment
      }
      store.sendData(Data);
    }
  }
  useEffect(() => {
      // @ts-ignore
      const { EventManager: em } = window;
      const { setActive, setData } = store;
      em.addHandler("ems-inspection.active", setActive);
      em.addHandler("ems-inspection.data", setData);
      return () => {
        em.removeHandler("ems-inspection.active", setActive);
        em.removeHandler("ems-inspection.data", setData);
      };
    }, []);
  return store.state.active ? (
      <div className='wrapper'>
          <div className="ems-inspection">
            <div className="block-name">{BlockName}</div>
            <div className="player-name">{store.state.data.name}</div>
            <div className="comment-text">Жалобы пациента</div>
            <textarea name="p-com" 
            rows={10} 
            cols={45} 
            className='tarea' 
            maxLength={288} 
            onChange={changePlayerComment}
            />
            <div className='comment-text'>Комментарий врача</div>
            <textarea 
            name="d-com" 
            rows={10} 
            cols={45} 
            className='tarea' 
            maxLength={288} 
            onChange={changeDoctorComment}
            />
            <div className="btn-add" onClick={() => AddBtnClick()}>
              Добавить
            </div>
          </div>
          <div className='ESC-close'>
            <span>ESC</span> - закрыть
          </div>
      </div>
  ) : null
})