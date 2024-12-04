/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { useState } from "react";
import { Container } from "../ui";
import { Base_URL } from "../../api";
import { useTranslation } from "react-i18next";

interface TravelPicturesProps {
  images: string[],
  title: string
}

const TravelPictures: FC<TravelPicturesProps> = ({ images, title }) => {
  const [show, setShow] = useState(false)

  const { t } = useTranslation()
  return (
    <section className="pb-10 bg-white">
      <Container className="w-full">
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
              <img 
                key={images[0]}
                src={images[0]?.includes('media') ? images[0] : `${Base_URL}/media/${images[0]}`} 
                alt={title} 
                className="w-full h-[400px]"
              />
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-5">
                {
                  images?.slice(1,5).map((item: string) => (
                    images?.indexOf(item) == 4 && images?.length > 5 ? (
                    <div key={item} className="hoveringImage" onClick={() => setShow(!show)}>
                      <img 
                        src={item.includes('media') ? item : `${Base_URL}/media/${item}`} 
                        alt={title} 
                        className={`w-full h-[191px] sm:h-[400px] ${images?.indexOf(item) == 4 && images?.length > 5 ? 'cursor-pointer' : ''}`}
                      />
                      <div className="hoveringContent">
                        <div className="px-7 py-5 hoveringText">
                          {show ? t("less") : t("showphotos")}
                        </div>
                      </div>
                    </div>) : (
                      <img 
                        key={item}
                        src={item.includes('media') ? item : `${Base_URL}/media/${item}`} 
                        alt={title} 
                        className={`w-full h-[191px] sm:h-[400px] ${images?.indexOf(item) == 4 && images?.length > 5 ? 'cursor-pointer' : ''}`}
                      />
                    )))
                  }
              </div>
            </div>
            {
              show && (
                <div className="w-full flex justify-start">
                  <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    {
                      images?.slice(5).map((item: string) => (
                        <img 
                          key={item}
                          src={item.includes('media') ? item : `${Base_URL}/media/${item}`} 
                          alt={title} 
                          className="w-full h-[191px]"
                        />
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>
      </Container>
    </section>
  );
};

export default TravelPictures;
