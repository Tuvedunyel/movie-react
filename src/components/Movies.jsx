import Header from "../layout/Header";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(state => state.movies.value);

  console.log(movies)

  return (
    <>
      <Header />
      <div className='container-narrow'>
        <h1>Movies</h1>
      </div>
    </>
  );
}

export default Movies;
