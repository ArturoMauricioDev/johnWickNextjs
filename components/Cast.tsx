import "./Cast.css";

export default function Cast({ actor }: any) {
  return (
    <div className="cast">
      <div className="container">
        <img src={actor.img} alt={`Imagen del actor ${actor.name}`} />
      </div>
      <p>{actor.category} </p>
      <p>{actor.synopsis} </p>
      <p>{actor.name} </p>
      <p>{actor.cast} </p>
    </div>
  );
}
