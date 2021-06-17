import React        from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../admin-store';

const MOVE_NAMES = ['Телепорт', 'Функции', 'Наказания', 'Снятие', 'Прочее'];
const MOVES = [
    ['goto', 'gethere', 'sp', 'slap', 'dimension 0'],
    ['kill', 'heal', 'freeze', 'unfreeze', 'ainvite', 'uninvite', 'makeleader'],
    ['mute', 'voice mute', 'jail', 'prison', 'kick', 'warn', 'ban', 'hard ban', 'silent ban', 'social ban'],
    ['unmute', 'unvmute', 'unjail', 'unprison', '', 'unwarn', 'unban', 'unhban', 'unsban', 'unsocialban'],
    ['history']
]


export const PlayerMoves = observer(() => {

    return(
        <div className='player__moves'>
        {
            MOVES.map((v, id) => {
                return(
                    <div className='player__moves-block' id={id}>
                        <div className='name'>{MOVE_NAMES[id]}</div>
                        <div className='moves'>
                            {
                            v.map((v2, id) => {
                                return(
                                    <div className={v2.length > 0 ? 'move' : 'skip'}
                                    >{v2}
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
});


function makeMove(id1, id2){

}