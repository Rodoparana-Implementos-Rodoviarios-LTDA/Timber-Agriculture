import EstadoDropdown from "./EstadoDropdown";
import { useState } from 'react';

const FormularioLead = () => {
  const [selectedEstado, setSelectedEstado] = useState("");

  const handleEstadoChange = (estado) => {
    setSelectedEstado(estado);
  };

  return (
    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D4T000000Fw59" method="POST">
      <input type="hidden" name="oid" value="00D4T000000Fw59"/>
      <input type="hidden" name="estado" value={selectedEstado} /> {/* Campo oculto para o estado selecionado */}
      <input type="hidden" name="retURL" value="http://agriculture.grupotimber.com.br"/>
      <input type="hidden" name="lead_source" id="lead_source" value="Timber Agriculture"/>
      <label htmlFor="last_name">Nome Completo: <span className="text-red-500">*</span></label>
      <input
        id="last_name"
        name="last_name"
        type="text"
        className="relative w-full cursor-default rounded-md bg-zinc-900 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-900 sm:text-sm sm:leading-6 mt-2 mb-5"
      />
      <br />

      <label htmlFor="company">Empresa: </label>
      <input
        id="company"
        name="company"
        type="text"
        className="relative w-full cursor-default rounded-md bg-zinc-900 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-900 sm:text-sm sm:leading-6 mt-2 mb-5"
      />
      <br />

      <label htmlFor="email" >Email: <span className="text-red-500">*</span></label>
      <input
        id="email"
        name="email"
        type="text"
        className="relative w-full cursor-default rounded-md bg-zinc-900 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-900 sm:text-sm sm:leading-6 mt-2 mb-5"
      />
      <br />
      <label htmlFor="00N4T00000700nV">CEP: <span className="text-red-500">*</span></label>
      <input
        id="00N4T00000700nV"
        name="00N4T00000700nV"
        type="text"
        className="relative w-full cursor-default rounded-md bg-zinc-900 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-900 sm:text-sm sm:leading-6 mt-2 mb-5"
      />
      <div className="flex flex-col">
        <EstadoDropdown onChange={handleEstadoChange} /> {/* Passando a função de callback para capturar o estado selecionado */}
      </div>

      <input 
        type="submit" 
        name="submit"
        className="bg-rose-800 hover:bg-rose-700 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 mt-5"
      />
    </form>
  );
};

export default FormularioLead;
