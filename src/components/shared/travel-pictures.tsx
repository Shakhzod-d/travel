/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";

interface TravelPicturesProps {}

const TravelPictures: FC<TravelPicturesProps> = () => {
  return (
    <section className="pb-10 bg-white">
      <Container className="flex max-h-[400px] gap-4 max-[1200px]:flex-col max-[1200px]:max-h-full max-[1200px]:max-w-[750px]">
        <img src="/travel/1.jpg" alt="" />
        <div className="flex gap-4 flex-col max-[1200px]:items-center flex-wrap">
          <div className="flex gap-4 flex-wrap *:flex-1">
            <img src="/travel/2.jpg" alt="" />
            <img src="/travel/3.jpg" alt="" />
          </div>
          <div className="flex gap-4 flex-wrap *:flex-1">
            <img src="/travel/4.jpg" alt="" />
            <img src="/travel/5.jpg" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelPictures;
