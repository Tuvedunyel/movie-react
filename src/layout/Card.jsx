import { useState } from "react";
import Button from './../components/Button';

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const addToListe = () => {
    props.setListe([...props.liste, props.data]);
  };

  const removeFromListe = () => {
    props.setListe([...props.liste.filter(item => item.id !== props.data.id)]);
  }

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
                <Button liste={props.liste} data={props.data} removeFromListe={removeFromListe} addToListe={addToListe} />
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
            src={props.data.poster_path ? `https://image.tmdb.org/t/p/w500${props.data.poster_path}` : './src/img/poster.jpg'}
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
