import { movies } from "@/components/movies/moviesBody";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface PropsType {
  movies: movies[];
}

export default function Feed({ movies }: PropsType) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
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

// This function gets called at build time
//ใช้เพื่อ ดึง path ทั้งหมด มาแล้วส่งให้ getStaticProps เอา params.id ไป gen ก่อน (ในขั้นตอน build)
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
export async function getStaticProps({ params }: any) {
  const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
    },
  };
}
