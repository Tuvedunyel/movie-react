function Card(props) {
  return (
    <div className='movie' key={props.data.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
        alt={props.data.title}
      />
      <span className='screen-reader-text'>{props.data.title}</span>
      <div className='overview'>
        {props.data.overview.length > 2 ? (
          <p>{props.data.overview}</p>
        ) : (
          <p>Aucun synopsis n'est actuellement disponible, revenez plus tard</p>
        )}
      </div>
    </div>
  );
}

export default Card