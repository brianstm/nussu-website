import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative h-8 w-[2px] bg-gray-800 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-3 w-full bg-[#EF7B00]"
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <p className="tracking-widest text-[#808080] font-normal">SCROLL</p>
    </div>
  );
}
