import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import FormularioLead from './FormularioLead';


const OrcamentoDialog = ({ isOpen, onClose, produtoSelecionado }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden z-50" onClose={onClose}>
        <div className="absolute inset-0 overflow-hidden bg-black bg-opacity-50"></div>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="absolute inset-y-0 right-0 max-w-lg w-full bg-zinc-900 overflow-auto shadow-xl">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="block text-lg font-medium leading-6 text-gray-100">Solicitar Orçamento</h3>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={onClose}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-4">
                <FormularioLead produto={produtoSelecionado} />
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default OrcamentoDialog;
