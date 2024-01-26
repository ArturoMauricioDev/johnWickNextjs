import "./Chip.css";
import category from "../assets/categoria-john-wick.json";
import ChipCast from "./ChipCast";

export default function Chip({ movie }: any) {
  const categories = movie.category;
  // console.log(categories);
  return (
    <div className="">
      {categories.map((category: any) => (
        <ChipCast category={category} />
      ))}
    </div>
  );
}
