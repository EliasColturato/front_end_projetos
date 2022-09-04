import FilmShelf from '../components/filmShelf/FilmShelf';

export default function Home({ handleAddProduct }) {
  return (
    <>
      <FilmShelf handleAddProduct={handleAddProduct} />
    </>
  );
}
