import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import useToast from "../features/useToast";
export default function Starsrating(name) {
  const [rating, setRating] = useState(0);
  const { data: session } = useSession();
  const { showToast } = useToast();
  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await fetch(`/api/ratings?name=${name.name}`);
        const data = await response.json();
        if (data.data.length != 0) {
          const len =
            data.data[0].Rating.Verygood +
            data.data[0].Rating.Good +
            data.data[0].Rating.Average +
            data.data[0].Rating.Bad +
            data.data[0].Rating.Terrible;
          let initRating =
            5 * data.data[0].Rating.Verygood +
            4 * data.data[0].Rating.Good +
            3 * data.data[0].Rating.Average +
            2 * data.data[0].Rating.Bad +
            data.data[0].Rating.Terrible;

          setRating(Math.round(initRating / len));
        }
      } catch (error) {
        console.error("Error fetching average rating:", error);
      }
    };

    fetchAverageRating();
  }, []);
  const handleRating = async (rate) => {
    setRating(rate);

    // Map rate to corresponding rating subfield
    const ratingSubfieldMap = {
      1: "Terrible",
      2: "Bad",
      3: "Average",
      4: "Good",
      5: "Verygood",
    };

    const ratingSubfield = ratingSubfieldMap[rate];

    // Send rating data to the server
    try {
      const response = await fetch(
        `/api/ratings/${name.name}/${ratingSubfield.toLowerCase()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({
            Name: name.name, // Replace this with a unique identifier, e.g. a user ID
          }),
        }
      );
      const data = await response.json();
      const status = response.status;

      switch (true) {
        case status === 401 && data.message === "Unauthorized":
          showToast("Unauthorized", "error");
          break;

        case status === 400 && data.message === "User has already rated.":
          showToast("You have already rated this item.", "error");
          break;

        case response.ok:
          showToast("Rating saved successfully", "success");
          break;

        default:
          showToast("Error saving rating", "error");
      }
    } catch (error) {
      showToast("ERROR", "error");
      console.error("Error saving rating:", error);
    }
  };

  return session ? (
    <div>
      <Rating
        readonly={false}
        className="starsrating"
        onClick={handleRating}
        size={25}
        initialValue={rating}
      />
      <ToastContainer />
    </div>
  ) : (
    <div>
      <Rating
        readonly={true}
        className="starsrating"
        size={25}
        initialValue={rating}
      />
      <ToastContainer />
    </div>
  );
}
