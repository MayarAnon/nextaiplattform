import dbConnect from "../../../../lib/dbConnect";
import Rating from "../../../../features/rating";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    await dbConnect();
    try {
      const { name, ratingSubfield } = req.query;

      const userId = session.user.email;
      const rating = await Rating.findOne({ Name: name });
      const ratingKey = `Rating.${ratingSubfield
        .charAt(0)
        .toUpperCase()}${ratingSubfield.slice(1)}`;
      if (!rating) {
        const newRating = new Rating({
          Name: name,
          Rating: {
            Verygood: 0,
            Good: 0,
            Average: 0,
            Bad: 0,
            Terrible: 0,
          },
        });
        newRating.Rating[ratingKey] += 1;
        await newRating.save();
        return res.status(201).json(newRating);
      }

      if (rating.ratedUsers.includes(userId)) {
        return res.status(400).json({ message: "User has already rated." });
      } else {
        const updatedRating = await Rating.findOneAndUpdate(
          { Name: name },
          { $inc: { [ratingKey]: 1 }, $addToSet: { ratedUsers: userId } },
          { new: true }
        );

        res.json(updatedRating);
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
