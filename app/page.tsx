import Button from "@/components/Button";
import Chip from "@/components/Chip";
import MovieList from "@/components/MovieList";
import TopImage from "@/components/Poster";
import Resume from "@/components/Resume";
import SearchBar from "@/components/SearchBar";
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

export default async function Home() {
  const data = await getData();
  // console.log(data);

  return (
    <main className="flex flex-col items-center justify-between">
      <SearchBar />
      <MovieList movies={data} />
    </main>
  );
}
