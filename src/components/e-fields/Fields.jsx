
import Button from "../z-design/Button";
import Section from "../z-design/Section";
import Pricing from "../z-design/Pricing";

import { collage, check } from "../../assets";
import { collabContent, roadmap, collabText } from "../../constants";

const Fields = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <h2 className="h2 mb-4 md:mb-8">
            <span className="font-thin text-lime-400">PIX4D</span>
            <span className="font-bold text-lime-400">fields</span> para
            mapeamento agrícola e análise aérea avançada
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.desc && (
                  <p className="body-2 mt-3 text-lime-300">{item.desc}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[50rem] mt-4">
          <p className="body-2 mb-2 text-lime-200 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <img src={collage} alt="" className="w-[80rem] -ml-[5rem]" />
        </div>
      </div>
      <div className="container md:pb-10">
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            return (
              <div
                className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-lime-800"
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full h-[30rem]"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-lime-200">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Pricing />
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Entrar em Contato</Button>
        </div>
      </div>
    </Section>
  );
};

export default Fields;
