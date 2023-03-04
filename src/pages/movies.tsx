import { movies } from "@/components/movies/moviesBody";
import React from "react";

interface PropsType {
  movies: movies[];
  randomData: string;
}

export default function Movies({ movies, randomData }: PropsType) {
  return (
    <div>
      <h1>Movies</h1>
      <h1>{randomData}</h1>
      <ul>
        {movies.map((e, index) => (
          <li key={index}>
            <img src={e.youtube_image} alt="" height={20} />
            {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const url =
    "http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
      randomData: Math.random().toString(),
    },
  };
}
