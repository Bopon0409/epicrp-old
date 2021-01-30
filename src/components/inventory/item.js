import ItemImage from './images/items/id0.png'

export default function Item ({ item }) {
  const { quantity, weight } = item
  return (
    <>
      <img src={ItemImage} alt='' />
      <div className='label-block'>
        <div className='label'>{quantity}</div>
        <div className='label'>{weight} КГ</div>
      </div>
    </>
  )
}
