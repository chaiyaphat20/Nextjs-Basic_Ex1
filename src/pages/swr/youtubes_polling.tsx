import useSWR from "swr";
import axios from "axios";
export default function ClintSide() {
  const fetcherAxios = (url: string) => axios.get(url).then((res) => res.data);
  const url = "/api/random";
  const { data, error } = useSWR(url, fetcherAxios, { refreshInterval: 2000 });

  return (
    <div>
      <h1>Client-Side SWR Interval polling</h1>
      <span>{data && data.random}</span>
    </div>
  );
}
