import { Experts } from "../../assets/images/icons";
import { Container } from "./container";

const Footer = () => {
  return (
    <footer className="bg-[#09132e] py-24">
      <Container>
        <div className="flex gap-8 flex-wrap *:text-white justify-between mb-14">
          <Experts fill={"#fff"} />

          <ul>
            <h2 className="mb-4 text-white text-lg font-medium">Learn More </h2>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              About programs
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Press Relaases
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Environment
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Jobs
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Privacy Policy
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Contact Us
            </li>
          </ul>

          <ul>
            <h2 className="mb-4 text-white text-lg font-medium">
              Tickets & Booking{" "}
            </h2>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Tickets{" "}
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Season Passes
            </li>
            <li className="opacity-80 text-white text-sm font-bold leading-[30px]">
              Vacation Packages
            </li>
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

          <ul>
            <h2 className="mb-4 text-white text-lg font-medium">Social</h2>

            <div className="flex gap-7">
              <a href="#">
                <img src="/icons/facebook.svg" alt="" />
              </a>
              <a href="#">
                <img src="/icons/instagram.svg" alt="" />
              </a>
              <a href="#">
                <img src="/icons/x.svg" alt="" />
              </a>
              <a href="#">
                <img src="/icons/youtube.svg" alt="" />
              </a>
              <a href="#">
                <img src="/icons/wordpress.png" alt="" />
              </a>
            </div>
          </ul>
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
