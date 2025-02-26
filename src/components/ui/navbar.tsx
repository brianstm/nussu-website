"use client";

import { useState, useEffect } from "react";
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
      width="23"
      height="23"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#0000FF" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#0000FF" },
        }}
      />
      <Path
        variants={{
          closed: { opacity: 1, d: "M 2 9.423 L 20 9.423", stroke: "#0000FF" },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "#0000FF" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#0000FF" },
        }}
      />
    </motion.svg>
  </button>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-[#fafafa]" : "text-black";

  const hoverMotion = {
    whileHover: { x: 5, color: "#FFA500" },
    transition: { type: "tween", duration: 0.2 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <Link href="/" className={`${textColor} text-2xl font-bold`}>
            Logo
          </Link>

          <div className="hidden md:flex gap-8">
            {["Home", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                style={{ color: scrolled ? "#fafafa" : "#000000" }}
                whileHover={hoverMotion.whileHover}
                transition={hoverMotion.transition}
              >
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
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
              <div className="w-full md:max-w-[55%] flex flex-col md:flex-row justify-between">
                {/* LEFT COLUMN (Menu items) */}
                <div className="flex flex-col md:gap-6">
                  {[
                    "Home",
                    "About",
                    "Campus Life",
                    "Resources",
                    "Freshman",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      className="relative"
                      style={{
                        color: item === "Home" ? "#EF7B00" : "#fafafa",
                        height: "3.5rem",
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
                        className="absolute inset-0 w-full h-full flex items-center justify-start text-3xl sm:text-4xl md:text-[3.5rem] text-inherit no-underline whitespace-nowrap"
                      >
                        {item}
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                {/* RIGHT COLUMN (Address & emails) */}
                <div
                  className="mt-10 md:mt-16 md:ml-10 text-base md:text-lg"
                  style={{ fontSize: "22px" }}
                >
                  <div className="flex flex-col justify-center md:justify-start h-full md:h-auto mt-0 md:mt-10">
                    <span className="space-y-2 lg:ml-8">
                      <p>S6 Level 5 Science</p>
                      <p>Drive 2 Singapore</p>
                      <p>117548</p>
                    </span>

                    {/* Increase spacing between address and emails */}
                    <div className="mt-20">
                      {/* Email 1 */}
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

                      {/* Email 2 */}
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
