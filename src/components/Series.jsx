import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./../layout/Card";
import Header from "../layout/Header";
import { motion } from "framer-motion";

function Series() {
  const [popular, setPopular] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [onAirShow, setOnAirShow] = useState([]);

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

  useEffect(() => {
    fetchApi(
      "https://api.themoviedb.org/3/tv/popular?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setPopular,
      "popularSeries"
    );

    fetchApi(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setBestRated,
      "bestRatedSeries"
    );

    fetchApi(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=183f6d81ebab47463edff434c4c7625b&language=en-US&page=1",
      setOnAirShow,
      "onAirShow"
    );
  }, []);

  const fetchApi = (api, setter, storeData) => {
    if (localStorage.getItem(storeData)) {
      setter(JSON.parse(localStorage.getItem(storeData)));
    }
    axios.get(api).then(res => {
      localStorage.setItem(storeData, JSON.stringify(res.data.results));
      setter(res.data.results);
    });
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
        <section title='Populaire' className='films'>
          <div className='container-narrow'>
            <h2>Séries populaire</h2>
            <div className='container-films'>
              {popular.map(serie => {
                return <Card key={serie.id} data={serie} />;
              })}
            </div>
          </div>
        </section>
        <section title='best-rated' className='films'>
          <div className='container-narrow'>
            <h2>Séries les mieux notés</h2>
            <div className='container-films'>
              {bestRated.map(serie => {
                return <Card key={serie.id} data={serie} />;
              })}
            </div>
          </div>
        </section>
        <section title='Actuellement à la Télé' className='films'>
          <div className='container-narrow'>
            <h2>Actuellement à la télévision</h2>
            <div className='container-films'>
              {onAirShow.map(serie => {
                return <Card key={serie.id} data={serie} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Series;
