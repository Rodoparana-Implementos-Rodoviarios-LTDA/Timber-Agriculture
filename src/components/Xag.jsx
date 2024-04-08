import Section from "./Section";
import Heading from "./Heading";
import Button from "./design/Button";
import { service1, service2, service3 } from "../assets";
import { p100proServices, p100proServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Xag = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Sistemas Aéreos Não Tripulados"
          text="Tecnologia de Drones de Ponta para Agricultura"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border  border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>
            <div className="relative z-1 max-w-[20rem] ml-auto">
              <div className="m2-4">
                <h4 className="h4 font-thin">
                  XAG{" "}
                  <span className="italic font-black text-rose-600">
                    P100 Pro{" "}
                  </span>
                </h4>
                <h5>Agricultural Drone</h5>
              </div>
              <p className="h5 mb-[3rem] text-stone-200">Pro em cada Voo</p>
              <ul className="body-2">
                {p100proServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start py-4 border-t border-n-6"
                  >
                    <h5 className="font-bold text-lg">{item.title}</h5>
                    <p className="ml-4 text-sm">{item.desc1}</p>
                  </li>
                ))}
              </ul>
              <Button href="/pricing" white>
                Saiba mais
              </Button>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="mb-0 border border-n-1/10 bg-zinc-700 lg:px-10 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="pt-9 px-4 xl:px-8">
                <div className="">
                  <div className="mb-5">
                    <h4 className="h4 font-thin">
                      XAG{" "}
                      <span className="italic font-black text-rose-600">
                        V50 2023{" "}
                      </span>
                    </h4>
                    <h5>Agricultural Drone</h5>
                  </div>
                  <p className="body-2 mb-[2rem] text-n-1">
                    Dobrável, com capacidade de 20 kg e troca rápida entre
                    sistemas de pulverização e espalhamento. Ideal para
                    agricultura de precisão, possui proteção IPX6K e eficiência
                    em áreas de até 13 hectares.
                  </p>
                  <Button className="mb-6" href="/pricing" white>
                    Saiba mais
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full overflow-hidden h-full pointer-events-none md:h-auto md:w-[39.4rem] rounded-3xl">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  alt="V50 2023"
                />
              </div>
            </div>

            <div className="p-2 border-n-1/10 bg-zinc-700 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-4 px-4 xl:px-8">
                <div className="absolute top-0 right-0 w-full overflow-hidden h-full pointer-events-none md:h-auto md:w-[39.4rem] rounded-3xl">
                  <img
                    src={service3}
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="Scary robot"
                  />
                </div>
                <div className="relative flex flex-col mt-80 pt-7 max-w-[30rem]">
                  <div className="mb-5">
                    <h4 className="h4 font-thin">
                      XAG{" "}
                      <span className="italic font-black text-rose-600">
                        P100{" "}
                      </span>
                    </h4>
                    <h5>Agricultural Drone</h5>
                  </div>
                  <p className="body-2 mb-[2rem] text-n-1">
                    Um avançado sistema separável que integra módulos de
                    espalhamento eficiente e pulverização de precisão. Com
                    capacidade de 280 kg por carga de bateria, atomização
                    centrífuga e sistema de controle inteligente SuperX 4 Pro
                    com IA, este drone representa a próxima geração da
                    agricultura inteligente.
                  </p>
                </div>
                <Button className="mb-6" href="/pricing" white>
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Xag;
