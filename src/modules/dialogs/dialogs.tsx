import { useEffect }                               from "react";
import { observer }                                from "mobx-react-lite";
import { store }                                   from './dialogs-store';
import './dialogs.scss'

export const Dialogs = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window;
    const { setShow, setData } = store;
    em.addHandler("dialogs.show", setShow);
    em.addHandler("dialogs.data", setData);
    return () => {
      em.removeHandler("dialogs.show", setShow);
      em.removeHandler("dialogs.data", setData);
    };
  }, []);
  const { state: { show, data, activeTextId } } = store;
  const { name, job, texts } = data;
  const BigBtn = {
    width: "226px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  
  const SmallBtn = {
    width: data.texts.length ? (100 / (texts[activeTextId].answers.length - 1)) + "%" : "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const onClickEvent = () => {
    store.setActiveTextId("next");
  }

  const BtnStyle = data.texts.length ? (texts[activeTextId].answers.length > 5 ? SmallBtn : BigBtn) : {};

 return (show && data.texts.length) ? (
  <div className='dialogs-window'>
    <div className='dialogs-window__bg' />
    <div className='dialogs'>
      <div className='npc-name'>{name}</div>
      <div className='npc-job'>{job}</div>
      <div className='text-box'>{texts[activeTextId].text}</div>
      <div className='buttons'>
        {
          texts[activeTextId].answers.length ? 
          <>
            { texts[activeTextId].answers.map((answer, id) => {
              return (
                <div style = {BtnStyle} className='btn-styles' key = {id} 
                onClick = {() => onClickEvent()}
                >{answer}</div> 
              )
            })
          }
          </>:
          <>
            <div style={BigBtn} className='btn-styles'
            onClick = {() => onClickEvent()}>Далее</div>
          </>
        }
      </div>
    </div>
  </div>
 ) : null
})