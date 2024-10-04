import travelIcon from "../../assets/images/experts.svg";
import { Navbar } from "./index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="padding flex justify-between items-center py-4 border-b-[1px] border-[#E6E6E6]">
      <img
        src={travelIcon}
        alt="we can travel experts"
        className="w-[270px] h-[44px] fill-blue-500"
      />
      <div className="flex items-center">
        <Navbar />
        <Link to={"/sign-in"}>
          <button
            type="button"
            className="bg-[#F56960] round px-4 py-2 text-white font-semibold text-[16px]"
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
