/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { FC } from "react";
import { Container } from "../ui";
import { Base_URL } from "../../api";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ImagesType, IncludesType } from "../../types";
import { useSanitize } from "../../hooks";
import {
  changePicturesModal,
  handleGallery,
  changeActiveThumb,
  handleModalType,
  handleGalleryType,
  handleIncludedActive,
} from "../../store/main-slice";
import { v4 as uuidv4 } from "uuid";
import React from "react";

interface TravelHotelsProps {
  includes: IncludesType[] | [];
}

const TravelHotels: FC<TravelHotelsProps> = ({ includes }) => {
  const { sanitize } = useSanitize();
  const dispatch = useDispatch();
  const handlePictures = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(changePicturesModal());
    dispatch(handleModalType(e.currentTarget.id));
  };
  const handlePicturesGallery = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(changeActiveThumb(Number(e.currentTarget.id)));
    dispatch(handleGallery());
    dispatch(handleGalleryType(e.currentTarget.id));
    dispatch(handleModalType(e.currentTarget.id));
    dispatch(handleIncludedActive(e.currentTarget.alt));
  };
  const { t } = useTranslation();


  if (includes?.length == 0) return null;

  return (
    <section className="bg-white p-6 sm:p-2 mb-11">
      <Container className="w-full p-0">
        <div className="w-full">
          <h3 className="text-[20px] font-[700] text-[#112211]">
            {t("included")}
          </h3>
          <div>
            {includes?.map((item: IncludesType, i: number) => (
              <div
                key={uuidv4()}
                className={`${i == 0 ? "mt-3" : "mt-5"} ${
                  i == includes?.length - 1 ? "mb-0" : "mb-8"
                }`}
              >
                <div className="inline text-[16px] font-[800] text-[#112211] mb-3">
                  <h4 className=" capitalize inline">{item.include.title}</h4>
                </div>
                <div className="my-3">
                  <h4 className="text-[#4F4F4F] text-[16px] font-[400]">
                    {sanitize(item.include.context)}
                  </h4>
                </div>
                <div className="grid grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-5">
                  {item.include.images
                    ?.slice(0, 3)
                    .map((img: ImagesType, index: number) =>
                      item.include.images?.indexOf(img) == 2 &&
                      item.include.images?.length > 3 ? (
                        <div key={uuidv4()} className="hoveringImage">
                          <img
                            id={item.id.toString()}
                            src={
                              img.image.includes("media")
                                ? img.image
                                : `${Base_URL}/media/${img.image}`
                            }
                            alt={index.toString()}
                            className={`w-full h-[191px] cursor-pointer xl:h-[400px] ${
                              item.include.images?.indexOf(img) == 2 &&
                              item.include.images?.length > 3
                                ? "cursor-pointer"
                                : ""
                            }`}
                            onClick={handlePictures}
                          />
                          <div className="hoveringContent pointer-events-none">
                            <div className="px-7 py-5 hoveringText">
                              {t("showphotos")}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          id={item.id.toString()}
                          key={uuidv4()}
                          src={
                            img.image.includes("media")
                              ? img.image
                              : `${Base_URL}/media/${img.image}`
                          }
                          alt={index.toString()}
                          className={`w-full h-[191px] xl:h-[400px] cursor-pointer ${
                            item.include.images?.indexOf(img) == 2 &&
                            item.include.images?.length > 3
                              ? "cursor-pointer"
                              : ""
                          }`}
                          onClick={handlePicturesGallery}
                        />
                      )
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelHotels;
