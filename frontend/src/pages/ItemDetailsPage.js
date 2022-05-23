import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getItemDetails } from '../services/items.service';
import Button from '../components/Button';
import greenTruck from '../assets/img/green_truck.png';
import Breadcrumb from '../components/Breadcrumb';

const ItemDetails = () => {
  const [itemDetail, setItemDetail] = useState({});
  const location = useLocation();
  const param = location.pathname.split('/items/')[1];
  const [mainPicture, setMainPicture] = useState('');

  const NumberFormat = (number) => {
    return new Intl.NumberFormat('ES-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumSignificantDigits: 3
    }).format(number);
  }

  useEffect(() => {
    getItemDetails(param)
      .then(reponse => {
        setItemDetail(reponse);
        setMainPicture(reponse.pictures[0].secure_url);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <Breadcrumb />

      <section className='item-details bg-white flex justify-between'>
        <div className='item-details__section-left'>
          <div className='picture-container'>
            <div className='flex flex-col'>
              {
                itemDetail?.pictures?.length > 0 &&
                itemDetail?.pictures.map((picture, i) => {
                  return i < 4 && <img key={i} src={picture.secure_url} className='picture-small' alt='pictureSmall' onClick={() => setMainPicture(picture.secure_url)} />
                })
              }
            </div>
            <img src={mainPicture} className='main-picture' alt='mainPicture' />
          </div>

          <h3>Descripción del producto</h3>
          <p>{itemDetail.title}</p>
        </div>

        <div className='item-details__section-right flex flex-col'>
          <p className='m-0'>
            {itemDetail.condition === 'new' ? 'Nuevo' : ''} - {itemDetail.sold_quantity} vendidos
          </p>
          <h1 className='m-0'>{itemDetail.title}</h1>
          <h3 className='item-details__price'>
            {NumberFormat(itemDetail.price)}
            {itemDetail?.shipping?.free_shipping ? <img src={greenTruck} width='20' alt='freeShipping' /> : null}
          </h3>

          <div className='flex flex-col gap-2'>
            <Button text='Comprar' type='blue-button' />
            <Button text='Agregar al carrito' type='blue-light-button' />
          </div>
        </div>
      </section>
    </>
  )
}

export default ItemDetails;