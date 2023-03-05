import { NextApiRequest, NextApiResponse } from "next";

import data from "./foodData.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  setTimeout(() => {
    res.status(200).json(data);
  }, 2000);
}
