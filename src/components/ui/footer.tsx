import { Experts } from "../../assets/images/icons";
import { Container } from "./container";
import { footerData1, footerData2, footerData3 } from "../../utils";
import { FooterDataType, FooterIconsType } from "../../types";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-[#09132e] py-24">
      <Container>
        <div className="flex gap-8 flex-wrap *:text-white justify-between mb-14">
          <button onClick={scrollToTop}>
            <Experts fill={"#fff"} />
          </button>
          <ul>
            <h2 className="mb-4 text-white text-lg font-medium">Learn More </h2>
            {
              footerData1.map((item : FooterDataType) => (
                <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px]">
                  <Link to={item.path}>{item.data}</Link>
                </li>
              ))
            }
          </ul>

          <ul>
            <h2 className="mb-4 text-white text-lg font-medium">
              Tickets & Booking{" "}
            </h2>
            {
              footerData2.map((item: FooterDataType) => (
                <li key={item.id} className="opacity-80 text-white text-sm font-bold leading-[30px]">
                  <Link to={item.path}>{item.data}</Link>
                </li>
              ))
            }
          </ul>

          <ul>
            <h2 className="mb-4 text-white text-lg font-medium">Contact Us</h2>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Hotel Reservation: <b>123-456-7890</b>
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Ticket Office: <b>123-456-7890</b>
            </li>
          </ul>

          <div>
            <h2 className="mb-4 text-white text-lg font-medium">Social</h2>
            <ul className="gap-7 flex">
              {
                footerData3.map((item: FooterIconsType) => (
                  <li key={item.id}>
                    <Link to={item.path}>
                      <img src={item.icon} alt={item.alt} />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#ffffff28]">
          <p className="opacity-75 text-center text-white text-sm font-bold ">
            © {new Date().getFullYear()} Visit Uzbeksitan | All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;