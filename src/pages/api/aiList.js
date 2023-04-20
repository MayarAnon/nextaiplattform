import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import aiList from "../../lib/ailist";
export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content: aiList,
    });
  } else {
    res.send({
      content: aiList.slice(0, 5),
    });
  }
};
