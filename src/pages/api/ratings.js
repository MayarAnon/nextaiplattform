import dbConnect from "../../lib/dbConnect";
import Rating from "../../features/rating";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const Name = req.query.name;
        const ratings = await Rating.find({ Name: Name });
        res.status(200).json({ success: true, data: ratings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
