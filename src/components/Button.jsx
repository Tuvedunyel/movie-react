const Button = (props) => {

  return (
    <>
      {props.liste.length > 0 ? (
        <>
          {props.liste.find(item => item.id === props.data.id) ? (
            <button onClick={props.removeFromListe} className='liste-button'>
              Retirer de ma liste
            </button>
          ) : (
            <button onClick={props.addToListe} className='liste-button'>
              Ajouter à ma liste
            </button>
          )}
        </>
      ) : (
        <button onClick={props.addToListe} className='liste-button'>
          Ajouter à ma liste
        </button>
      )}
    </>
  );
}

export default Button;
