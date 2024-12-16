import { FaStar } from "react-icons/fa";
import { rate } from "../../store/main-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface Props {
  rating: number;
  setRateErr?: (err: boolean) => void;
}

const Rating = ({ rating, setRateErr }: Props) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.main);
  const { userRate } = state;
  const handleRate = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (userRate == Number(e.currentTarget.id)) {
      dispatch(rate(Number(e.currentTarget.id) - 1));
    } else {
      if(setRateErr) setRateErr(false);
      dispatch(rate(Number(e.currentTarget.id)));
    }
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const filledStars = index + 1;
    const isHalfFilled = rating >= filledStars - 0.9 && rating < filledStars;
    return (
      <span
        onClick={handleRate}
        key={index}
        id={(index + 1).toString()}
        style={{
          position: "relative",
          display: "inline-block",
          width: "24px",
          height: "24px",
        }}
        className="cursor-pointer"
      >
        <FaStar
          style={{
            color: rating >= filledStars ? "gold" : "#e4e5e9",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          className="pointer-events-none"
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
            className="pointer-events-none"
            size={24}
          />
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default Rating;
