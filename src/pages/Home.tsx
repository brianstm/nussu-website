// "use client";

// import React, { useState, useEffect } from "react";
// import { BlurFade } from "@/components/ui/blur-fade";
// import Footer from "@/components/ui/footer";
// import { Title } from "@/components/ui/title";
// import NavBar from "@/components/ui/navbar"; // ✅ Correct import

// const backgroundImages = [
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   "/images/5.jpeg",
//   "/images/6.jpeg",
//   "/images/7.jpeg",
//   "/images/8.jpg",
// ];

// function Home() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % backgroundImages.length
//       );
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Background Image Carousel */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
//         }}
//       />

//       {/* Overlay Content */}
//       <div className="relative z-10">
//         <NavBar /> {/* ✅ Overlay Navbar */}
//         <BlurFade delay={0.25} inView direction="up" offset={20}>
//           <div className="mt-56 text-center">
//             <Title
//               title="Empowering Students, Shaping Futures."
//               description=""
//             />
//           </div>
//         </BlurFade>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Home;

"use client";

// import React, { useState, useEffect } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import { Title } from "@/components/ui/title";
import NavBar from "@/components/ui/navbar";

function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Background Color Set to White */}
      <div className="absolute inset-0 bg-white" />

      {/* Overlay Content */}
      <div className="relative z-10">
        <NavBar /> {/* ✅ Overlay Navbar */}
        <BlurFade delay={0.25} inView direction="up" offset={20}>
          <div className="mt-56 text-center">
            <Title
              title="Empowering Students, Shaping Futures."
              description=""
            />
          </div>
        </BlurFade>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
