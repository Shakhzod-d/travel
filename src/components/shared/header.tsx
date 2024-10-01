// import travelIcon from '../../assets/images/experts.svg'
import { Navbar } from "./index";

const Header = () => {
  return (
    <div className="padding flex justify-between items-center py-4 border-b-[1px] border-[#E6E6E6]">
      {/* <img
        src={travelIcon}
        alt="we can travel experts"
        className="w-[270px] h-[44px] fill-blue-500"
      /> */}
      <Navbar />
    </div>
  );
};

export default Header;
