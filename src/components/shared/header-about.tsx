// import travelIcon from "../../assets/images/experts.svg";
import { Link } from "react-router-dom";
import { Experts } from "../../assets/images/icons";
import { Container } from "../ui";
import Navbar from "./navbar";
import { cn } from "../../utils/constants";

interface Props {
  route: string;
  title: string;
  desc: string;
  className: string;
}

const HeaderAbout = ({ route, title, desc, className }: Props) => {
  return (
    <header
      className={(cn(`bg-no-repeat bg-cover pb-28 mb-[90px]`), className)}
    >
      <div className="border-b-[1px] border-[#E6E6E6] *:text-white mb-10">
        <Container className="padding flex justify-between items-center py-4 ">
          <Experts fill="#fff" />
          <Navbar />
        </Container>
      </div>

      <Container>
        <div className="text-white text-lg font-semibold leading-[27px] mb-32">
          <Link to={"/"} className="text-white/70">
            Home
          </Link>{" "}
          / {route}
        </div>

        <h2 className="text-white text-[76px] font-extrabold  leading-[88.16px] mb-5 sm:text-3xl">
          {title}
        </h2>
        <p className="text-white/70 text-lg font-semibold leading-[27px]">
          {desc}
        </p>
      </Container>
    </header>
  );
};

export default HeaderAbout;
