"use client";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Footer from "@/components/ui/footer";
import { blogPosts } from "@/data/blogs";

function Blog() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < window.innerHeight * 1.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { slug } = useParams();
  const post = blogPosts.find((post) => post.href.replace("./blog/", "") === slug);

  if (!post) {
    return <div className="text-center text-xl font-semibold mt-20">Post not found!</div>;
  }
  const parseDate = (dateStr: string) => new Date(dateStr);
  const recentPosts = blogPosts
    .filter((post) => post.href.replace("./blog/", "") !== slug)
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, 2);
  return (
    
    <main className="relative w-full bg-white">
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-center text-white mb-0 mt-16 px-4">
        <div className="relative z-10 text-center px-6 mb-0">
          <p className=" font-manrope text-xs md:text-sm lg:text-base text-gray-500 font-normal">
            {post.date}
          </p>
          <h1 className="text-4xl md:text-5xl font-manrope lg:text-6xl text-[5vw] font-normal text-gray-900 leading-tight max-w-6xl mx-auto tracking-wider mt-6">
          {post.title}
        </h1>
          <div className="mt-8 md:mt-12">
            <span className="inline-flex font-manrope items-center justify-center px-6 py-2 bg-orange-500 text-black text-xs md:text-sm lg:text-base font-thin rounded-md tracking-wider">
              {post.category}
            </span>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto">
        <div className="relative w-full h-[1550vh]">
          <iframe
            src={post.netlifyURL}
            className="w-full h-full overflow-hidden"
            title="Blog content"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    
  <section className="max-w-5xl mx-auto mt-16 px-4 mb-28">
    <div className="text-center font-manrope text-black text-base md:text-lg font-normal mb-8 tracking-widest">
      MORE RECENT STORIES
    </div>
    <hr className="border-gray-700 mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {recentPosts.map((post, index) => (
        <div
          key={post.href}
          className={`flex flex-col space-y-2 ${
            index % 2 === 0
              ? 'justify-start items-center md:items-start'
              : 'justify-start items-center md:items-end'
          }`}
        >
          <span className="inline-flex items-center justify-center mt-4 px-4 py-2 mb-4 bg-primary text-black text-sm md:text-base font-thin rounded-md tracking-wider">
            {post.category}
          </span>
          <p className="text-gray-400 font-manrope text-base md:text-lg leading-6">{post.date}</p>
          
          <a href={post.href.replace("./blog/", "")} className="group flex items-center gap-2">
            <h3
              className={` mt-4 font-manrope font-normal text-xl md:text-3xl font-thin leading-relaxed tracking-wide text-center md:text-left ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              } max-w-full md:max-w-[29ch] break-words group-hover:text-primary`}
            >
              {post.title}
            </h3>
          </a>
        </div>
      ))}
    </div>
  </section>
  <Footer/>
  </main>
);
}

export default Blog;

