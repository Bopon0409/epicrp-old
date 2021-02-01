import ItemImage from '../images/items/id0.png'

export default function Item ({ item }) {
  const { quantity, weight, idSlot } = item
  const className = idSlot < 200 ? '' : 'equipment-item'
  return (
    <>
      <img className={className} src={ItemImage} alt='' />
      {idSlot < 200 ? (
        <div className='label-block'>
          <div className='label'>{quantity}</div>
          <div className='label'>{weight} КГ</div>
        </div>
      ) : null}
    </>
  )
}
