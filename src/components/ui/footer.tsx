import { motion } from "framer-motion";

const Footer = () => {
  const marqueeText = "GET IN TOUCH";

  return (
    <footer className="bg-primary text-foreground p-8 relative overflow-hidden md:h-[95vh] h-[60vh]">
      <div className="absolute bottom-0 left-0 w-full h-[50%] overflow-hidden md:block hidden">
        <motion.div
          className="flex whitespace-nowrap text-[30rem] font-bold uppercase text-background"
          style={{ width: "max-content" }}
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 150,
            ease: "linear",
          }}
        >
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
          <span className="mr-20">{marqueeText}</span>
        </motion.div>
      </div>

      <div className="md:px-[7rem] md:pt-[9rem] flex flex-col gap-16 pt-[7rem]">
        <div className="relative flex flex-col gap-12 md:flex-row justify-between md:items-center text-center md:text-left font-manrope text-background md:text-[1.35rem] font-light">
          <div className="flex flex-col gap-2 text-start">
            <p>S6 Level 5 Science</p>
            <div className="flex md:flex-col flex-row md:gap-2 gap-1">
              <p>Drive 2 Singapore</p>
              <p>117548</p>
            </div>
          </div>

          <div className="flex flex-col md:gap-5 gap-2 items-end md:items-start">
            <div className="flex gap-6">
              <a href="mailto:nussu@u.nus.edu" className="footer-link">
                nussu@u.nus.edu
              </a>
            </div>
            <div className="flex gap-6">
              <a href="mailto:feedback@nussu.org.sg" className="footer-link">
                feedback@nussu.org.sg
              </a>
            </div>
          </div>

          <div className="flex flex-col md:gap-5 gap-2 items-end">
            <div className="flex gap-6">
              <a href="https://www.tiktok.com/@nussu" className="footer-link">
                tiktok
              </a>
              <a href="https://www.instagram.com/nussu" className="footer-link">
                instagram
              </a>
              <a href="https://t.me/nussu" className="footer-link">
                telegram
              </a>
              <a
                href="https://www.linkedin.com/company/nussu"
                className="footer-link"
              >
                linkedin
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="footer-link">
                student welfare
              </a>
              <a href="#" className="footer-link">
                student life
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center text-center font-light font-manrope text-background tracking-wider">
          <p className="md:text-[0.9rem] text-[0.7rem]">
            © 2024 — National University of Singapore Students' Union
          </p>
          <p className="md:text-[0.9rem] text-[0.7rem]">
            Designed by Arnav, Brians Tjipto, Liu Leng, Zehua Zhang
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = `
  .footer-link {
    position: relative;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .footer-link:hover {
    text-decoration: none;
  }
  .footer-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    bottom: -2px;
    left: 0;
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .footer-link:hover::after {
    opacity: 0;
    transform: translateX(-10px);
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
