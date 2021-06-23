import React, { useCallback, useState } from 'react'
import { observer }                     from 'mobx-react-lite'
import { store }                        from '../admin-store'
import SendIcon                         from '../images/send.svg'
import { HexColorPicker }               from 'react-colorful'

export const Transport = observer(() => {
  const REAL_VEHICLES = store.state.realCars
  const [vehicleName, setVehicleName] = useState('')
  const [vehicleNum, setVehicleNum] = useState('')
  const [playerId, setPlayerId] = useState('')

  const [color, setColor] = useState('#aabbcc')

  // изменение состояния при изменении input (vehicle name)
  const changeVehicleNameValue = useCallback((e: any) => {
    if (e.target.value.length <= 30) 
    store.state.vehicleValue.name = e.target.value;
  }, [setVehicleName])

  // изменение состояния при нажатии на блок с irl автомобилями
  const changeVehicleNameValueOnIRLVehicle = useCallback((name: string) => {
    setVehicleName(name)
  }, [setVehicleName])

  // изменение состояния при изменении input (vehicle num)
  const changeVehicleNumValue = useCallback((e: any) => {
    if (e.target.value.length <= 7){
      store.state.vehicleValue.number = e.target.value;
    }
  }, [])

  // изменение состояния при изменении input (vehicle num)
  const changePlayerIdValue = useCallback((e: any) => {
    if (e.target.value.length <= 4 && e.target.value >= 0)
    store.state.vehicleValue.playerId = e.target.value;
  }, [setPlayerId])

  // действия с машинами
  const vehicleMoves = (type: string, vehicle: number) => {
    store.transportActions(vehicle, type)
  }

  const spawnAction = (type: number) => {
    store.spawnCar(vehicleName, vehicleNum, color, type)
  }

  return (
    <div className='transport'>
      <div className='transport__vehicles'>
        <div className='name'>Список заспавненого транспорта</div>
        <div className='vehiclesList__vehicle'>{
          store.state.transport.map((vehicle, id) => {
            const handler1 = () => vehicleMoves('goto', vehicle.carId)
            const handler2 = () => vehicleMoves('tpcar', vehicle.carId)
            const handler3 = () => vehicleMoves('removecar', vehicle.carId)

            return (
              <div className='vehiclesList__vehicle-info' key={id}>
                <span className='info'>
                  <span>{vehicle.carName}</span>
                  <span>|</span>
                  <span className='orange'>{vehicle.carNum}</span>
                  <span>|</span>
                  <span>{vehicle.carId}</span>
                </span>
                <span className='owner'>{vehicle.adminName}</span>
                <div className='moves'>
                  <div className='moves-goto' onClick={handler1}>goto</div>
                  <div className='moves-tpcar'
                    onClick={handler2}>tpcar
                  </div>
                  <div className='moves-removecar' onClick={handler3}>
                    удалить
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='transport__create-vehicle'>
        <div className='name'>Спавн автомобилей</div>
        <div className='input_block'>
          <div className='input_block-inputBg'>
            <input
              type='text'
              className='input_block-inputBg_input'
              placeholder='Введите название автомобиля'
              value={store.state.vehicleValue.name}
              onChange={changeVehicleNameValue}
            />
            <div className='input_block-inputBg_icon'>
              <img src={SendIcon} alt='отправить сообщение' />
            </div>
          </div>
          <span>либо выберите ирл автомобиль из списка</span>
        </div>
        <div className='transport__create-property'>
          <div className='transport__create-property_type'>
            <input
              type='text'
              className='transport__create-property_type-input'
              placeholder='Введите номер'
              value={store.state.vehicleValue.number}
              onChange={changeVehicleNumValue}
            />
            <input
              type='number'
              className='transport__create-property_type-input'
              placeholder='Введите ID игрока'
              value={store.state.vehicleValue.playerId}
              onChange={changePlayerIdValue}
            />
            <div onClick={() => spawnAction(0)}>Спавн всем</div>
            <div onClick={() => spawnAction(1)}>Спавн игроку</div>
            <div onClick={() => spawnAction(2)}>Спавн себе</div>
          </div>
          <div className='transport__create-property-color_palette'>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </div>
      </div>
      <div className='real_vehicles'>
        <div className='real_vehicles-name'>Автомобили ИРЛ</div>
        <div className='real_vehicles-blocks'>{
          REAL_VEHICLES.map((name, id) => {
            return (
              <div className='real_vehicles-blocks-vehicleBlock' key={id}
                onClick={() => changeVehicleNameValueOnIRLVehicle(name)}>
                {name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})