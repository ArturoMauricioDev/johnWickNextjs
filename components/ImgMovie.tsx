import Image from "next/image";

function ImgMovie({ img, name }: any) {
  return (
    <>
      <Image alt={name} src={img} width={102} height={121} />
    </>
  );
}

export default ImgMovie;
