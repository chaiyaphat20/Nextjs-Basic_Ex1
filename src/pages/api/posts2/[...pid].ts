import { NextApiResponse, NextApiRequest } from "next";
export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const {
    query: { pid },
  } = req;

  res.json(pid);

  //http://localhost:3000/api/posts2/1/2/3
};

// [
//   "1",
//   "2",
//   "3"
// ]
