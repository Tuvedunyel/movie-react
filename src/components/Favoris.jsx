import Header from "../layout/Header";
import Liste from "./Liste";
import SeriesListe from "./SeriesListe";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

function Favoris() {
  const [liste, setListe] = useState([]);
  const [seriesListe, setSeriesListe] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("liste")) {
      setListe(JSON.parse(localStorage.getItem("liste")));
    }
    if (localStorage.getItem("seriesListe")) {
      setSeriesListe(JSON.parse(localStorage.getItem("seriesListe")));
    }
  }, [])

  useEffect( () => {
    localListe()
  }, [liste])

  useEffect( () => {
    localSeriesListe()
  }, [seriesListe])

  const localSeriesListe = () => {
    if (seriesListe.length > 0) {
      localStorage.setItem("seriesListe", JSON.stringify(seriesListe));
    }
  }



  const localListe = () => {
    if (liste.length > 0) {
      localStorage.setItem("liste", JSON.stringify(liste));
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
      <section title='Mes séries' className='films a-venir'>
          <div className='container-narrow'>
            <h2>Mes séries</h2>
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
    </motion.div>
  );
}

export default Favoris;
