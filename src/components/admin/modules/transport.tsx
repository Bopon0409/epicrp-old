import React, {useCallback, useState}        from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../admin-store'
import SendIcon from '../images/send.svg';
import { HexColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css";



export const Transport = observer(() => {
  const REAL_VEHICLES = store.state.realCars;
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNum, setVehicleNum] = useState('');
  const [playerId, setPlayerId] = useState('');

  const [color, setColor] = useState("#aabbcc");

  // изменение состояния при изменении input'a (vehicle name)
  const changeVehicleNameValue = useCallback((e:any) => {
    if(e.target.value.length <= 30) setVehicleName(e.target.value);
  }, [vehicleName, setVehicleName]);
  // изменение состояния при нажатии на блок с irl автомобилями
  const changeVehicleNameValueOnIRLVehicle = useCallback((vname:string) => {
    setVehicleName(vname);
  }, [setVehicleName]);

  // изменение состояния при изменении input'a (vehicle num)
  const changeVehicleNumValue = useCallback((e:any) => {
    if(e.target.value.length <= 7) setVehicleNum(e.target.value);
  }, [vehicleNum, setVehicleNum]);

  // изменение состояния при изменении input'a (vehicle num)
  const changePlayerIdValue = useCallback((e:any) => {
    if(e.target.value.length <= 4) setPlayerId(e.target.value);
  }, [playerId, setPlayerId]);

  // действия с машинами
  const vehicleMoves = (type:string, vehicle:number) => {
    switch(type){
      case 'goto': {
        return;
      }
      case 'tpcar': {
        return;
      }
      case 'removecar': {
        return;
      }
    }
  } 


  return (
    <div className='transport'>
      <div className='transport__vehicles'>
        <div className='name'>Список заспавненого транспорта</div>
        <div className='vehiclesList__vehicle'>
        {
          store.state.transport.map((vehicle, id) => {
            return(
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
                  <div className='moves-goto' onClick={() => vehicleMoves('goto', id)}>goto</div>
                  <div className='moves-tpcar' onClick={() => vehicleMoves('tpcar', id)}>tpcar</div>
                  <div className='moves-removecar' onClick={() => vehicleMoves('removecar', id)}>удалить</div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='transport__create-vehicle'>
        <div className='name'>Спавн автомобилей</div>
        <div className='input_block'>
          <div className='input_block-inputBg'>
            <input 
            type="text" 
            className='input_block-inputBg_input' 
            placeholder='Введите название автомобиля'
            value={vehicleName} 
            onChange={changeVehicleNameValue}
            />
            <div className='input_block-inputBg_icon'>
              <img src={SendIcon} alt="отправить сообщение" />
            </div>
          </div>
          <span>либо выберите ирл автомобиль из списка</span>
        </div>
        <div className='transport__create-property'>
          <div className='transport__create-property_type'>
            <input 
            type="text" 
            className='transport__create-property_type-input' 
            placeholder='Введите номер'
            value={vehicleNum}
            onChange={changeVehicleNumValue}
            />
            <input 
            type="text" 
            className='transport__create-property_type-input' 
            placeholder='Введите ID игрока' 
            value={playerId}
            onChange={changePlayerIdValue}
            />
            <div>Спавн всем</div>
            <div>Спавн игроку</div>
            <div>Спавн себе</div>
          </div>
          <div className='transport__create-property-color_palette'>
            <HexColorPicker color={color} onChange={setColor} />;
          </div>
        </div>
      </div>
      <div className='real_vehicles'>
        <div className='real_vehicles-name'>Автомобили ИРЛ</div>
        <div className='real_vehicles-blocks'>
          {
            REAL_VEHICLES.map((name, id) => {
              return(
                <div className='real_vehicles-blocks-vehicleBlock' 
                key={id} 
                onClick={() => changeVehicleNameValueOnIRLVehicle(name)}
                >{name}</div>
              )
            }) 
          }
        </div>
      </div>
    </div>
  )
})