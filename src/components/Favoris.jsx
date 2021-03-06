import Header from "../layout/Header";
import Liste from "./Liste";
import SeriesListe from "./SeriesListe";
import MoviesListe from "./MoviesListe";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const Favoris = () => {
  const [liste, setListe] = useState([]);
  const [seriesListe, setSeriesListe] = useState([]);
  const [moviesListe, setMoviesListe] = useState([]);

  useEffect(() => {
    if (window.localStorage.liste) {
      setListe( JSON.parse(window.localStorage.liste) )
    }
    if (window.localStorage.seriesListe) {
      setSeriesListe( JSON.parse(window.localStorage.seriesListe) )
    }
    if (window.localStorage.moviesListe) {
      setMoviesListe( JSON.parse(window.localStorage.moviesListe) )
    }
  }, [])

  useEffect( () => {
    localListe()
  }, [liste])

  useEffect( () => {
    localSeriesListe()
  }, [seriesListe])

  useEffect( () => {
    localMoviesListe()
  }, [moviesListe])

  const localSeriesListe = () => {
    if (seriesListe.length > 0) {
      window.localStorage.seriesListe = JSON.stringify(seriesListe);
    }
  }
  const localMoviesListe = () => {
    if (moviesListe.length > 0) {
      window.localStorage.moviesListe = JSON.stringify(moviesListe);

    }
  }



  const localListe = () => {
    if (liste.length > 0) {
      window.localStorage.liste = JSON.stringify(liste);
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
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Header />
      <section title='Ma liste' className='films a-venir'>
          <div className='container-narrow'>
            <h2>Ma liste</h2>
            <div className='container-films'>
              {liste.map(item => {
                return (
                  <Liste
                    key={item.id}
                    item={item}
                    liste={liste}
                    setListe={setListe}
                  />
                );
              })}
            </div>
          </div>
        </section>
      <section title='Mes s??ries' className='films a-venir'>
          <div className='container-narrow'>
            <h2>Mes s??ries</h2>
            <div className='container-films'>
              {seriesListe.map(item => {
                return (
                  <SeriesListe
                    key={item.id}
                    item={item}
                    seriesListe={seriesListe}
                    setSeriesListe={setSeriesListe}
                  />
                );
              })}
            </div>
          </div>
        </section>
      <section title='Mes films' className='films a-venir'>
          <div className='container-narrow'>
            <h2>Mes films</h2>
            <div className='container-films'>
              {moviesListe.map(item => {
                return (
                  <MoviesListe
                    key={item.id}
                    item={item}
                    moviesListe={moviesListe}
                    setMoviesListe={setMoviesListe}
                  />
                );
              })}
            </div>
          </div>
        </section>
    </motion.div>
  );
}

export default Favoris;
