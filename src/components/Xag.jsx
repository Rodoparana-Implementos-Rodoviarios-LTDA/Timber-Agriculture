import { useState } from 'react';
import OrcamentoDialog from './OrcamentoDialog';
import Section from "./Section";
import Heading from "./Heading";
import Button from "./design/Button";
import { service1, service2 } from "../assets";
import { v50Services, p100proServices } from "../constants";
import { Gradient } from "./design/Services";

const Xag = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(""); // Estado para armazenar o produto selecionado

  const handleProdutoSelecionado = (produto) => {
    setProdutoSelecionado(produto);
  };
  return (
    <Section id="xag">
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
                alt="P100 PRO"
                height={730}
                src={service1}
              />
            </div>
            <div className="relative z-1 max-w-[20rem] ml-auto backdrop-blur-xl bg-black/40 shadow-lg md:shadow-none rounded-3xl p-5 md:bg-transparent">
              <div className="">
                <h4 className="h4 font-thin">
                  XAG{" "}
                  <span className="italic font-black text-rose-300 md:text-rose-700">
                    P100 Pro{" "}
                  </span>
                </h4>
                <h5 className="text-lg mb-4 md:mb-10">Agricultural Drone</h5>
              </div>
              <p className="mb-[1rem] text-white">
                A partir de{" "}
                <span className="text-rose-300 md:text-rose-700 font-black">
                  R$180.000,00
                </span>
              </p>
              <ul className="body-2">
                {p100proServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start py-4 border-t border-n-6"
                  >
                    <h5 className="text-sm md:font-bold md:text-lg">
                      {item.title}
                    </h5>
                  </li>
                ))}
                 <Button white onClick={() => { setProdutoSelecionado("P100 Pro"); setDialogOpen(true); }}>Orçamento</Button>
              </ul>
            </div>
          </div>

          <Gradient />
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative z-1 left-0 max-w-[30rem] backdrop-blur-xl bg-black/40 shadow-2xl rounded-3xl p-5">
              <div className="">
                <h4 className="h4 font-thin">
                  XAG{" "}
                  <span className="italic font-black text-rose-300">
                    V50 2023{" "}
                  </span>
                </h4>
                <h5 className="text-lg mb-4 md:mb-10">Agricultural Drone</h5>
              </div>
              <p className="mb-[1rem] text-white">
                A partir de{" "}
                <span className="text-rose-300 md:text-rose-300 font-black">
                  R$145.000,00
                </span>
              </p>
              <ul className="body-2">
                {v50Services.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start py-4 border-t border-rose-300"
                  >
                    <h5 className="text-sm md:font-bold md:text-lg">
                      {item.title}
                    </h5>
                  </li>
                ))}
                <Button white onClick={() => { setProdutoSelecionado("V50"); setDialogOpen(true); }}>Orçamento</Button>
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-left"
                width={500}
                alt="P100 PRO"
                height={730}
                src={service2}
              />
            </div>
          </div>
        </div>
        <OrcamentoDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} produtoSelecionado={produtoSelecionado} />
      </div>
    </Section>
  );
};

export default Xag;
