import Image from "next/image";
import "./ImageCast.css";

export default function ImageCast({ imgPoster, name }: any) {
  return (
    <div className="poster">
      <Image
        className="poster"
        src={imgPoster}
        alt={`Imagen del actor ${name}`}
        width={390}
        height={462}
      />
    </div>
  );
}
