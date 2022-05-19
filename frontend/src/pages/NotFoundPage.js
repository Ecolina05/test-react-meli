import notFoundIllustration from '../assets/img/undraw_not_found.svg';

const NotFoundPage = () => {
  return (
    <section className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-xl'>Página no encontrada</h1>
      <img src={notFoundIllustration} width='500' alt='homeImage' />
    </section>
  );
}

export default NotFoundPage;