import "./Description.css";

export default function DescriptionCast({ synopsis }: any) {
  return (
    <div className="description">
      <p>{synopsis} </p>
    </div>
  );
}
