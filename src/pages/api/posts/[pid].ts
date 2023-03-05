import { NextApiResponse, NextApiRequest } from "next";
export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const {
    query: { pid },
  } = req;

  switch (pid) {
    case "1":
      res.json({ pid: "ONE" });
      break;
    case "8":
      res.json({ pid: "TWO" });
      break;
    default:
      res.json({ pid });
      break;
  }
};
