/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";

interface TravelPicturesProps {}

const TravelPictures: FC<TravelPicturesProps> = () => {
  return (
    <section className="pb-10 bg-white">
      <Container className="flex xl:flex-col justify-between xl:items-center w-full">
          <img src="/travel/1.jpg" alt="" />
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 xl:mt-3">
          <img src="/travel/2.jpg" alt="" />
          <img src="/travel/4.jpg" alt="" />
          <img src="/travel/3.jpg" alt="" />
          <img src="/travel/5.jpg" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default TravelPictures;
