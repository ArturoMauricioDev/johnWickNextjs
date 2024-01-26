import ImgMovie from "./ImgMovie";

function MovieList({ movies }: any) {
  return (
    <div className="flex">
      {movies.map((movie: any) => {
        return (
          <ImgMovie key={movie.id} img={movie.imgPoster} name={movie.name} />
        );
      })}
      <ImgMovie />
    </div>
  );
}

export default MovieList;
