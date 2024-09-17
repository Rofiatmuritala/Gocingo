"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Get Involve", href: "/getInvolve", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-lg mt-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start font-signature text-xl md:text-5xl pb-4 text-green-500">
                <Link href="/">
                  <div className="flex flex-shrink-0 items-center">Gocingo</div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center justify-between">
                    <Link
                      href="/"
                      className="text-black leading-6 px-3 pt-4 text-sm font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-black leading-6 px-3 pt-4 text-sm font-semibold"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/projects"
                      className="text-black leading-6 px-3 pt-4 text-sm font-semibold"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/getInvolve"
                      className="text-black leading-6 px-3 pt-4 text-sm font-semibold"
                    >
                      Get Involve
                    </Link>
                    <Link
                      href="/contact"
                      className="text-black leading-6 px-3 pt-4 text-sm font-semibold"
                    >
                      Contact
                    </Link>

                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                  </div>
                </div>
              </div>
              <div className=" lg:justify-end absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/donate">
                  <button className="animate-bounce focus:animate-none hover:animate-none w-full text-left block px-4 py-2 text-base rounded-full bg-black font-medium text-white hover:text-gray-800 hover:bg-green-600">
                    Donate Now
                  </button>
                </Link>
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
