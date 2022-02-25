import { useState } from "react";

function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <>
          <div className='darkbackground' onClick={() => setIsOpen(!isOpen)}>
            <div className='container-card'>
              <div className='imgContainer'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
                  alt={props.data.title}
                />
              </div>
              <div className='textContainer'>
                {props.data.overview.length > 2 ? (
                  <p>{props.data.overview}</p>
                ) : (
                  <p>
                    Aucun synopsis n'est actuellement disponible, revenez plus
                    tard
                  </p>
                )}
                <button className='liste-button'>Ajouter à ma liste</button>
              </div>
            </div>
          </div>
          <div
            className='movie'
            key={props.data.id}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
              alt={props.data.title}
            />
            <span className='screen-reader-text'>{props.data.title}</span>
            <div className='overview'>
              {props.data.overview.length > 2 ? (
                <p>{props.data.overview}</p>
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
          key={props.data.id}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
            alt={props.data.title}
          />
          <span className='screen-reader-text'>{props.data.title}</span>
          <div className='overview'>
            {props.data.overview.length > 2 ? (
              <p>{props.data.overview}</p>
            ) : (
              <p>
                Aucun synopsis n'est actuellement disponible, revenez plus tard
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
