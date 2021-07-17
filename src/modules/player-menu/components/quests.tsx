import { observer } from "mobx-react-lite";
import { store } from '../player-menu-store';
import cn from 'classnames';

export const Quests = observer(() => {
 const { data: { playerActiveQuest, quests }, activeQuest } = store.quests;
 const QuestBtnActiveStyle = {
  background: "#EF2A2A"
 }
 const QuestBtnDisableQuest = {
  background: "#F2C94C"
 }

 const changeActiveQuest = (id: number = -1) => {
   store.setActiveQuest(id);
 }
 const changePlayerActiveQuest = (id: number) => {
  if(playerActiveQuest !== id && playerActiveQuest !== -1) return;
  playerActiveQuest === -1 ? store.setActivePlayerQuest(id) : store.setActivePlayerQuest(-1)
 }
 const activeQuestFromList = activeQuest === -1 ? playerActiveQuest : activeQuest;

 return(
  <div className='quests-window'>
    <div className='active-quest'>
    { ((activeQuest >= 0 && quests.length)) && <>
     <div className='active-quest__text'>Активный квест</div>
     <div className='active-quest__name'>"{quests[activeQuest].name}"</div>
     <div className='active-quest__comment'>{quests[activeQuest].questComment}</div>
     <div className='active-quest__target'>
      <span>Цель</span>
      <span>{quests[activeQuest].target}</span>
     </div>
     <div className='active-quest__reward'>
      <span>Награда</span>
      <span>{quests[activeQuest].reward}</span>
     </div>
     <div className='active-quest__progress'>
      <span>Ход выполнения</span>
      <span>{quests[activeQuest].progress}</span>
     </div>
     <div className='active-quest__strted'>
      <span>С начала квеста прошло</span>
      <span>{quests[activeQuest].questStarted}</span>
     </div>
     <div className='btn-quest-move' 
     style={ playerActiveQuest === activeQuest ? QuestBtnActiveStyle : QuestBtnDisableQuest}
     onClick={() => changePlayerActiveQuest(activeQuest)}
     >
      {playerActiveQuest === activeQuest ? "Отказаться от квеста":"Выполнить квест" }
     </div>
    </>}
    </div>
   <div className='line' />
   <div className='quests-list'>
    <div>Доступные квесты</div>
    {
     quests.map((quest, id) => (
      <div className={cn('quest', {'quest--active': activeQuestFromList === id})}
       key = {id} 
       onClick={() => changeActiveQuest(id)}
      > 
      <div>{quest.name}</div>
      <div>{quest.questComment}</div>
      <div>Награда: {quest.reward}</div>
      </div>
     ))
    }
   </div>
  </div>
 )
})