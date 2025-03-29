"use client"

import { ArrowRight } from "@phosphor-icons/react";

import {Post}  from "@/data/blogs"
interface ListProps {
    posts : Post[]


const PostItem = ({ post }: { post: Post }) => {
    return (
        <div>
            <a
                href={post.href}
                className="group flex flex-col items-start border-b border-black transition pb-6 tablet:flex-row tablet:items-center"
            >
                <p className="text-[#808080] text-[16px] tablet:w-1/4 laptop:group-hover:translate-x-20 duration-500">{post.date}</p>
                <div className="flex-1 text-[22px] tablet:text-[28px] pb-4 flex items-center gap-2 text-left transition-all duration-500 tablet:group-hover:translate-x-12">
                    <p className="max-w-[450.6px] text-[#111111] tablet:w-2/3 laptop:size-auto tablet:group-hover:text-primary flex items-center h-full transition">{post.title}</p>
                    <ArrowRight size={24} className="opacity-0 tablet:group-hover:opacity-100 text-primary transition" />
                </div>
                <button
                    className="text-[13px] tablet:text-[16px] bg-primary text-background px-4 py-1 rounded"
                    onClick={(e) => e.preventDefault()}
                >
                    {post.category}
                </button>
            </a>
        </div>
    );
};

const List = ({ posts }: ListProps) => {
    return (
        <div className="max-w-none p-8 tablet:p-0 tablet:max-w-[730px] laptop:max-w-[1208px] font-manrope mx-auto">
            <h2 className="text-section-name text-base pb-16 font-semibold">Announcements & Updates</h2>
            <div className="flex flex-col justify-around gap-8">
                {posts.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default List;