import greenTruck from '../assets/img/green_truck.png';
import { useNavigate } from 'react-router-dom';

const Item = ({ id, image, title, price, freeShipping, availableQuantity }) => {
  const navigate = useNavigate();

  const NumberFormat = (number) => {
    return new Intl.NumberFormat('ES-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumSignificantDigits: 3
    }).format(number);
  }

  const goToItemDetails = () => {
    navigate(`/items/${id}`);
  }

  return (
    <section id={id} className='item'>
      <div className='item__info'>
        <img src={image} className='item__image cursor-pointer' onClick={goToItemDetails} alt='itemImage' width='100' />

        <div className='flex flex-col'>
          <h3 className='item__title cursor-pointer' onClick={goToItemDetails}>{title}</h3>
          <h3 className='item__price cursor-pointer' onClick={goToItemDetails}>
            {NumberFormat(price)}
            {freeShipping ? <img src={greenTruck} alt='freeShipping' width='20' /> : null}
          </h3>
        </div>
      </div>

      <span className='item__available'>{availableQuantity} disponibles</span>
    </section>
  )
}

export default Item;