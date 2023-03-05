import React from "react";

//--------->>>SSR<<<----------------//

export default function Youtube({ movies, randomData ,title}: any) {
  return (
    <div>
      <h1>title: {title}</h1>
      <span>{randomData}</span>
      <ul>
        {movies.map((movie: any, index: any) => {
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

export async function getServerSideProps(context: any) {
  const { type, title } = context.query;// http://localhost:3000/ssr/youtubes/foods?title=art
  //type -> songs,foods,superhero
  const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=${type}`;
  const res = await fetch(url);
  const data = await res.json();
  debugger;

  return {
    props: {
      movies: data.youtubes,
      randomData: Math.random().toString(),
			title:title
    },
  };
}
