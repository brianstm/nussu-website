"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggle}
      className="focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        initial={false}
        animate={isOpen ? "open" : isHovered ? "hover" : "closed"}
        viewBox="0 0 42 30"
        width="40"
        height="30"
      >
        <motion.path
          strokeWidth="2.5"
          stroke="#003D7C"
          fill="transparent"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 6 3 L 40 3" },
            hover: { d: "M 16 3 L 40 3" },
            open: { d: "M 10 2 L 30.5 22.5" },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="2.5"
          stroke="#003D7C"
          fill="transparent"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 21 13 L 40 13" },
            hover: { d: "M 6 13 L 40 13" },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          strokeWidth="2.5"
          stroke="#003D7C"
          fill="transparent"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 14 23 L 40 23" },
            hover: { d: "M 22 23 L 40 23" },
            open: { d: "M 10 22.5 L 30.5 2" },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>
    </button>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="font-sansbold top-0 left-0 w-full z-50 bg-transparent transition-all relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
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
              {/* Keep the desktop layout exactly the same, just fix mobile layout */}
              <div className="w-full md:max-w-[60%] flex flex-col md:flex-row md:items-end justify-between">
                {/* Left Column: Navigation Links - Fixed for mobile */}
                <div className="flex flex-col gap-4 md:gap-6 w-full">
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
                        width: "auto", // Ensure width is responsive
                      }}
                      whileHover={{ x: 40, color: "#EF7B00" }}
                      transition={{ type: "tween", duration: 0.2 }}
                      onClick={toggleMenu}
                    >
                      <motion.a
                        href={
                          item === "Home"
                            ? "/"
                            : `/${item.toLowerCase().replace(" ", "-")}`
                        }
                        className="absolute inset-0 w-full h-full flex items-center justify-start text-4xl sm:text-5xl md:text-[3.5rem] text-inherit no-underline whitespace-nowrap"
                      >
                        {item}
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile-only feedback form */}
                <div className="md:hidden mt-6 mb-4">
                  <div>
                    <a
                      href="https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gv-6M0KLgbFDmfGuMFrpl9lUMkxOWFk5NlQyN0syWk85MjBDVjVYVDVLVS4u"
                      className="relative inline-block pb-[0.1rem] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-current after:scale-x-100 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-0"
                    >
                      Feedback Form
                    </a>
                  </div>
                </div>

                {/* Center Column: Feedback Form - Keeping original desktop layout */}
                <div className="hidden md:flex items-center justify-center mt-4 md:mt-0 ml-60">
                  <div>
                    <a
                      href="https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gv-6M0KLgbFDmfGuMFrpl9lUMkxOWFk5NlQyN0syWk85MjBDVjVYVDVLVS4u"
                      className="relative inline-block pb-[0.1rem] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-current after:scale-x-100 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-0"
                    >
                      Feedback Form
                    </a>
                  </div>
                </div>

                {/* Right Column: Address - Fixed for mobile */}
                <div className="mt-6 md:mt-0 text-xl sm:text-2xl md:text-[22px]">
                  <span className="space-y-2 text-base sm:text-lg md:text-xl">
                    <p>Yusof Ishak House</p>
                    <p>31 Lower Kent Ridge Road</p>
                    <p>Singapore 119078</p>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
