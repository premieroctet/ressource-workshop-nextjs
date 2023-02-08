import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryLabel from "./CategoryLabel";

const Card = () => {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square">
        <Link href={`/post/`}>
          <Image
            src="https://images.unsplash.com/photo-1675767528117-963ce219b52a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="title"
            sizes="80vw"
            fill
            className="transition-all"
          />
        </Link>
      </div>
      <CategoryLabel />
      <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
        <Link href={`/post/`}>
          <span
            className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
          >
            Architectural Engineering Wonders of the modern era for your
            Inspiration
          </span>
        </Link>
      </h2>

      <div className="hidden">
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          <Link href={`/post/`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            minus aperiam voluptas cumque magnam unde nemo aliquam error
            explicabo quasi ut deleniti optio iure ipsum, nesciunt, expedita
            cupiditate maiores maxime.
          </Link>
        </p>
      </div>

      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-5 h-5">
            <Image
              src="https://pbs.twimg.com/profile_images/1063353598673858560/ipvjprrg_400x400.jpg"
              fill
              alt="author"
              sizes="30px"
              className="rounded-full"
            />
          </div>
          <span className="text-sm">Baptiste</span>
        </div>
        <span className="text-xs text-gray-300 dark:text-gray-600">&bull;</span>
        <time className="text-sm" dateTime="">
          Lundi 8 février 2023
        </time>
      </div>
    </div>
  );
};

export default Card;
