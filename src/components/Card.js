import Image from "next/image";
import { Starsrating } from "./Stars";
const Card = ({ id, img, title, pricing, description, tasks, link }) => {
  return (
    <article className="card">
      <div>
        <Image
          src={img}
          width={500}
          height={500}
          alt={`Logo of ${title}`}
          description={`Logo of ${title}`}
          type="image/webp"
        />
        <Starsrating />
      </div>
      <div>
        <h1>{title}</h1>
        <div className="pricing">
          {" "}
          <span>{pricing}</span>
        </div>
        <div className="description">
          {" "}
          <span>{description}</span>
        </div>

        <div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <button
          aria-label="Visit the following website"
          className="remove-btn"
          onClick={() => {
            window.open(link).focus();
          }}
        >
          visit now
        </button>
      </div>
    </article>
  );
};
export default Card;
