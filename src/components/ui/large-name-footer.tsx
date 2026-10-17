"use client";
import Link from "next/link";

import { Icons } from "./icons";
import { Button } from "./button";

function Footer() {
  return (
    <footer className="pt-24 pb-12 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="w-full flex mb-16 items-center justify-center overflow-hidden">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] select-none py-4">
            *.giannicarducci
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8" />
              <h2 className="text-lg font-bold">Gianni Carducci</h2>
            </Link>

            <h1 className="dark:text-gray-300 mt-4">
              Built by{" "}
              <span className="dark:text-[#039ee4]">
                <Link href="https://x.com/giannicarducci">@giannicarducci</Link>
              </span>
            </h1>
            <div className="mt-2">
              <Link href="https://x.com/giannicarducci">
                <Button variant="secondary">
                  <Icons.twitter className="icon-class w-3.5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Gianni Carducci. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#resume" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/giannicarducci" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/giannicarducci" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/giannicarducci" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/gianninocarducci" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/@giannicarducci" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:info@giannicarducci.com" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer }; 