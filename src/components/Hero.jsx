import { curve, dronewpp } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import { companyLogos } from "../constants";

const Hero = (className) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Revolucione a Agricultura com{" "}
            <span className="text-red-700">Drones</span> e Mapeamento {` `}
            <span className="inline-block relative">
              Topográfico{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Potencialize sua agricultura com tecnologia avançada de pulverização
            por drones e mapeamento topográfico de precisão.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-9 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={dronewpp}
                  className="w-full -translate-y-[5%]  md:-translate-y-[0%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Status da bateria: 80%"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <div className="hidden relative z-10 mt-20 lg:block">
        <h5 className="tagline m-5 text-center text-n-1/50">
          Ajudando pessoas a encontrarem soluções agrícolas em
        </h5>
        <div className="">
          <ul className="flex">
            {companyLogos.map((logo, index) => (
              <li
                className="flex items-center justify-center flex-1 max-h-[8.5rem]"
                key={index}
              >
                <img src={logo} width={134} height={18} alt={logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
