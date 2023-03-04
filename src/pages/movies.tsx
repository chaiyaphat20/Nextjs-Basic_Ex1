import { movies } from "@/components/movies/moviesBody";
import axios from "axios";
import React, { useEffect } from "react";

interface PropsType {
  movies: movies[];
  randomData: string;
}

export default function Movies({ movies, randomData }: PropsType) {
  const callApi = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos/1";
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
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

//getStaticProps ถ้าเป็น mode dev จะเรียกใหม่ทุก request
//แต่ mode production จะ เรียกครั้งเดียวตอน build runtime
