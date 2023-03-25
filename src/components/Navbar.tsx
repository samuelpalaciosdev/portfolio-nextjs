import { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  type Link = {
    label: string;
    path: string;
  };

  const links: Link[] = [
    {
      label: "About",
      path: "about",
    },
    {
      label: "Project",
      path: "projects",
    },
    {
      label: "Contact",
      path: "contact",
    },
  ];

  //*  Handles active link on navbar
  const [activeLink, setActiveLink] = useState("/");

  const handleSetActiveLink = (path: string) => {
    setActiveLink(path);
  };

  //* Handles mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  //* Add overflow hidden to body when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <Disclosure as="nav" className="bg-gray-900">
        {({ open }) => (
          <>
            <div className="nav-container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <Disclosure.Button
                      as={Link}
                      href="/"
                      onClick={() => {
                        handleSetActiveLink("/");
                        setIsOpen(false);
                      }}
                      className="block text-2xl font-semibold tracking-tight text-white"
                      disabled={!isOpen}
                    >
                      samuelpalacios<span className="text-cyan-400">dev</span>
                    </Disclosure.Button>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {links.map(({ label, path }) => (
                        <Link
                          key={label}
                          href={`#${path}`}
                          onClick={() => handleSetActiveLink(path)}
                          className={
                            activeLink === path
                              ? "rounded-md px-3 py-2 text-base font-semibold text-white  transition-colors duration-300 ease-in-out"
                              : "rounded-md px-3 py-2 text-base font-semibold text-gray-400 transition-colors duration-200 ease-in-out hover:text-white hover:transition hover:duration-200 hover:ease-in-out"
                          }
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="-mr-2 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-7 w-7"
                          aria-hidden="true"
                          onClick={() => setIsOpen(!isOpen)}
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-7 w-7"
                          aria-hidden="true"
                          onClick={() => setIsOpen(!isOpen)}
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="disclosure-panel__wrapper px-6">
              <Transition
                show={open}
                enter="transition ease-in-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Disclosure.Panel className="min-h-screen sm:hidden">
                  <div className="space-y-1 pt-2 pb-3">
                    {links.map(({ label, path }) => (
                      <Disclosure.Button
                        key={label}
                        as={Link}
                        href={`#${path}`}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-md py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
                      >
                        {label}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
