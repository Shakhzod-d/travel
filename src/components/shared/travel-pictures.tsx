/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";
import { Base_URL } from "../../api";

interface TravelPicturesProps {
  images: string[],
  title: string
}

const TravelPictures: FC<TravelPicturesProps> = ({ images, title }) => {
  return (
    <section className="pb-10 bg-white">
      <Container className="w-full">
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-5">
              {
                images?.map((item: string) => (
                  <img 
                    key={item}
                    src={item.includes('media') ? item : `${Base_URL}/media/${item}`} 
                    alt={title} 
                    className="w-[394px] h-[261px]"
                  />
                ))
              }
            </div>
          </div>
      </Container>
    </section>
  );
};

export default TravelPictures;
