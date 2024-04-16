import { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./design/Button";
import OrcamentoDialog from "./OrcamentoDialog";

const PricingList = () => {
  const [dialogOpen, setDialogOpen] = useState(false); // Estado para controlar a abertura do diálogo
  const [produtoSelecionado, setProdutoSelecionado] = useState(""); // Estado para armazenar o produto selecionado

  return (
    <div className="flex gap-[1rem] ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-lime-500 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-lime-500"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 ">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">R$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
                <div className="h3">,00</div>
              </>
            )}
          </div>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-lime-700"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
          <Button
            white
            onClick={() => {
              setProdutoSelecionado("PIX4D");
              setDialogOpen(true);
            }}
          >
            Orçamento
          </Button>
        </div>
      ))}
      <OrcamentoDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default PricingList;
