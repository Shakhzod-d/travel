import HeaderAbout from "../components/shared/header-about"
import ContactSection from "../components/shared/contact-section";
import { Container } from "../components/ui";
import { CountryList, Pagination } from "../components/shared";
const Tours = () => {
    return (
        <div>
            <HeaderAbout
                className="bg-[url('/Tour.png')] pb-[100px] bg-center bg-cover bg-no-repeat mb-20"
                route={"tours"}
                title={"Tours"}
                desc={"Provide the best travel experience for you!"}
            />
            <Container>
                <div className="flex flex-col items-center">
                    <div className="px-5 py-2.5 bg-[#eaecf9] rounded justify-start items-center gap-2.5 inline-flex mb-4 max-w-[183px] w-[max-content]">
                        <p className="text-[#635aff] text-xl font-semibold uppercase leading-normal tracking-widest sm:text-sm">
                            best tours
                        </p>
                    </div>
                    <h2 className="h2">Provide the best travel experience for you</h2>
                    <h3 className="h3 font-normal text-center mt-5 px-7 sm:px-0 text-[#666666]">Discover the heart of Asia as you explore the historical, cultural, and scenic highlights of Uzbekistan, Kyrgyzstan, Kazakhstan, Tajikistan, and Turkmenistan in the company of other travellers from all over the world</h3>
                </div>
                <div className="my-11 sm:my-5">
                    <CountryList/>
                </div>
                <div className="pb-[50px] sm:pb-5">
                    <Pagination/>
                </div>
            </Container>
            <ContactSection/>
        </div>
    )
}

export default Tours