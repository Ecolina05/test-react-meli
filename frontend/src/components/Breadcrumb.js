const Breadcrumb = ({ categories, category, itemName }) => {
  return (
    <section>
      <ul className='breadcrumb text-sm'>
        {
          categories?.map(category => {
            return <li key={category.id}>{category.name}</li>
          })
        }
        {category && <li>{category}</li>}
        {itemName && <li>{itemName}</li>}
      </ul>
    </section>
  );
}

export default Breadcrumb;