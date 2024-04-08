import { collage, check } from "../assets";
import { collabContent, collabText } from "../constants";
import Button from "./design/Button";
import Section from "./Section";

const Fields = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <h2 className="h2 mb-4 md:mb-8">
            <span className="font-thin text-lime-400">PIX4D</span><span className="font-bold text-lime-400">fields</span> para mapeamento agrícola e análise aérea avançada
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

          <Button href="/pricing" green> saiba mais </Button>
        </div>

        <div className="lg:ml-auto xl:w-[50rem] mt-4">
          <p className="body-2 mb-2 text-lime-200 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <img src={collage} alt="" className="w-[80rem] -ml-[5rem]" />
        </div>
      </div>
    </Section>
  );
};

export default Fields;
