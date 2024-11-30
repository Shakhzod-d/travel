import { Link } from "react-router-dom";
import whiteIcon from '../../assets/images/icons/white-icon.png'
import { Container, LocaleSelector } from "../ui";
import Navbar from "./navbar";
import { cn } from "../../utils/constants";
import MenuIcon from '@mui/icons-material/Menu';
import { openMenu } from "../../store/main-slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
interface Props {
  route: string;
  title: string;
  desc: string;
  className: string;
}

const HeaderAbout = ({ route, title, desc, className }: Props) => {
  const { t } = useTranslation()
  let dispatch = useDispatch()

  const openHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(openMenu())
  }

  return (
    <header
      className={(cn(`bg-no-repeat bg-cover pb-28 mb-[90px]`), className)}
    >
      <div className="absolute z-0 pointer-events-none inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 border-b-[1px] border-[#E6E6E6] *:text-white *:border-white mb-10 opacity-100">
        <Container className="padding flex justify-between items-center py-4 ">
          <Link to={"/"}>
            <img src={whiteIcon} alt="we can travel experts" className='w-[270px] h-[44px] xm:w-[180px]'/>
          </Link>
          <div className="lg:hidden flex">
            <Navbar borderColor='white'/>
            <LocaleSelector/>
          </div>
          <div className="hidden lg:flex cursor-pointer">
            <div className='mr-2 flex items-center'>
              <LocaleSelector/>
            </div>
            <div onClick={openHandler}>
              <MenuIcon style={{ fontSize:32, color:'white' }}/>
            </div>
          </div>
        </Container>
      </div>

      <Container className="relative z-10">
        <div className="text-white text-lg font-semibold leading-[27px] mb-32 uppercase">
          <Link to={"/"} className="text-white/70">
            {t("home")}
          </Link>
          <span className="mx-2">{'/'}</span> {route}
        </div>

        <h2 className="text-white text-[76px] font-[800] uppercase leading-[88.16px] mb-5 sm:text-3xl">
          {title}
        </h2>
        <p className="text-white/70 text-[18px] font-[600] leading-[27px]">
          {desc}
        </p>
      </Container>
    </header>
  );
};

export default HeaderAbout;
