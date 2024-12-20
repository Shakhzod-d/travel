// import travelIcon from "../../assets/images/experts.svg";
import { Link } from "react-router-dom";
import whiteIcon from '../../assets/images/icons/white-icon.png'
import { Container, SigninBtn } from "../ui";
import Navbar from "./navbar";
import { cn } from "../../utils/constants";
import MenuIcon from '@mui/icons-material/Menu';
import { openMenu } from "../../store/main-slice";
import { useDispatch } from "react-redux";
interface Props {
  route: string;
  title: string;
  desc: string;
  className: string;
}

const   HeaderAbout = ({ route, title, desc, className }: Props) => {

  let dispatch = useDispatch()

  const openHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(openMenu())
  }

  return (
    <header
      className={(cn(`bg-no-repeat bg-cover pb-28 mb-[90px]`), className)}
    >
      <div className="border-b-[1px] border-[#E6E6E6] *:text-white *:border-white mb-10">
        <Container className="padding flex justify-between items-center py-4 ">
          <img src={whiteIcon} alt="we can travel experts" className='w-[270px] h-[44px] xm:w-[180px]'/>
          <div className="lg:hidden flex">
            <Navbar borderColor='white'/>
            <SigninBtn/>
          </div>
          <div className="hidden lg:block cursor-pointer" onClick={openHandler}>
            <MenuIcon style={{ fontSize:32, color:'white' }}/>
          </div>
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
