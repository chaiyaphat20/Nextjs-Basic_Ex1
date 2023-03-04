import React from "react";
import { useRouter } from "next/router";

export default function Movies({ movies }:any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movies</h1>

      <ul>
        {movies.map((movie:any, index:number) => {
          return (
            <li key={`${index}`}>
              <img
                src={movie.youtube_image}
                height={20}
                style={{ marginRight: 16 }}
              />
              {`${index + 1}. ${movie.title} : ${movie.subtitle}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "foods" } },
      { params: { id: "songs" } },
      { params: { id: "superhero" } },
    ],
    fallback: true,
  };
}

// This function gets called at build time
export async function getStaticProps({ params }:any) {
  console.log(params);
  const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
    },
  };
}
