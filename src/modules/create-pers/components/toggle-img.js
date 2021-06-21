import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../create-pers-store/create-pers-store'

export default observer(
  ({ item: { title, value, valueName }, onValueChange, type }) => {
    const { serverData, step1 } = store.state

    const mapHandler = ({ id }, i) => (
      <img
        key={i}
        className={
          +id === value
          ? 'toggle-img__item toggle-img__item_active'
          : 'toggle-img__item'
        }
        onClick={() => onValueChange(+id, valueName)}
        src={`images/create-pers/${type}/id${id}.png`}
        alt=''
      />
    )

    const hairs = []
    const hairsId = [
      [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          72,
          73
      ], // male
      [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          76,
          77
      ] // female
    ];

    const sex = step1.sex === 'male' ? 0 : 1;

    hairsId[sex].map((hairId, i) => (
      hairs.push(
        <img
          key={i}
          className={
            i === value
            ? 'toggle-img__item toggle-img__item_active'
            : 'toggle-img__item'
          }
          onClick={() => onValueChange(hairId, valueName)}
          src={`images/create-pers/${step1.sex}-hairs/id${hairId}.png`}
          alt=''
        />
      )
    ));

    const getList = () => {
      switch (type) {
        case 'beard':
          return hairs
        case 'hairStyle':
          return hairs
        case 'shirts':
          return serverData.shirts.map(mapHandler)
        case 'pants':
          return serverData.pants.map(mapHandler)
        case 'shoes':
          return serverData.shoes.map(mapHandler)
        default:
          break
      }
    }

    return (
      <div className='toggle-img'>
        <div className='toggle-img__title'>{title}</div>
        <div className='toggle-img__container scroll'>{getList()}</div>
      </div>
    )
  }
)
