import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Example() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    open();
  };

  const navigation = [
    { name: "About us", href: "#", current: true },
    { name: "Signup", href: "#", current: false, onClick: openModal },
  ];

  return (
    <Disclosure
      as="nav"
      className={classNames(
        isScrolled ? "bg-white shadow-md z-20" : "lg:bg-transparent bg-white",
        "fixed w-full z-10 transition-colors duration-300 ease-in-out"
      )}
    >
      {({ open: disclosureOpen }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  as="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {disclosureOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center gap-4">
                  <img
                    className="h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  />
                  <h1
                    className={`font-quicksand font-bold text-3xl ${
                      isScrolled ? "text-gray-900" : "lg:text-white"
                    }`}
                  >
                    FarmHand
                  </h1>
                </div>
              </div>
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                <div className="flex items-center gap-12">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-8 font-quicksand">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-md font-medium font-quicksand",
                            isScrolled
                              ? "text-gray-900 hover:bg-gray-100 font-quicksand"
                              : "text-gray-300"
                          )}
                          onClick={item.onClick}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Example;
