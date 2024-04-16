import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { estadosBrasileiros } from "../constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const EstadoDropdown = ({ onChange }) => {
  const [selected, setSelected] = useState(estadosBrasileiros[0]);

  const handleSelect = (state) => {
    setSelected(state);
    onChange(state);
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => (
        <>
          <Listbox.Label className="text-gray-100 ">Estado:<span className="text-red-500"> *</span></Listbox.Label>
          <div className="relative mt-2 mb-5">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-zinc-900 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-900 sm:text-sm sm:leading-6 mt-2 mb-5">
              <span className="flex items-center">
                <span className="ml-3 block truncate text-base">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-zinc-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 max-h-56 w-full overflow-auto rounded-md bg-zinc-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {estadosBrasileiros.map((state) => (
                  <Listbox.Option
                    key={state.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-rose-700 text-white' : 'text-white',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={state}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {state.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-rose-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default EstadoDropdown;
