import ImageCast from "./ImageCast";
import img from "../assets/cartelera.json";
import "./ImageCast.css";

export default function TopImage({ movie }: any) {
  console.log(movie.imgPoster);
  return (
    <div className="ImageContainer">
      <ImageCast imgPoster={movie.imgPoster} name={movie.name} />
    </div>
  );
}
