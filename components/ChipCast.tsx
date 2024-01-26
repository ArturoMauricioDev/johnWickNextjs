import "./Chip.css";

export default function ChipCast({ category }: any) {
  return (
    <div className="ChipContainer">
      <p className="Chip">{category} </p>
    </div>
  );
}
