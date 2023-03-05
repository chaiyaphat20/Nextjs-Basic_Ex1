import useSWR from "swr";
import axios from "axios";
export default function ClintSide() {
  const fetcherFetch = (url: string) => fetch(url).then((r) => r.json());
  const fetcherAxios = (url: string) => axios.get(url).then((res) => res.data);
  const url = "/api/youtubes";
  const { data, error, mutate } = useSWR(url, fetcherFetch);
  console.log(error);

  return (
    <div>
      <div>Client-Side SWR Mutate</div>
      <div>
        <button
          onClick={() => {
            mutate({
              ...data,
              youtubes: [...data.youtubes, { title: "xxxx", subtitle: "yyyy" }],
            });
          }}
        >
          Mutate
        </button>
        <ul>
          {data &&
            data.youtubes.map((movie: any, index: number) => {
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
    </div>
  );
}
