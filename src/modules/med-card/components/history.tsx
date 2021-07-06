import { observer } from "mobx-react-lite";
import { store } from "../med-card-store";


export const History:any = observer(( props:any ) => {
    const { page, medicalHistoryLeft, 
    medicalHistoryRight } = store.state;
    const _History = props.type === 'left' ? medicalHistoryLeft : medicalHistoryRight;
    const _Id = page === 0 ? 1 : props.type === 'left' ? page * 2 + 1 : page * 2;
    return (page < _History.length && _History[page]) ? (
        <div className='history'>
            <div className='history_text'>История болезней</div>
            <div className='disease_number'>Запись болезни #{_Id}</div>
            <div className='patient_comment'>
                <span>Жалобы пациента:</span>
                <span>{_History[page].patientComment}</span>
            </div>
            <div className='doctor_comment'>
                <span>Комментарий врача:</span>
                <span>{_History[page].doctorComment}</span>
            </div>
            <div className='doctor_and_date'>
                <div className='doctor'>
                    <span>Лечащий врач:</span>
                    <span>{_History[page].doctor}</span>
                </div>
                <div className='date'>
                    <span>Дата:</span>
                    <span>{_History[page].date}</span>
                </div>
            </div>
        </div>
    ) : null
})