import { useState } from 'react';

const SeriesListe = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleRemover = () => {
      // Remove item from list
      props.setSeriesListe([
        ...props.seriesListe.filter(item => item.id !== props.item.id),
      ]);
      // Remove item from localStorage
      window.localStorage.seriesListe = JSON.stringify(props.seriesListe);
    };

    return (
      <>
        {isOpen ? (
          <>
            <div className='darkbackground' onClick={() => setIsOpen(!isOpen)}>
              <div className='container-card'>
                <div className='imgContainer'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
                    alt={props.item.title}
                  />
                </div>
                <div className='textContainer'>
                  {props.item.overview.length > 2 ? (
                    <p>{props.item.overview}</p>
                  ) : (
                    <p>
                      Aucun synopsis n'est actuellement disponible, revenez plus
                      tard
                    </p>
                  )}
                  <button onClick={handleRemover} className='liste-button'>
                    Retirer de ma liste
                  </button>
                </div>
              </div>
            </div>
            <div
              className='movie'
              key={props.item.id}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
                alt={props.item.title}
              />
              <span className='screen-reader-text'>{props.item.title}</span>
              <div className='overview'>
                {props.item.overview.length > 2 ? (
                  <p>{props.item.overview}</p>
                ) : (
                  <p>
                    Aucun synopsis n'est actuellement disponible, revenez plus
                    tard
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div
            className='movie'
            key={props.item.id}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
              alt={props.item.title}
            />
            <span className='screen-reader-text'>{props.item.title}</span>
            <div className='overview'>
              {props.item.overview.length > 2 ? (
                <p>{props.item.overview}</p>
              ) : (
                <p>
                  Aucun synopsis n'est actuellement disponible, revenez plus
                  tard
                </p>
              )}
            </div>
          </div>
        )}
      </>
    );
}

export default SeriesListe