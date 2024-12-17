import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Loading } from "../components/ui";
import { CountryList, Pagination } from "../components/shared";
import { useFetchData, Tabtitle } from "../hooks";
import { useQuery } from "react-query";
import { CategoryType, CountriesType } from "../types";
import { RootState } from "../store/store";
import {
  changeCountry,
  handleCategory,
  handleType,
  handleClas
} from "../store/main-slice";
import { useTranslation } from "react-i18next";
import HeaderAbout from "../components/shared/header-about";
import ContactSection from "../components/shared/contact-section";

const Tours = () => {
  const { t } = useTranslation();
  Tabtitle(t("tours"));
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.main);
  const { category, district, clas, type } = state;
  const { fetchdata: fetchCategories } = useFetchData("api/tour/v1/categories");
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["getCategories"],
    queryFn: fetchCategories
  });

  const { fetchdata } = useFetchData("/api/main/v1/countries");
  const { data: countriesData } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchdata
  });

  const { fetchdata: fetchdata2 } = useFetchData("/api/main/v1/distiricts");
  const { data: data2, isLoading: isLoading2 } = useQuery({
    queryKey: ["distiricts"],
    queryFn: fetchdata2
  });

  let uniqueCategory = [
    t("all"),
    ...new Set(categoriesData?.map((item: CategoryType) => item.title)),
  ];

  //default category
  useEffect(() => {
    if (category == "") {
      dispatch(handleCategory(t("all")));
    }
  }, [categoriesData]);

  //default type
  useEffect(() => {
    if (type == "") {
      dispatch(handleType(t("all")));
    }
  }, [type]);

  //default clas
  useEffect(() => {
    if (clas == "") {
      dispatch(handleClas(t("all")));
    }
  }, [clas]);


  //default country
  useEffect(() => {
    if (countriesData?.length > 0) {
      dispatch(changeCountry(t("all")));
    }
  }, [countriesData]);

  //changing country
  useEffect(() => {
    if (data2) {
      let active = data2?.find((item: CountriesType) => item.title == district);
      if (active) {
        dispatch(changeCountry(active.country.title));
      }
    }
  }, [data2]);

  if (isLoading2) {
    return <Loading />;
  }

  return (
    <div>
      <HeaderAbout
        className="bg-[url('/Tour.png')] relative pb-[100px] bg-center bg-cover bg-no-repeat mb-20"
        route={"tours"}
        title={t("populartours")}
        desc={t("provide")}
      />
      <Container>
        <div className="flex flex-col items-center">
          <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex mb-4 w-max">
            <p className="text-[#635aff] text-[20px] font-[600] uppercase leading-[18px] tracking-[2px] sm:text-sm">
              {t("besttours")}
            </p>
          </div>
          <h2 className="chaptertitle">{t("provide")}</h2>
          <h3 className="h3 font-[500] text-[24px] leading-[32.78px] text-center mt-5 px-7 sm:px-0 text-[#666666]">
            {t("summerdef")}
          </h3>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 sm:gap-1 mt-7 sm:mt-4 text-[#202430]">
          <select
            name="clas"
            id="clas"
            value={clas}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              dispatch(handleClas(e.target.value));
            }}
            className="capitalize w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold sm:mb-5"
          >
            <option value={t("all")}>{t("all")}</option>
            <option value={t("budget")}>{t("budget")}</option>
            <option value={t("standard")}>{t("standard")}</option>
            <option value={t("luxury")}>{t("luxury")}</option>
          </select>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{
              dispatch(handleType(e.target.value));
            }}
            className="capitalize w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold sm:mb-5"
          >
            <option value={t("all")}>{t("all")}</option>
            <option value={t("individual")}>{t("individual")}</option>
            <option value={t("group2")}>{t("group2")}</option>
            <option value={t("daily")}>{t("daily")}</option>
          </select>
          {categoriesLoading ? (
            <Loading />
          ) : categoriesError instanceof Error ? (
            <p className="text-red-500 text-xl">
              Error: {categoriesError.message}
            </p>
          ) : (
            categoriesData && (
              <select
                name="categoryOptions"
                id="category"
                value={category}
                onChange={(e) => dispatch(handleCategory(e.target.value))}
                className="w-full rounded-lg px-2 py-4 outline-none bg-[#F5F5F5] font-semibold sm:mb-5"
              >
                {uniqueCategory?.map((item: any) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )
          )}
        </div>
        <div className="my-11 sm:my-5">
          <CountryList />
        </div>
        <div className="pb-[50px] sm:pb-5 mt-6">
          <Pagination/>
        </div>
      </Container>
      <ContactSection />
    </div>
  );
};

export default Tours;
