"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const Link = dynamic(() => import("next/link"), { ssr: false });

const Path = (props: React.ComponentProps<typeof motion.path>) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => (
  <button onClick={toggle} className="focus:outline-none">
    <motion.svg
      initial={false}
      animate={isOpen ? "open" : "closed"}
      whileHover={{ scale: 1.1 }}
      viewBox="0 0 23 23"
      width="30"
      height="30"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#003D7C" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#003D7C" },
        }}
      />
      <Path
        variants={{
          closed: { opacity: 1, d: "M 2 9.423 L 20 9.423", stroke: "#003D7C" },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "#003D7C" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#003D7C" },
        }}
      />
    </motion.svg>
  </button>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const textColor = "text-black";

  const hoverMotion = {
    whileHover: { x: 5, color: "#FFA500" },
    transition: { type: "tween", duration: 0.2 },
  };

  return (
    <>
      <nav className="font-sansbold top-0 left-0 w-full z-50 bg-transparent transition-all relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <Link href="/" className={`${textColor} text-2xl font-bold`}>
            Logo
          </Link>

          <div className="hidden md:flex gap-8">
            {["Home", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                style={{ color: "#000000" }}
                whileHover={hoverMotion.whileHover}
                transition={hoverMotion.transition}
              >
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "#111111", color: "#fafafa" }}
          >
            <div className="flex h-full items-center justify-center px-6">
              <div className="w-full md:max-w-[80%] flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-4 md:gap-6">
                  {[
                    "Home",
                    "About",
                    "Campus Life",
                    "Resources",
                    "Freshman",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      className="relative h-[2rem] md:h-[3.5rem]"
                      style={{
                        color: item === "Home" ? "#EF7B00" : "#fafafa",
                        display: "flex",
                        alignItems: "stretch",
                        flexShrink: 0,
                        width: "auto",
                      }}
                      whileHover={{ x: 40, color: "#EF7B00" }}
                      transition={{ type: "tween", duration: 0.2 }}
                      onClick={toggleMenu}
                    >
                      <motion.a
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="
                            absolute inset-0 w-full h-full
                            flex items-center justify-start
                            text-4xl sm:text-5xl md:text-[3.5rem]
                            text-inherit no-underline whitespace-nowrap
                          "
                      >
                        {item}
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="
                    mt-10 md:mt-16 md:ml-10
                    text-xl sm:text-2xl md:text-[22px]
                  "
                >
                  <div className="flex flex-col justify-center md:justify-start h-full md:h-auto mt-0 md:mt-10">
                    <span className="space-y-2 lg:ml-8 text-base sm:text-lg md:text-xl sm:mt-6">
                      <p>S6 Level 5 Science</p>
                      <p>Drive 2 Singapore</p>
                      <p>117548</p>
                    </span>

                    <div className="mt-20">
                      <div className="mb-4">
                        <a
                          href="mailto:nussu@u.nus.edu"
                          className="
                            relative inline-block
                            pb-1
                            after:content-['']
                            after:absolute
                            after:left-0
                            after:bottom-[-2px]
                            after:w-full
                            after:h-[1px]
                            after:bg-current
                            after:scale-x-100
                            after:origin-left
                            after:transition-transform
                            after:duration-300
                            hover:after:scale-x-0
                          "
                        >
                          nussu@u.nus.edu
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:feedback@nussu.org.sg"
                          className="
                            relative inline-block
                            pb-1
                            after:content-['']
                            after:absolute
                            after:left-0
                            after:bottom-[-2px]
                            after:w-full
                            after:h-[1px]
                            after:bg-current
                            after:scale-x-100
                            after:origin-left
                            after:transition-transform
                            after:duration-300
                            hover:after:scale-x-0
                          "
                        >
                          feedback@nussu.org.sg
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
