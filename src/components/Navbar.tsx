import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
  // function classNames(...classes: string[]) {
  //   return classes.filter(Boolean).join(" ");
  // }

  const [activeLink, setActiveLink] = useState("/");

  const handleSetActiveLink = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <Disclosure as="nav" className="bg-gray-900">
        {({ open }) => (
          <>
            <div className="nav-container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <Link
                      href="/"
                      onClick={() => handleSetActiveLink("/")}
                      className="block text-2xl font-semibold tracking-tight text-white"
                    >
                      samuelpalacios<span className="text-teal-300">dev</span>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {links.map(({ label, path }) => (
                        <Link
                          key={label}
                          href={`#${path}`}
                          // prefetch={false}
                          onClick={() => handleSetActiveLink(path)}
                          className={
                            activeLink === path
                              ? "rounded-md bg-gray-900 px-3 py-2 text-base font-semibold text-white"
                              : "rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-white"
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
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="disclosure-panel__wrapper px-6">
              <Disclosure.Panel className="bg-blue-500 sm:hidden">
                <div className="space-y-1 px-3 pt-2 pb-3">
                  {links.map(({ label, path }) => (
                    <Disclosure.Button
                      key={label}
                      as={Link}
                      href={`#${path}`}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
                    >
                      {label}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
