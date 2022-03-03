import Header from "../layout/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../layout/Card";
import axios from "axios";

const Browse = () => {
  const [search, setSearch] = useState("a");
  const [results, setResults] = useState([]);
  const [liste, setListe] = useState([]);

  useEffect( () => {
    if (search.length === 0) {
      setSearch("a");
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then(res => {
        setResults(res.data.results);
      });
  }, [search]);

  useEffect(() => {
    if (window.localStorage.moviesListe) {
      setListe(JSON.parse(window.localStorage.moviesListe));
    }
    console.log("renter");
  }, []);

  useEffect(() => {
    console.log("renter liste");
    addToLocalStorage();
  }, [liste]);

  const addToLocalStorage = () => {
    if (liste.length > 0) {
      window.localStorage.moviesListe = JSON.stringify(liste);
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
    >
      <Header />
      <div className='container-narrow'>
        <form action='' className='search-form'>
          <input
            type='text'
            onChange={e => setSearch(e.target.value)}
            id='search'
            placeholder='Entrez votre recherche'
            aria-label='Entre votre recherche'
          />
        </form>
        <section
          id='demo'
          title='Résultats de votre recherche'
          className='films'
        >
          <div className='container-narrow'>
            <h2>Films populaire</h2>
            <div className='container-films'>
              {results.map(movie => {
                return (
                  <Card
                    setListe={setListe}
                    liste={liste}
                    key={movie.id}
                    data={movie}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Browse;
