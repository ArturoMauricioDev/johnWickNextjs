import Button from "@/components/Button";
import Chip from "@/components/Chip";
import TopImage from "@/components/Poster";
import Resume from "@/components/Resume";
import TopCast from "@/components/TopCast";

async function getData() {
  const res = await fetch(
    "https://65b16416d16d31d11bded201.mockapi.io/api/v1/movies"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({ params }: { params: { id: string } }) {
  const data = await getData();
  // console.log(data);
  const movie = data.find((movie: any) => movie.id === params.id);
  // console.log(movie);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopImage movie={movie} />
      <Chip movie={movie} />
      <Resume movie={movie} />
      <TopCast movie={movie} />
      <Button />
    </main>
  );
}
