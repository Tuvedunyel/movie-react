import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./../layout/Card";
import Header from "../layout/Header";
import { motion } from "framer-motion";
import SeriesListe from "./SeriesListe";

const Series = () => {
  const [popular, setPopular] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [onAirShow, setOnAirShow] = useState([]);
  const [seriesListe, setSeriesListe] = useState([]);

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

    if (window.localStorage.seriesListe) {
      setSeriesListe(JSON.parse(window.localStorage.seriesListe));
    }
  }, []);

  useEffect(() => {
    localSeriesListe();
  }, [seriesListe]);

  const fetchApi = (api, setter, storeData) => {
    if (window.localStorage.storeData) {
      setter(JSON.parse(window.localStorage.storeData));
    }
    axios.get(api).then(res => {
      window.localStorage.storeData = JSON.stringify(res.data.results);
      setter(res.data.results);
    });
  };

  const localSeriesListe = () => {
    if (seriesListe.length > 0) {
      window.localStorage.seriesListe = JSON.stringify(seriesListe);
    }
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
            <h2>S??ries populaire</h2>
            <div className='container-films'>
              {popular.map(serie => {
                return (
                  <Card
                    key={serie.id}
                    data={serie}
                    setListe={setSeriesListe}
                    liste={seriesListe}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section title='best-rated' className='films'>
          <div className='container-narrow'>
            <h2>S??ries les mieux not??s</h2>
            <div className='container-films'>
              {bestRated.map(serie => {
                return (
                  <Card
                    key={serie.id}
                    data={serie}
                    setListe={setSeriesListe}
                    liste={seriesListe}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section title='Actuellement ?? la T??l??' className='films'>
          <div className='container-narrow'>
            <h2>Actuellement ?? la t??l??vision</h2>
            <div className='container-films'>
              {onAirShow.map(serie => {
                return (
                  <Card
                    key={serie.id}
                    data={serie}
                    setListe={setSeriesListe}
                    liste={seriesListe}
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
      </div>
    </motion.div>
  );
};

export default Series;
