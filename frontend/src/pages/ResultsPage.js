import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getItemsByParam } from '../services/items.service';
import Breadcrumb from '../components/Breadcrumb'
import Item from '../components/Item';

const ResultsPage = () => {
  const location = useLocation();
  const param = location.search.split('=')[1];
  const [items, setItems] = useState([]);
  const [, setFilter] = useState([]);
  const [categoriesToBreadcrumb, setCategoriesToBreadcrumb] = useState();

  useEffect(() => {
    getItemsByParam(param)
      .then(({ items, filters }) => {
        const itemsToShow = [];
        items?.forEach((item, i) => {
          i < 4 && itemsToShow.push(item);
        });
        setItems(itemsToShow);
        setFilter(filters);

        if (filters.length > 0) {
          const category = filters.find(filter => filter.id === 'category');
          setCategoriesToBreadcrumb(category?.values[0]?.path_from_root);
        }
      })
      .catch(error => console.log(error))
  }, [param]);

  return (
    <>
      <Breadcrumb categories={categoriesToBreadcrumb} />

      <section className='section-results bg-white'>
        {
          items.length === 0
            ?
            <h3>Cargando...</h3>
            :
            items.map(item => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  freeShipping={item.shipping.free_shipping}
                  availableQuantity={item.available_quantity}
                />
              );
            })
        }
      </section>
    </>
  );
}

export default ResultsPage;