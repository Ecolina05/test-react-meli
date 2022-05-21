import './Item.scss'
import greenTruck from '../../assets/img/green_truck.png';

const Item = ({ id, image, title, price, freeShipping, availableQuantity }) => {

  return (
    <section id={id} className='item'>
      <div className='item__info'>
        <img src={image} className='item__image' />

        <div className='flex flex-col'>
          <h3 className='item__title'>{title}</h3>
          <h3 className='item__price'>
            $ {price}
            {freeShipping ? <img src={greenTruck} width='20' /> : null}
          </h3>
        </div>
      </div>

      <span className='item__available'>{availableQuantity} disponibles</span>
    </section>
  )
}

export default Item;