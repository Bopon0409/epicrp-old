import React        from 'react'
import { observer } from 'mobx-react-lite'

const POSITIONS = [
  ['lspd', 'gov', 'gov 2', 'gov 3', 'gov 4', 'lssd', 'fib', 'lsarmy', 'ems', 'weazle news'],
  ['families', 'vagos', 'yakuza', 'lcn', 'biker'],
  ['такси', 'работа', 'работа', 'работа', 'работа', 'работа', 'работа', 'работа', 'работа', 'работа'],
  ['спавн 1', 'спавг 2', 'спавн 3', 'место', 'место', 'место', 'место', 'место', 'место', 'место']
];
const POSITION_TYPES = ['Государственные организации', 'Банды/Мафии', 'Работы', 'Места'];


export const Teleport = observer(() => {
  return (
    <div className='teleport'>
      <div className='positions'>
        {
          POSITIONS.map((v, id) => {
            return(
              <div className='block'>
                <div className='type'>{POSITION_TYPES[id] ? POSITION_TYPES[id] : null}</div>
                <div className='block__positions'>
                {
                  v.map((name, nameId) => {
                    return(
                      <div className='pos' onClick={() => TeleportCoord(name)}>{name}</div>
                    )
                  })
                }
                </div>
              </div>
            )
          })
        }
        )
      </div>
    </div>
  )
})

const TeleportCoord = (name: string) => {
  console.log(name); // телепортация
}