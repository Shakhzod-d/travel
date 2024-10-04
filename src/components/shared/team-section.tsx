import { teamData } from "../../utils";
import { Container } from "../ui";

const TeamSection = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-center mb-8 max-w-screen">
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex">
              <p className="text-[#635aff] text-xl font-semibold uppercase leading-normal tracking-widest max-[570px]:text-sm">
                OUR TEAM
              </p>
            </div>
            <div className="flex-col justify-center items-center gap-5 flex max-w-[80%] mx-auto ">
              <h2 className="text-center text-[#0c141d] text-6xl font-semibold leading-[78px] max-w-[696px] max-[570px]:text-3xl w-full">
                Experienced Professionals with Best Service
              </h2>
              <p className=" text-center text-[#667084] text-lg font-semibold leading-[27px] max-[570px]:text-lg">
                Our team consists of experienced professionals and is highly
                committed to providing the best service to our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          {teamData?.map((item) => (
            <div key={item.id} className="card w-[100%] max-w-[100%]">
              <img
                src={`/${item.id}.png`}
                alt="professionals img"
                className=""
              />

              <div className="card-content">
                <h3 className="text-white text-[32px] font-semibold leading-[48px]">
                  {item.name}
                </h3>
                <p className="text-[#98a1b2] text-xl font-semibold leading-[30px] mb-5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;