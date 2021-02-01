import images from '../images/items/itemsImg'

export default function Item ({ item }) {
  const { quantity, weight, idSlot, idItem } = item
  const className = idSlot < 200 ? '' : 'equipment-item'
  return (
    <>
      <img className={className} src={images[`imgId${idItem}`]} alt='' />

      {idSlot < 200 ? (
        <div className='label-block'>
          <div className='label'>{quantity}</div>
          <div className='label'>{weight} КГ</div>
        </div>
      ) : null}
    </>
  )
}
