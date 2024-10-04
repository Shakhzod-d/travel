import { FaStar } from "react-icons/fa";
interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filledStars = index + 1;
    const isHalfFilled = rating >= filledStars - 0.9 && rating < filledStars;

    return (
      <span
        key={index}
        style={{
          position: "relative",
          display: "inline-block",
          width: "24px",
          height: "24px",
        }}
      >
        <FaStar
          style={{
            color: rating >= filledStars ? "gold" : "#e4e5e9",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          size={24}
        />
        {isHalfFilled && (
          <FaStar
            style={{
              color: "gold",
              clipPath: `polygon(0 0, ${(rating % 1) * 100}% 0, ${
                (rating % 1) * 100
              }% 100%, 0% 100%)`,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            size={24}
          />
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default Rating;
