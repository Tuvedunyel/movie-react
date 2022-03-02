import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./layout/Header";
import axios from "axios";
import Card from "./layout/Card";
import Liste from "./components/Liste";
import InitialTransition from "./transition/InitialTransition";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [series, setSeries] = useState([]);
  const [liste, setListe] = useState([]);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  useEffect(() => {
    fetchApi(
      "https://api.themoviedb.org/3/movie/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setPopular,
      "popularMovies"
    );

    fetchApi(
      "https://api.themoviedb.org/3/tv/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setSeries,
      "popularSeries"
    );


    if (localStorage.getItem("liste")) {
      setListe(JSON.parse(localStorage.getItem("liste")));
    }

  }, []);

  useEffect(() => {
    localListe();
  }, [liste]);

  const fetchApi = (api, setter, storeData) => {
    if (localStorage.getItem(storeData)) {
      setter(JSON.parse(localStorage.getItem(storeData)));
    }
    axios.get(api).then(res => {
      localStorage.setItem(storeData, JSON.stringify(res.data.results));
      setter(res.data.results);
    });
  };

  const localListe = () => {
    if (liste.length > 0) {
      localStorage.setItem("liste", JSON.stringify(liste));
    }
  };

  return (
    <>
      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      >
        <Header />
        <section id="demo" title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Films populaire</h2>
            <div className='container-films'>
              {popular.slice(0, 7).map(movie => {
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
        <section title='Nouveau sur le site' className='films a-venir'>
          <div className='container-narrow'>
            <h2>Séries Populaire</h2>
            <div className='container-films'>
              {series.slice(0, 7).map(serie => {
                return (
                  <Card
                    key={serie.id}
                    data={serie}
                    setListe={setListe}
                    liste={liste}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section title='Ma liste' className='films a-venir'>
          <div className='container-narrow'>
            <h2>Ma liste</h2>
            <div className='container-films'>
              {liste.slice(0, 7).map(item => {
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
      </motion.div>
      <InitialTransition />
    </>
  );
}

export default App;
