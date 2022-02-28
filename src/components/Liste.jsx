import { useState } from 'react';

function Liste (props) {
    const [isOpen, setIsOpen] = useState(false);

    function handleRemover() {
        const itemToRemove = props.data.indexOf(props.liste);
        // props.setListe(props.data.splice(props.data.indexOf(props.liste)));
        console.log(
            props.setListe(props.data.splice(itemToRemove, 0))
        );
    }

    return (
      <>
        {isOpen ? (
          <>
            <div className='darkbackground' onClick={() => setIsOpen(!isOpen)}>
              <div className='container-card'>
                <div className='imgContainer'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${props.liste.poster_path}`}
                    alt={props.liste.title}
                  />
                </div>
                <div className='textContainer'>
                  {props.liste.overview.length > 2 ? (
                    <p>{props.liste.overview}</p>
                  ) : (
                    <p>
                      Aucun synopsis n'est actuellement disponible, revenez plus
                      tard
                    </p>
                  )}
                  <button
                    onClick={ handleRemover }
                    className='liste-button'
                  >
                    Retirer de ma liste
                  </button>
                </div>
              </div>
            </div>
            <div
              className='movie'
              key={props.liste.id}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${props.liste.poster_path}`}
                alt={props.liste.title}
              />
              <span className='screen-reader-text'>{props.liste.title}</span>
              <div className='overview'>
                {props.liste.overview.length > 2 ? (
                  <p>{props.liste.overview}</p>
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
            key={props.liste.id}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${props.liste.poster_path}`}
              alt={props.liste.title}
            />
            <span className='screen-reader-text'>{props.liste.title}</span>
            <div className='overview'>
              {props.liste.overview.length > 2 ? (
                <p>{props.liste.overview}</p>
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

export default Liste;