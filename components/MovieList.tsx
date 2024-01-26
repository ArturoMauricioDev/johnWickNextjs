import Link from "next/link";
import ImgMovie from "./ImgMovie";

function MovieList({ movies }: any) {
  return (
    <div className="flex">
      {movies.map((movie: any) => {
        return (
          <Link href={`/peliculas/${movie.id}`}>
            <ImgMovie key={movie.id} img={movie.imgPoster} name={movie.name} />
          </Link>
        );
      })}
    </div>
  );
}

export default MovieList;
