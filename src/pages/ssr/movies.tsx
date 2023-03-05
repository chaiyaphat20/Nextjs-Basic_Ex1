import React from "react";

//--------->>>SSR<<<----------------//

export default function Movies({ movies, randomData }: any) {
  return (
    <div>
      <h1>Movies</h1>
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

// This function gets called at run time ทุกเรียกทุกครั้งที่มีการยิง req
//คือ call api ใหม่ที่ server แล้ว ส่ง html ที่ gen เสร็จมาให้ browser
//ส่วน react จะเป็น csr จะ call api ใหม่เหมือนกัน แต่จะ render ที่ฝั่น browser
export async function getServerSideProps(context: any) {
  const { type } = context.query;

  // songs, foods, superhero
  // const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=${type}`;
  const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods`;
  const res = await fetch(url);
  const data = await res.json();
  debugger;

  return {
    props: {
      movies: data.youtubes,
      randomData: Math.random().toString(),
    },
  };
}
