import React from "react";
import Container from "../Hooks/Container";
import FadeIn from "../Motion/FadeIn";
import bgImg from "../../assets/Image/Rectangle 10.png";
import {
  serviceButton,
  serviceDescription,
  serviceSubTitle,
  servicesItem,
} from "../../../public/allData";

const Services = () => {
  return (
    <div className="bg-blackClr pt-[100px] pb-[50px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-[100px]">
          <div className="md:w-1/2 w-full">
            <FadeIn delay={0.3} direction="right">
              <h3 className="text-[21px] tracking-widest  text-primaryClr mb-3">
                {serviceSubTitle}
              </h3>{" "}
            </FadeIn>
            <FadeIn delay={0.4} direction="right">
              <h2 className="text-[30px] md:text-[48px] text-whiteClr lg:text-[48px] font-bold  leading-[35px] md:leading-[40px] lg:leading-[50px] ">
                Experience the power of{" "}
                <span className="text-primaryClr">Creative</span> innovation.
              </h2>
            </FadeIn>
            <FadeIn delay={0.5} direction="right">
              {" "}
              <div className="border-2 rounded lg:my-8 my-6 border-whiteClr w-[180px]"></div>{" "}
            </FadeIn>
            <FadeIn delay={0.6} direction="right">
              <p className="text-[21px] text-whiteClr tracking-wide mt-2 font-light ">
                {serviceDescription}
              </p>
            </FadeIn>
            <FadeIn delay={0.7} direction="right">
              <button className="border-[3px] border-primaryClr rounded-sm py-3 px-5 mt-6 text-whiteClr">
                {serviceButton}
              </button>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-[40px]">
              {servicesItem?.map((service, index) => (
                <FadeIn key={index} delay={(index + 1) * 0.2} direction="up">
                  <div
                    style={{ backgroundImage: `url(${bgImg})` }}
                    className="mx-auto text-center "
                  >
                    <img
                      className="mx-auto text-center"
                      src={service.icon}
                      alt=""
                    />
                    <h2 className="text-[17px] md:text-[21px] pt-2  text-primaryClr tracking-wide">
                      {service.name}
                    </h2>
                    <p className="text-[17px] text-whiteClr tracking-wide mt-1 font-light">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
