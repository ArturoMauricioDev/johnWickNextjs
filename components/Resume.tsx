import "./Description.css";
import DescriptionCast from "./DescriptionCast";

export default function Resume({ movie }: any) {
  const synopsis = movie.synopsis;
  // console.log(synopsis);
  return (
    <div className="descriptionContainer">
      <DescriptionCast synopsis={synopsis} />
    </div>
  );
}
