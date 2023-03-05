import useSWR from "swr";
import axios from 'axios';
export default function ClintSide() {
  const fetcherFetch = (url:string) => fetch(url).then(r => r.json())
  const fetcherAxios = (url:string) => axios.get(url).then(res => res.data)
  const url =
    "https://jsonplaceholder.typicode.com/todos";
  const { data, error } = useSWR(url, fetcherFetch);
	console.log(error)

  return (
    <div>
      <div>Clint-Side</div>
      <span>{JSON.stringify(data)}</span>
    </div>
  );
}
